let doneList = [];
var txt = '{  "id" : 1,  "title" : "Make a meal",  "description" : "lorem ipsum",  "status" : 0,  "createdAt" : "2019-11-15 18:00"}'
var obj = JSON.parse(txt);

var table = document.getElementById("tableTodo");
var rows = document.getElementsByTagName("tr");

lbl.placeholder = obj.title + " (" + obj.description + ")";


function addTOlist() {
    let obj = document.getElementById('todotext').value;
    var tbl = document.getElementById('tableTodo');

    var tr = document.createElement('tr');
    tr.id = rows.length + 1;
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var btnDone = document.createElement('button');
    var btnRemove = document.createElement('button');
    var lbl = document.createElement('input');
    lbl.placeholder = obj;

    btnDone.className = 'button-done';
    btnDone.innerHTML = "Done";
    btnDone.setAttribute('onClick', 'doneTask(this.parentNode.parentNode.id)');
    btnRemove.className = 'button-remove';
    btnRemove.innerHTML = "Remove";
    btnRemove.setAttribute('onClick', 'removeTask(this.parentNode.parentNode.id)');

    tbl.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td1.appendChild(lbl);
    td2.appendChild(btnDone);
    td3.appendChild(btnRemove);
}

function removeTask(ele) {
    document.getElementById(ele).remove();
}

function removeTask2(ele) {
    document.getElementById("clear").remove();
}

function doneTask(ele) {
    document.getElementById(ele).childNodes[0].childNodes[0].classList.add("text-primary");
}
