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
        if(!conf[i].classList.contains('colorConf') && !conf[i].classList.contains('selectConf')){
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
        //select
        if(conf[i].classList.contains('selectConf')){

        }
    }
}

export const generateCode = () => {
    let pid = document.getElementsByClassName('stSection')[0].id;
    let allInputs = document.getElementsByTagName('input');
    let allSelect = document.getElementsByTagName('select');
    let ourTarget = document.getElementById('stTarget');
    let codeTarget = document.getElementById('codeTarget');
    let finalColor, additionalCode, finalCode, textCode;
    switch(pid){
        case "stBox-Shadow":
            //shadow box
            finalColor = 'rgba('+allInputs[4].value+','+allInputs[5].value/100+')';
            finalCode = allInputs[0].value+'px '+allInputs[1].value+'px '+allInputs[2].value+'px '+allInputs[3].value+'px '+finalColor;
            ourTarget.style.boxShadow = finalCode;

            textCode = 'box-shadow: '+finalCode+';\n';
            textCode += '-moz-box-shadow: '+finalCode+';\n';
            textCode += '-webkit-box-shadow: '+finalCode+';\n';
            textCode += '-o-box-shadow: '+finalCode+';\n';
            textCode += '-ms-box-shadow: '+finalCode+';\n';

            codeTarget.textContent = textCode;
        break;
        case "stText-Shadow":
            //text shadow
            finalColor = 'rgba('+allInputs[3].value+','+allInputs[4].value/100+')';
            finalCode = allInputs[0].value+'px '+allInputs[1].value+'px '+allInputs[2].value+'px '+finalColor;
            ourTarget.style.textShadow = finalCode;

            textCode = 'text-shadow: '+finalCode+';\n';
            textCode += '-moz-text-shadow: '+finalCode+';\n';
            textCode += '-webkit-text-shadow: '+finalCode+';\n';
            textCode += '-o-text-shadow: '+finalCode+';\n';
            textCode += '-ms-text-shadow: '+finalCode+';\n';

            codeTarget.textContent = textCode;
        break;
        case 'stBorders':
            //borders
            finalColor = 'rgba('+allInputs[2].value+','+allInputs[3].value/100+')';
            finalCode = allInputs[0].value+'px '+allSelect[0].value+' '+finalColor;
            additionalCode = allInputs[1].value+'px';
            ourTarget.style.border = finalCode;
            ourTarget.style.borderRadius = additionalCode;

            textCode = 'border: '+finalCode+';\n';
            textCode += 'border-radius: '+additionalCode+';\n';
            textCode += '-moz-border-radius: '+additionalCode+';\n';
            textCode += '-webkit-border-radius: '+additionalCode+';\n';
            textCode += '-o-border-radius: '+additionalCode+';\n';
            textCode += '-ms-border-radius: '+additionalCode+';\n';

            codeTarget.textContent = textCode;
        break;
        case 'stFilter':
            //filter
            finalCode = 'blur('+allInputs[0].value+'px) brightness('+allInputs[1].value+'%) contrast('+allInputs[2].value+'%) grayscale('+allInputs[3].value+'%) hue-rotate('+allInputs[4].value+'deg) invert('+allInputs[5].value+'%) opacity('+allInputs[6].value+'%) saturate('+allInputs[7].value+'%) sepia('+allInputs[8].value+'%)';

            ourTarget.style.filter = finalCode;

            textCode = 'filter: '+finalCode+';\n';
            textCode += '-moz-filter: '+finalCode+';\n';
            textCode += '-webkit-filter: '+finalCode+';\n';
            textCode += '-o-filter: '+finalCode+';\n';
            textCode += '-ms-filter: '+finalCode+';\n';

            codeTarget.textContent = textCode;
        break;
        default:
        console.log("Invalid partial ID");
        break;
    }
}

export const codeHandle = () => {

    let allInputs = document.getElementsByTagName('input');
    let allSelect = document.getElementsByTagName('select');

    for(let i = 0;i<allInputs.length;i++){
        let valTab = [];
        allInputs[i].addEventListener('change',() => {
            generateCode();
        });
        generateCode();
    }

    for(let k = 0;k<allSelect.length;k++){
        allSelect[k].addEventListener('change',() => {
            generateCode();
        });
        generateCode();
    }

    let textCode = document.getElementById('codeTarget');
    let copyBttn = document.getElementsByClassName('stCode')[0].getElementsByTagName('button')[0];
    copyBttn.addEventListener('click',() => {
        textCode.select();
        document.execCommand('copy');
        copyBttn.classList.add('bttnCopyInfo');
        setTimeout(() => {
            copyBttn.classList.remove('bttnCopyInfo');
        },2000);
    });
}