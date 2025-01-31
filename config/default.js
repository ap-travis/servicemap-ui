export default {
  // server
  "server": {
    "address": "127.0.0.1",
    "port": "2048",
    "url_prefix": "/"
  },
  // API
  "unit": {
    "api_url": "https://api.hel.fi/servicemap/v2/"
  },
  "events": {
    "api_url": "https://api.hel.fi/linkedevents/v1/"
  },
  "reservations": {
    "api_url": "https://api.hel.fi/respa/v1/"
  },
  // constants
  "accessibility_colors":  {
    "default": "#2242C7",
    "missing_info": "#4A4A4A",
    "shortcomings": "#b00021",
  },
  "mobile_ui_breakpoint": 699,
  "small_screen_breakpoint": 899,
  "topBarHeight": 64,
  // locales
  "default_locale": 'fi',
  "street_address_languages": ["fi", "sv"],
  "supported_languages": [
    "fi", "sv", "en"
  ],
}
