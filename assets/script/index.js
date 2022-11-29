'use strict';

let info = document.querySelector('.info');
let span = document.querySelector('.info span');
let btn = document.querySelector('.post button');
let grid = document.querySelector('.grid-container');
let items = document.querySelectorAll('.grid-container div');
let photo = document.querySelector('.photo');
class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {return this.#id};
    get name() {return this.#name};
    get userName() {return this.#userName};
    get email() {return this.#email};

    getInfo() {
        return `ID:${this.#id}<br>
                Name:${this.#name}<br>
                userName:${this.#userName}<br>
                Email:${this.email}`
    }

} 
const user = new User('1234567', 'Jack Ma', 'Ali', '56789@gmail.com');


let flag = 0;
photo.addEventListener('click', function() {
    if(flag === 0) {
        info.style.visibility = 'visible';
        span.innerHTML = user.getInfo();
        flag = 1;
    } else {
        info.style.visibility = 'hidden';
        flag = 0;
    }   
});


let file = document.querySelector('.upfile')
let nameShow = document.querySelector('.picture span')

file.addEventListener('change', function() {
    let fileName = this.files[0].name.trim();
    nameShow.innerHTML = `${fileName}`;
});


let output = document.querySelector('.grid-container div .text');
btn.addEventListener('click', function() {
    let text = document.querySelector('.note textarea').value;
    let item = document.createElement('div');
    let userName = document.querySelector('.userInfo span');
    let newTime = document.querySelector('.time');
    let attach = document.querySelector('.attach');
    let time = new Date();

    userName.innerHTML = user.name;
    newTime.innerHTML = time.toString().substring(0, 15);
    output.innerHTML = text;
    item.innerHTML = attach.innerHTML;
    grid.insertBefore(item, grid.children[0]);

    let photoFile = file.files;
    let reader = new FileReader();
    reader.readAsDataURL(photoFile[0]);
    reader.onload = function() {
        let image = document.createElement('img');
        image.width = '500';
        image.src = reader.result;
        let items = document.querySelector('.grid-container div');
        items.append(image);
    }
    
    item.addEventListener('click', function() {
        grid.removeChild(this);
    });
});





































