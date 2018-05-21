function component() {
    var element = document.createElement('div');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    return element;
    console.log(1212)
    alert('Hmmm, this probably isn\'t a great idea...')
}

document.body.appendChild(component());