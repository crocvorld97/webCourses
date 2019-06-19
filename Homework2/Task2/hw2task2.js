let userName = '';
let arr = [];
let newEl = document.createElement("h1");
window.onload = () => {
    var reg = /^[A-Za-z_ ]+$/;
    userName = prompt("Enter name of user please.");
    if (reg.test(userName)) {
        arr = userName.split('');
        arr.reverse();
        userName = arr.join('');
    }
    else {
        arr = userName.split('');
        arr.forEach(function (elem, index) {
            if (index % 2)
                this[index] = elem.toUpperCase();
            else
                this[index] = elem.toLowerCase();
        }, arr);
        userName = arr.join('');
        newEl.innerHTML = userName;
    }
    alert(userName);
};
