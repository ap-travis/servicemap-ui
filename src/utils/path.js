import paths from '../../config/paths';
import config from '../../config';

export const comparePath = (path, location) => {
  if (Object.prototype.hasOwnProperty.call(paths, path)) {
    const { regex } = paths[path];
    if (regex && regex.exec(location)) {
      return true;
    }
  }
  return false;
};

export const getPathName = (location) => {
  let result;
  Object.keys(paths).forEach((key) => {
    if (result) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(paths, key)) {
      const { regex } = paths[key];
      if (regex && regex.exec(location)) {
        result = key;
      }
    }
  });

  return result;
};

// Generate path for page
export const generatePath = (path, locale = config.default_locale, data = null) => {
  if (Object.prototype.hasOwnProperty.call(paths, path)) {
    const pathString = paths[path].generate(data); // Create path string
    return `/${locale || config.default_locale}${pathString}`; // Return path with locale
  }
  return null;
};
