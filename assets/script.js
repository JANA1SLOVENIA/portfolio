const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

const url = 'Vatc#1531';

document.getElementById('myItem').addEventListener('click', function(e) {
    let myUrl = url
    copyToClipboard(myUrl);
    alert('Skopiowano do schowka!')
});