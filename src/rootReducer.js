import { combineReducers } from 'redux';
import { mapType, mapRef } from './redux/reducers/map';
import units from './redux/reducers/unit';
import filters from './redux/reducers/filter';
import user from './redux/reducers/user';
import districts from './redux/reducers/district';
import service from './redux/reducers/services';
import selectedUnit from './redux/reducers/selectedUnit';

// Export all redux reducers here
export default combineReducers({
  mapType,
  mapRef,
  units,
  filters,
  user,
  districts,
  service,
  selectedUnit,
});
