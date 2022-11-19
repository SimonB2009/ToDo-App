class ToDoItem {
  constructor(checked, was,day,time) {
    this.checked = checked;
    this.todo = was;
    this.day = day;
    this.time =time;
  }
}


let todo;
let day;
let time;
let nameofList;
//const t = new ToDoItem(0,"dkdk","1.10","23:00");
let  list = [];
//localStorage.setItem("TodoList", JSON.stringify(list));
list = JSON.parse(localStorage.getItem("TodoList")) || {};



function addtoList() {
    const p = new ToDoItem(0, document.getElementById("todo").value,document.getElementById("day").value,document.getElementById("time").value);
    
    console.log(list.length)
    
    document.getElementById("MyTable").innerHTML = document.getElementById("MyTable").innerHTML + " \
                <tr onclick=\"selected(" + list.length + ");\"> \
                  <td><i class=\"fa-solid fa-xmark\"></i></td> \
                  <td class=\"mdl-data-table__cell--non-numeric\">" + p.todo + "</td> \
                  <td>" + p.day + "</td> \
                  <td>" + p.time + "</td> \
                  <td><i onclick=\"removeItem(" + list.length + ");\" class=\"fa-solid fa-trash\"></i></td> \
                </tr>"; 

    
    // "<tr> \
    // <td><label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select mdl-js-ripple-effect--ignore-events is-upgraded\" data-upgraded=\",MaterialCheckbox,MaterialRipple\"><input type=\"checkbox\" class=\"mdl-checkbox__input\"><span class=\"mdl-checkbox__focus-helper\"></span><span class=\"mdl-checkbox__box-outline\"><span class=\"mdl-checkbox__tick-outline\"></span></span><span class=\"mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center\" data-upgraded=\",MaterialRipple\"><span class=\"mdl-ripple\"></span></span></label></td><td class=\"mdl-data-table__cell--non-numeric\">" + nameofObject +"</td> \
    // <td>" + crowd + "</td> \
    // <td>" + creator + "</td> \
    // </tr>";

    document.getElementById("todo").value =  "";
    document.getElementById("day").value =  "";
    document.getElementById("time").value =  "";
    list.push(p);
    console.log(list);
    localStorage.setItem("TodoList", JSON.stringify(list));
}



function loadData()  {

  list.forEach(function (p, i) {
    console.log('%d: %s', i, p.todo);
    if (p.checked == 1)
      c = "<i id=" + i + " onclick=\"selected(" + i + ");\" class=\"fa-solid fa-check\"></i>"
    else
      c = "<i onclick=\"selected(" + i + ");\" class=\"fa-solid fa-xmark\"></i>"

    document.getElementById("MyTable").innerHTML = document.getElementById("MyTable").innerHTML + " \
    <tr > \
    <td>" + c + "</td> \
                    <td class=\"mdl-data-table__cell--non-numeric\">" + p.todo + "</td> \
                    <td>" + p.day + "</td> \
                    <td>" + p.time + "</td> \
                    <td><i onclick=\"removeItem(" + i + ");\" class=\"fa-solid fa-trash\"></i></td> \
                  </tr>"; 
  });


}

function selected(arraynummber) {
  console.log(list[arraynummber].checked);

  if(list[arraynummber].checked == 0) {
    list[arraynummber].checked = 1;
  } else {
    list[arraynummber].checked = 0;
  }

  location.reload();
  localStorage.setItem("TodoList", JSON.stringify(list));

}

function removeItem(arraynummber) {
  list.splice(arraynummber,1)
  localStorage.setItem("TodoList", JSON.stringify(list));
  location.reload();

}