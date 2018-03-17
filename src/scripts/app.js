//IMPORT
import {loadData} from './modules/ajax_data.js';
import {menuEvents, menuWrapper, serviceMap} from './modules/menu.js';

document.addEventListener('DOMContentLoaded', () => {
    menuEvents();
    menuWrapper();
    serviceMap();
    loadData('stDataContainer','./dist/partials/box-shadow.html');
});