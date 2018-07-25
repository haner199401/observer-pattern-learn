/**
 * @author haner
 * @date 2018/7/25
 * @brief
 */


import Subject from './observer/Subject';

function extend(obj, extension) {
    for (let key in extension) {
        obj[key] = extension[key];
    }
}


let controlCheckbox = document.getElementById("mainCheckbox");
let addBtn = document.getElementById("addNewObserver");
let container = document.getElementById("observersContainer");

extend(controlCheckbox, new Subject());

controlCheckbox.onclick = function () {
    controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = function () {
    let check = document.createElement("input");
    check.type = "checkbox";

    extend(check, {});

    check.update = function (value) {
        this.checked = value;
    };

    controlCheckbox.addObserver(check);

    container.appendChild(check);
};


