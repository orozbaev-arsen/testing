const state = {
  menu_items: [
    { index: '1', name: 'Grid', text: 'Home' },
    { index: '2', name: 'About', text: 'About' },
    { index: '3', name: 'Contacts', text: 'Contacts' },
  ],
  loading: {
    get_tiles: false,
  },
  error: null,
  json_url: '/static/tiles.json', // TODO: debug mode
  tiles: [],
};

export default state;
