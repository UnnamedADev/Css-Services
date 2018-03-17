//IMPORT
import {loadData} from './ajax_data.js';
//MODULE
export const menuEvents = () => {
    let menuBttns = document.getElementById('stMenu').getElementsByTagName('li');
    let loadCnt = document.getElementById('stDataContainer');
    
    for(let i = 0; i<menuBttns.length;i++){
        
        let destination = menuBttns[i].getElementsByTagName('a')[0].textContent;
        destination = 'dist/partials/'+destination.replace(' ', '-')+'.html';

        menuBttns[i].addEventListener('click', function(){
            let allBttns = document.getElementById('stMenu').getElementsByTagName('li');
            for(let k = 0;k<allBttns.length;k++){
                allBttns[k].classList.remove('stMenu_active');
            }
            this.classList.add('stMenu_active');
            loadData(loadCnt, destination);
        });
    }
}

export const menuWrapper = () => {

    let menu = document.getElementById('stMenu');
    let my = menu.offsetTop;
    let state = false;
    let cont = document.getElementById('stDataContainer');
    window.addEventListener('scroll', function(){
        if(this.scrollY >= menu.offsetTop && state == false){
            cont.style.paddingTop = menu.scrollHeight+'px';
            menu.classList.add('wrappedMenu');
            state = true;
        }
        if(this.scrollY < my && state == true){
            cont.style.paddingTop = "";
            menu.classList.remove('wrappedMenu');
            state = false;
        }
    });
}

export const serviceMap = () => {
    let menu = document.getElementById('stMenu');
    let menuPoints = menu.getElementsByTagName('a');
    let map = document.getElementById('stServiceMap');
    for(let i = 0;i<menuPoints.length;i++){
        map.innerHTML += '<li>'+menuPoints[i].textContent+'</li>';
        map.getElementsByTagName('li')[i].style.width = 100/menuPoints.length+'%';
    }
    let newPoints = map.getElementsByTagName('li');

    for(let k = 0;k<newPoints.length;k++){
        newPoints[k].addEventListener('click', () => {
            let findLi = document.getElementById('stMenu').getElementsByTagName('li');
            for(let j = 0;j<findLi.length;j++){
                if(findLi[j].getElementsByTagName('a')[0].textContent == newPoints[k].textContent){
                    findLi[j].click();
                };
            }
        });
    }

}