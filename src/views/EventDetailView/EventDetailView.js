import React from 'react';
import PropTypes from 'prop-types';

// TODO Remove this when redux selected event is used
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from 'react-intl';
import { AccessTime, Phone, Event } from '@material-ui/icons';
import { changeSelectedEvent } from '../../redux/actions/event';
import { fetchSelectedUnit } from '../../redux/actions/selectedUnit';
import DescriptionText from '../../components/DescriptionText';
import SearchBar from '../../components/SearchBar';
import TitleBar from '../../components/TitleBar';
import { DesktopComponent, MobileComponent } from '../../layouts/WrapperComponents/WrapperComponents';
import SimpleListItem from '../../components/ListItems/SimpleListItem';
import UnitItem from '../../components/ListItems/UnitItem';
import TitledList from '../../components/Lists/TitledList';
import UnitHelper from '../../utils/unitHelper';

class EventDetailView extends React.Component {
  componentDidMount() {
    const {
      event, changeSelectedEvent, fetchSelectedUnit, selectedUnit,
    } = this.props;

    // TODO: move this first fetch to server side
    if (!event) {
      const { match } = this.props;
      if (match.params && match.params.event) {
        fetch(`https://api.hel.fi/linkedevents/v1/event/${match.params.event}/?include=location,location.accessibility_shortcoming_count`)
          .then(response => response.json())
          .then((data) => {
            changeSelectedEvent(data);

            // Attempt fetching selected unit if it doesn't exist or isn't correct one
            const unit = data.location;
            if (typeof unit === 'object' && unit.id) {
              const unitId = unit.id.split(':').pop();
              if (
                !UnitHelper.isValidUnit(selectedUnit)
                || parseInt(unitId, 10) !== selectedUnit.id
              ) {
                fetchSelectedUnit(unitId);
              }
            }
          });
      }
    }
  }

  // TODO: maybe combine this with the date fomratting used in events component
  formatDate = (event) => {
    const { intl } = this.props;
    const startDate = intl.formatDate(event.start_time, {
      year: 'numeric', month: 'numeric', day: 'numeric',
    });
    const endDate = intl.formatDate(event.end_time, {
      year: 'numeric', month: 'numeric', day: 'numeric',
    });
    const startDateFull = intl.formatDate(event.start_time, {
      weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    });
    const endDateFull = intl.formatDate(event.end_time, {
      weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    });

    let time = `${startDateFull} —\n${endDateFull}`;
    if (startDate === endDate) {
      if (startDateFull !== endDateFull) {
        time = `${startDateFull} — ${intl.formatDate(event.end_time, { hour: 'numeric', minute: 'numeric' })}`;
      } else {
        time = startDateFull;
      }
    }
    return time;
  }

  render() {
    const {
      event, intl, getLocaleText, selectedUnit,
    } = this.props;
    if (event) {
      const description = event.description || event.short_description;
      const unit = selectedUnit;
      if (!unit) {
        return null;
      }
      const phoneText = unit.phone ? `${unit.phone} ${intl.formatMessage({ id: 'unit.call.number' })}` : null;
      const time = this.formatDate(event);
      return (
        <>
          <DesktopComponent>
            <SearchBar placeholder={intl.formatMessage({ id: 'search' })} />
            <TitleBar title={getLocaleText(event.name)} icon={<Event />} />
          </DesktopComponent>
          <MobileComponent>
            <TitleBar title={getLocaleText(event.name)} icon={<Event />} primary backButton />
          </MobileComponent>

          {event.images && (
          <img
            style={{
              width: '100%', maxHeight: 300, objectFit: 'contain', backgroundColor: 'rgba(0,0,0,0.15)',
            }}
            alt={intl.formatMessage({ id: 'event.picture' })}
            src={event.images[0].url}
          />
          )}

          <TitledList titleComponent="h4" title={intl.formatMessage({ id: 'unit.contact.info' })}>
            <SimpleListItem
              key="eventHours"
              icon={<AccessTime />}
              text={time}
              srText={intl.formatMessage({ id: 'event.time' })}
              divider
            />
            <UnitItem
              key="unitInfo"
              unit={unit}
            />
            {
               phoneText
               && (
               <SimpleListItem
                 key="contactNumber"
                 icon={<Phone />}
                 text={phoneText}
                 srText={intl.formatMessage({ id: 'unit.phone' })}
                 link
                 divider={false}
                 handleItemClick={() => {
                   window.location.href = `tel:${unit.phone}`;
                 }}
               />
               )
             }
          </TitledList>

          <DescriptionText
            description={getLocaleText(description)}
            title={intl.formatMessage({ id: 'event.description' })}
            html
          />
        </>
      );
    }
    return (null);
  }
}

EventDetailView.propTypes = {
  changeSelectedEvent: PropTypes.func.isRequired,
  event: PropTypes.objectOf(PropTypes.any),
  fetchSelectedUnit: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  intl: intlShape.isRequired,
  getLocaleText: PropTypes.func.isRequired,
  selectedUnit: PropTypes.objectOf(PropTypes.any),
};

EventDetailView.defaultProps = {
  event: null,
  selectedUnit: null,
};

const mapStateToProps = (state) => {
  const event = state.event.selected;
  const selectedUnit = state.selectedUnit.data;
  return {
    event,
    selectedUnit,
  };
};

export default withRouter(injectIntl(connect(
  mapStateToProps,
  { changeSelectedEvent, fetchSelectedUnit },
)(EventDetailView)));
