export const inputHandle = () => {

    //value modified
    let myint = 'undefined';
    const valueModify = (myinput,bttn,state,max,min) => {
        bttn.addEventListener('mousedown', () => {
            myint = window.setInterval(() => {
                let val = parseInt(myinput.value);
                switch(state){
                    case true:
                    if(val < max){
                            val++;
                    }
                    break;
                    case false:
                    if(val > -min){
                            val--;
                    }
                    break;
                }
                myinput.value = val;
                let evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                myinput.dispatchEvent(evt);

            },50);
        });
        bttn.addEventListener('mouseup', () => {
            window.clearInterval(myint);
        });
    }

    //overall handle
    let conf = document.getElementsByClassName('stConf');
    for(let i = 0; i<conf.length; i++){
        //non color
        if(!conf[i].classList.contains('colorConf')){
            let cont = conf[i];
            let input = cont.getElementsByTagName('input')[0];
            let leftProg = cont.getElementsByTagName('progress')[0];
            let rightProg = cont.getElementsByTagName('progress')[1];
            let lessBttn = cont.getElementsByTagName('button')[0];
            let moreBttn = cont.getElementsByTagName('button')[1];

            valueModify(input,lessBttn,false,rightProg.getAttribute('max'),leftProg.getAttribute('max'));
            valueModify(input,moreBttn,true,rightProg.getAttribute('max'),leftProg.getAttribute('max'));

            input.addEventListener('change',() => {
                let minval = leftProg.getAttribute('max');
                let maxval = rightProg.getAttribute('max');
                if(input.value > 0){
                    leftProg.value = 0;
                    rightProg.value = Math.abs(input.value);
                }
                if(input.value < 0){
                    rightProg.value = 0;
                    leftProg.value = Math.abs(input.value);
                }
            });
        }
        //color
        if(conf[i].classList.contains('colorConf')){

        }
    }
}

export const generateCode = () => {
    let pid = document.getElementsByClassName('stSection')[0].id;
    let allInputs = document.getElementsByTagName('input');
    let ourTarget = document.getElementById('stTarget');
    let codeTarget = document.getElementById('codeTarget');
    switch(pid){
        case "stBox-Shadow":
            //shadow box
            let finalColor = 'rgba('+allInputs[4].value+', '+allInputs[5].value/100+')';
            let finalCode = allInputs[0].value+'px '+allInputs[1].value+'px '+allInputs[2].value+'px '+allInputs[3].value+'px '+finalColor;
            console.log(finalCode);
            ourTarget.style.boxShadow = finalCode;
            console.log(ourTarget);

            let textCode = 'box-shadow: '+finalCode+'\n';
            textCode += '-moz-box-shadow: '+finalCode+'\n';
            textCode += '-webkit-box-shadow: '+finalCode+'\n';
            textCode += '-o-box-shadow: '+finalCode+'\n';
            textCode += '-ms-box-shadow: '+finalCode+'\n';

            codeTarget.textContent = textCode;
        break;
        case "stText-Shadow":
        break;
        default:
        console.log("Invalid partial ID");
        break;
    }
}

export const codeHandle = () => {

    let allInputs = document.getElementsByTagName('input');

    for(let i = 0;i<allInputs.length;i++){
        let valTab = [];
        allInputs[i].addEventListener('change',() => {
            generateCode();
        });
        generateCode();
    }
}