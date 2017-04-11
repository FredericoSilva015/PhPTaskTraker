// the function that is called when the picking of elemnt event happens
// event.preventDefault() prevents the default behavior, which would be a linking on the corresponding div
function allowDrop(ev) {
    ev.preventDefault();
}

// this function will append the element to the new div
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    change(ev.target.id,data);
}

//call to update the position of the columns
function change(act,id) {
  $.ajax({
        url: 'index/change',
        type: 'POST',
        data: {"id":id, "act":act},
       });
}

// this function determines what element we will be dragguing
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// counter for id, i need to determine unique div's in order to destroy,i know is not ideal, but since there is no saving feature
var counter = 0;
$(document).ready(function() {
  $.ajax({
        url: 'index/id',
        type: 'POST',
        dataType: 'json',
        success: function(data){
          data.ID++
          counter = data.ID;
        },
        error: function(){
          console.log("failed!");
        }
       });
})

// when the button is pressed this is the function that is called
$('#form1').submit(function(ev) {
    ev.preventDefault(); // to stop the form from submitting
    var value =  $( "input:first" ).val();
    if (value == null || value == "") {
     alert("Insert task name");
   }
    else {
     build(value);
   }
});

// build the new div and inserts it on the dom, with the destroy button, text, etc...
function build(name) {
  var obj = new Object();
  // we start the elements we are going to need
  obj.task = document.getElementById("Pending");
  obj.task_wrap = document.createElement("div");
  obj.task_button = document.createElement("button");
  obj.task_span = document.createElement("span");
  obj.task_span2 = document.createElement("span");

  // set proper atributtes needed
  obj.task_wrap.setAttribute("id",String(counter));
  obj.task_wrap.setAttribute("class","task");
  obj.task_wrap.setAttribute("draggable","true");
  obj.task_wrap.setAttribute("ondragstart","drag(event)");
  obj.task_button.setAttribute("onclick","destroy(this)");
  obj.task_button.setAttribute("class","close col-md-4");
  obj.task_button.setAttribute("aria-label","Close");
  obj.task_span.setAttribute("aria-hidden","true");
  obj.task_span.innerHTML = '&times;';
  obj.task_span2.setAttribute("class","col-md-8");
  obj.task_span2.innerHTML = name;

  // append elements correctly
  obj.task_button.appendChild(obj.task_span);
  obj.task_wrap.appendChild(obj.task_span2);
  obj.task_wrap.appendChild(obj.task_button);
  obj.task.appendChild(obj.task_wrap);

  insert(name,counter);
  counter++;
}

// function to insert new task on the DB
function insert(name,id) {
  $(document).ready(function() {
    $.ajax({
          url: 'index/insert',
          type: 'POST',
          data: {"name":name,"id":id},
         });
  })
}

// destroys the task
function destroy(task) {
// removes the element, in js you need the element to be removed, in addition it can only be executed at parent level
  var element = document.getElementById(task.parentNode.id);
  task.parentNode.parentNode.removeChild(element);
  deleteDb(task.parentNode.id)
}

// function to delete new task on the DB
function deleteDb(id) {
  $(document).ready(function() {
    $.ajax({
          url: 'index/deleteDb',
          type: 'POST',
          data: {"id":id},
         });
  })
}
