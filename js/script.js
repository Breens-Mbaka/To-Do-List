//user-interface logic
$(document).ready(function(event) {
  $(".form").submit(function(event) {
    event.preventDefault();

    //get the data input from ui
    var taskAdded = document.getElementById("add-task").value();
  });
}); 