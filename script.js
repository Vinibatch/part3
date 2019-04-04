for (var i = 0; i < document.getElementsByTagName("h6").length; i++) {
  console.log(document.getElementsByTagName("h6").length);
  display();
}

function display() {
  document.getElementById("nb").textContent = document.getElementsByTagName("h6").length;


}

for (var i = 0; i < document.getElementsByClassName('trash').length; i++) {
  document.getElementsByClassName('trash')[i].addEventListener("click",
    function() {
      this.parentNode.remove();
      display();
    }
  );
}
