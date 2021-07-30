let input = document.getElementById('search');
let content = document.getElementById('estados');

input.addEventListener("keyup", function () {
    input =document.getElementById('search').value;
    if (input=="") {
        content.style.display = "none";
        content.innerHTML = "<div id='content' class='content'></div>";
    }
    if(input != ""){
        content.style.display = "block";
    }
});