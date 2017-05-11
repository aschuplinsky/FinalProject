function main()
{
  var countryEntered = document.getElementById("cou").value;

  if (countryEntered !== 'Lebanon') {
    document.getElementById("countryError").innerHTML="wrong country";
    document.getElementById("countryError").classList.add("hidden-message");
    document.getElementById("countryError").classList.remove("shown-message");

    document.getElementById("countryGroup").classList.add("has-error");
  } else{
    document.getElementById("countryGroup").classList.add("has-success");
  }
}
function israel()
{
  var flagEntered = document.getElementById("flag").value;

  if (flagEntered !== 'star of david') {
    document.getElementById("flagError").innerHTML="wrong symbol";
    document.getElementById("flagError").classList.add("hidden-message");
    document.getElementById("flagError").classList.remove("shown-message");

    document.getElementById("flagGroup").classList.add("has-error");
  } else{
    document.getElementById("flagGroup").classList.add("has-success");
  }
}
function state()
{
    var state= new Array("Tel Aviv","Jerusalem","Eilat");
    var random = state[Math.floor(Math.random() * state.length)];
    document.getElementById("message").innerHTML=random;
}
function bigImg(x) {
    x.style.height = "70px";
    x.style.width = "90px";
}

function normalImg(x) {
    x.style.height = "50px";
    x.style.width = "60px";
}
