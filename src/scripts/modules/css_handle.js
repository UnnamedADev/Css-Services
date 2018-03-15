export const inputHandle = () => {

    //value changed
    const valueChanged = (inp) => {
        //code
    }

    //value modified
    let myint = 'undefined';
    const valueModify = (myinput,bttn,state) => {
        bttn.addEventListener('mousedown', () => {
            myint = window.setInterval(() => {
                let val = parseInt(myinput.value);
               switch(state){
                   case true:
                   val++;
                   break;
                   case false:
                   val--;
                   break;
               }
                myinput.value = val;
                valueChanged(myinput);
            },100);
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

            valueModify(input,lessBttn,false);
            valueModify(input,moreBttn,true);

            input.addEventListener('change',() => {
                valueChanged(input);
            });
        }
        //color
        if(conf[i].classList.contains('colorConf')){

        }
    }
}