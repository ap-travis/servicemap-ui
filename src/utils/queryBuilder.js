import { fetchHasErrored, fetchIsLoading, unitsFetchDataSuccess } from '../redux/actions';
import config from '../../config';

const allowedTypes = [
  'search',
  'unit'
];

const searchQueryData = {
  page: 1,
  page_size: 1000,
  only: 'root_service_nodes,services,location,name,street_address,contract_type,municipality',
  include: 'service_nodes,services',
  geometry: true,
}

class QueryBuilder {
  constructor() {
    const { unit } = config;
    this.url = unit && unit.api_url;
  }

  defaultType = 'search';
  searchQuery = null;
  data = null;

  // Set type of query
  setType = (type, data = null) => {
    // Check that type is valid
    if (allowedTypes.includes(type)) {
      this.type = type;
      this.data = data;
    } else {
      this.type = this.defaultType;
    }
    return this;
  }

  // Return query data object based on given type
  getQueryData = () => {
    switch (this.type) {
      case 'search':
        return searchQueryData;
      case 'unit':
        return null
      default:
        return searchQueryData;
    }
  }

  // Get base url
  getBase = () => {
    return this.url;
  }

  // Set query to search and add search text
  search = (search = null) => {
    if (search && typeof search === 'string') {
      this.setType('search');
      this.searchQuery = search;
    }
    return this;
  }

  // Build query to a URL
  run = () => {
    let query = '',
        fetchURL = null,
        first = true;

    const data = this.getQueryData();

    if (data) {
      // Add search query to query data
      if (this.searchQuery && this.searchQuery !== '') {
        data['q'] = this.searchQuery;
      }

      Object.keys(data).forEach(function (item) {
        if (first) {
          query += `${item}=${data[item]}`;
          first = false;
        } else {
          query += `&${item}=${data[item]}`;
        }
      });
    }

    switch (this.type) {
      case 'unit':
        fetchURL = `${this.url}${this.type}/${this.data}`
        break;
      default:
        fetchURL = `${this.url}${this.type}/?${encodeURI(query)}`;
    }

    return fetch(fetchURL);
  }
}

export default new QueryBuilder();
