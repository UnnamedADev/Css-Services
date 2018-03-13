//IMPORT
import {loadData} from './ajax_data.js';
//MODULE
export const menuEvents = () => {
    let menuBttns = document.getElementById('stMenu').getElementsByTagName('li');
    let loadCnt = document.getElementById('stDataContainer');
    
    for(let i = 0; i<menuBttns.length;i++){
        
        let destination = menuBttns[i].getElementsByTagName('a')[0].textContent;
        destination = 'dist/partials/'+destination.replace(" ", "-")+'.html';

        menuBttns[i].addEventListener("click", function(){
            let allBttns = document.getElementById('stMenu').getElementsByTagName('li');
            for(let k = 0;k<allBttns.length;k++){
                allBttns[k].classList.remove("stMenu_active");
            }
            this.classList.add("stMenu_active");
            loadData(loadCnt, destination);
        });
    }
}

export const menuWrapper = () => {

    let menu = document.getElementById("stMenu");
    let my = menu.offsetTop;
    let state = false;

    window.addEventListener("scroll", function(){
        if(this.scrollY >= menu.offsetTop && state == false){
            menu.classList.add("wrappedMenu");
            state = true;
        }
        if(this.scrollY <= my && state == true){
            menu.classList.remove("wrappedMenu");
            state = false;
        }
    });
}