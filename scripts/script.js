//1. First get json data from the URL using fetch
// 2. 


const URL = "https://jsonplaceholder.typicode.com/"

function success(data) {
    var data = JSON.parse(this.responseText);
    console.log(data);
};

function error(error) {
    console.log('Request failed', error);
};

const xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open("GET", 'https://api.github.com/users/manishmshiva');
xhr.send();