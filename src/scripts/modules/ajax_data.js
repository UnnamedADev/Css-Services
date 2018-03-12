//IMPORT

//MODULE
export const loadData = (object, path) => {

    if(!object || !path){
        return 'Handled object / object ID or file path is invalid';
    }

    switch(typeof(object)){
        case 'object':
        break;
        case 'string':
        object = document.getElementById(object);
        break;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        object.innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', path, true);
    xhttp.send();
}