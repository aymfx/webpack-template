import _ from 'lodash';
import './scc/style.css';
import imgsrc from './images/a.jpg'
function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    var myIcon = new Image();
    myIcon.src = imgsrc;
    // myIcon.width=100+'px';
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());