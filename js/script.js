const requestURL = 'cc.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const cc = request.response;
    
}

function CentrosCosto(jsonObj){
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['cc'];
    
}