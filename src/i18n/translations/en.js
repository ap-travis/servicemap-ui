/* eslint-disable quote-props */
export default {
  'app.title': 'Service map',
  'address': 'Address',

  // Accessibility
  'accessibility': 'Accessibility',
  'accessibility.details': 'Accessibility details',
  'accessibility.stamp': 'Accessibility acknowledged',
  'accessibility.shortcomings': 'Shortcomings',
  'accessibility.shortcomings.plural': `{count, plural,
                                =0 {no shortcomings}
                                one {# shortcoming}
                                other {# shortcomings}
                              }`,

  // Address
  'address.show.area': 'Show area on map',
  'address.list.geographical': 'Geographical',
  'address.list.protection': 'Protection',
  'address.list.health': 'Health',
  'address.list.education': 'Education',
  'address.list.neighborhood': 'Neighborhood',
  'address.list.postcode_area': 'Postcode area',
  'address.list.rescue_area': 'Rescue area',
  'address.list.rescue_district': 'Rescue district',
  'address.list.rescue_sub_district': 'Rescue subdistrict',
  'address.list.health_station_district': 'Health station district',
  'address.list.maternity_clinic_district': 'Maternity clinic district',
  'address.list.lower_comprehensive_school_district_fi': 'Finnish elementary school',
  'address.list.lower_comprehensive_school_district_sv': 'Swedish elementary school',
  'address.list.upper_comprehensive_school_district_fi': 'Finnish secondary school',
  'address.list.upper_comprehensive_school_district_sv': 'Swedish secondary school',
  'address.list.preschool_education_fi': 'Finnish preschool education',
  'address.list.preschool_education_sv': 'Swedish preschool education',
  'address.error': 'No address found',
  'address.nearby': 'Nearby',


  // Event
  'event.nearby': 'Nearby events',
  'event.description': 'Description',
  'event.time': 'Date and time',
  'event.picture': 'Event picture',
  'event.title': 'Events',

  // Sorting
  'sorting.label': 'Order search results',
  'sorting.alphabetical.asc': 'Reversed alphabetical',
  'sorting.alphabetical.desc': 'Alphabetical',
  'sorting.match.desc': 'Relevance',

  // General
  'general.back': 'Back',
  'general.back.address': 'Back to address view',
  'general.back.home': 'Back to home view',
  'general.back.goToHome': 'Go to home view',
  'general.back.search': 'Back to search view',
  'general.back.service': 'Back to service view',
  'general.back.unit': 'Back to unit view',
  'general.back.event': 'Back to event view',
  'general.backToHome': 'Close search and return to beginning',
  'general.backToStart': 'Back to beginning of page',
  'general.cancel': 'Cancel',
  'general.close': 'Close',
  'general.closeSettings': 'Close settings',
  'general.fetching': 'Loading data...',
  'general.home': 'Home',
  'general.noData': 'No data available',
  'general.loading': 'Loading',
  'general.showOnMap': 'Show on map',
  'general.pageTitles.home': 'Home view',
  'general.pageTitles.search': 'Search view',
  'general.pageTitles.unit': 'Unit view',
  'general.pageTitles.service': 'Service view',
  'general.pageTitles.event': 'Event view',
  'general.pageTitles.address': 'Address view',
  'general.pageTitles.list.services': 'Service list ',
  'general.pageTitles.list.events': 'Event list ',
  'general.pageTitles.list.reservations': 'Reservation list ',
  // General - Pagination
  'general.pagination.previous': 'Previous page',
  'general.pagination.next': 'Next page',
  'general.pagination.openPage': 'Open page {count}',
  'general.pagination.currentlyOpenedPage': 'Page {count} currently opened',
  'general.pagination.pageCount': 'page {current} / {max}',

  'general.return.viewTitle': 'Return to beginning of main content',
  'general.skipToContent': 'Skip to content',
  'general.give.feedback': 'Give feedback on the Servicemap test version (link opens in a new tab)',
  'general.new.tab': 'Opens in new tab',
  'general.time.short': 'at',
  'general.save': 'Save',
  'general.save.changes': 'Save changes',
  'general.save.changes.done': 'Changes have been saved!',
  'general.save.confirmation': 'Would you like to save changes?',

  // Home
  'home.example.title': 'Example search phrases',
  'home.example.search': 'Search for',
  'home.message': 'Message from the developers',
  'home.send.feedback': 'Send feedback',

  // Map
  'map': 'Map',
  'map.transit.endStation': 'Terminus',
  'map.address.searching': 'Retreiving address...',
  'map.address.info': 'Address information',

  // Unit
  'unit': 'Unit',
  'unit.accessibility.noInfo': 'No accessibility information', // TODO: verify
  'unit.accessibility.noShortcomings': 'No accessibility shortcomings', // TODO: verify
  'unit.accessibility.ok': 'No accessibility shortcomings', // TODO: verify
  'unit.accessibility.problems': `{count, plural,
                                    =0 {No accessibility shortcomings}
                                    one {# accessibility shortcoming}
                                    other {# accessibility shortcomings}
                                  }`, // TODO: verify
  'unit.basicInfo': 'Information',
  'unit.data_source': 'Source: {data_source}',
  'unit.details.notFound': 'Unit info not found.',
  'unit.plural': 'Units',

  'unit.contact.info': 'Contact information',
  'unit.services': 'Services',
  'unit.eServices': 'Electronic services', // TODO: verify
  'unit.reservations': 'Reservable objects', // TODO verify
  'unit.events': 'Events',
  'unit.homepage': 'Home page',
  'unit.picture': 'Picture of unit: ',
  'unit.description': 'Unit description',
  'unit.address': 'Address',
  'unit.phone': 'Phone number',
  'unit.opening.hours': 'Opening hours',
  'unit.opening.hours.info': 'Additional information about opening hours', // TODO verify
  'unit.contact': 'Contact person',
  'unit.school.year': 'School year',
  'unit.opens.new.tab': '(new tab)',
  'unit.call.number': '(call)',
  'unit.more.reservations': 'Show all {count} objects', // TODO verify
  'unit.more.services': 'Show all {count} services',
  'unit.more.events': 'Show all {count} events',
  'unit.list.services': 'Services',
  'unit.list.events': 'Events',
  'unit.list.reservations': 'Reservable objects', // TODO verify

  // Search
  'search': 'Search',
  'search.info': `{count, plural,
                  =0 {no units}
                  one {# unit}
                  other {# units}
                } found`,
  'search.resultList': `{count, plural,
                  =0 {no results}
                  one {# result}
                  other {# results}
                }`,
  'search.results': `{count, plural,
                  =0 {No results found with given search}
                  one {# result found}
                  other {# results found}
                }`,
  'search.results.short': `{count, plural,
                  =0 {No results}
                  one {# result}
                  other {# results}
                }`,
  'search.results.units': `{count, plural,
                  =0 {no units found}
                  one {# unit found}
                  other {# units found}
                }`,
  'search.results.services': `{count, plural,
                  =0 {no services found}
                  one {# service found}
                  other {# services found}
                }`,
  'search.results.title': 'Search results',
  'search.input.placeholder': 'Search units',
  'search.loading.units': 'Searching units {count} / {max}',
  'search.loading.units.srInfo': 'Search loading {count} units',
  'search.notFound': 'No results found with given search',
  'search.started': 'Search started',

  // Service
  'service': 'Service',
  'service.plural': 'Services',
  'service.nearby': 'Nearby services',
  'service.units.empty': 'Service doesn\'t have units',

  // Settings
  'settings': 'Settings',
  'settings.sense.title': 'Hearing and sight',
  'settings.sense.hearing': 'I use a hearing aid',
  'settings.sense.visual': 'I\'m visually impaired',
  'settings.sense.colorblind': 'I have trouble distinguishing colours',
  'settings.mobility.title': 'Mobility',
  'settings.mobility.none': 'No mobility impairments',
  'settings.mobility.wheelchair': 'I use a wheelchair',
  'settings.mobility.reduced_mobility': 'I have reduced mobility',
  'settings.mobility.rollator': 'I use a rollator',
  'settings.mobility.stroller': 'I push a stroller',
  'settings.aria.changed': 'Settings have changed. Remember to save',
  'settings.aria.closed': 'Settings closed',
  'settings.aria.open': 'Open settings',
  'settings.aria.opened': 'Settings opened',
  'settings.aria.saved': 'Settings have been saved',
};
