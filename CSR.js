
document.getElementById("myButton").onclick=function()
{
    location.href = "show.html";
};

var y =  document.getElementById("form");
y.style.display = "none";
function select() 
{
    if (y.style.display === "none") 
    {
    y.style.display = "block";
    }
}