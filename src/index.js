import _ from 'lodash';
import './scc/style.css';
import printMe from './js/print.js'
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./js/print.js',function(){
         console.log(12122)
         printMe();
    })
}