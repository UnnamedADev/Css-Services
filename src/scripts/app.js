//IMPORT
import {loadData} from './modules/ajax_data.js';

document.addEventListener("DOMContentLoaded", () =>{
    
    let menuBttns = document.getElementById("stMenu").getElementsByTagName("li");
    let loadCnt = document.getElementById("stDataContainer");

    console.log(menuBttns);
    console.log(loadCnt);

    for(let i = 0; i<menuBttns.length;i++){
        
        switch(i){
            case 0:
            menuBttns[i].addEventListener("click", () => {
                loadData(loadCnt,"../partials/box-shadow.html");
            });
            break;
        }
    }
});