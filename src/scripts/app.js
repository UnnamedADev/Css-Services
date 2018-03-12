//IMPORT
import {loadData} from './modules/ajax_data.js';
import {menuEvents, menuWrapper} from './modules/menu.js';

document.addEventListener('DOMContentLoaded', () => {
    menuEvents();
    menuWrapper();
});