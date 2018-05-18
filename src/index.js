import {cube} from './js/math'
import './scc/demo.css'

function component(){
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./js/print.js',function(){
         console.log(12122)
         printMe();
    })
}