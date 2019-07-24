import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
} from '@material-ui/core';
import BackButton from '../BackButton';

const TitleBar = ({
  backButton, classes, title, titleComponent, icon, primary,
}) => (
  <>
    <div className={`${classes.container} ${primary ? classes.colorPrimary : classes.colorLight}`}>

      {
        backButton
        && (
          <BackButton
            className={classes.iconButton}
            variant="icon"
          />
        )
      }
      {
        !backButton
        && icon
        && (
          <div className={classes.iconButton} aria-hidden="true">
            {icon}
          </div>
        )
      }
      <Typography
        className={classes.title}
        component={titleComponent}
        text={title}
        variant="h6"
        tabIndex="-1"
      >
        {title}
      </Typography>
    </div>
  </>
);

TitleBar.propTypes = {
  backButton: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  titleComponent: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  icon: PropTypes.objectOf(PropTypes.any),
  primary: PropTypes.bool,
};

TitleBar.defaultProps = {
  backButton: false,
  titleComponent: 'h3',
  icon: null,
  primary: false,
};

export default TitleBar;
