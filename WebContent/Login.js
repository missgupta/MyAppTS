
function validate()
{
  let x = document.forms["myForm"]["uname"].value;
  if (x != "") {
    alert("Logged in");
    return false;
  }
}