//user-interface logic
$(document).ready(function(event) {
  $("#form").submit(function(event) {
    event.preventDefault();

    //get the data input from ui
    var taskAdded = $("#add-task").val();
    console.log(taskAdded);
    
    $("ul#tasks").append("<li><span class='task'>" + taskAdded+ "</span></li>")
    
    $("#add-task").val("");
  });
}); 