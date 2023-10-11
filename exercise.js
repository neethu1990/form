function hideName() {
  document.getElementById("name").hidden = true
}
function showName() {
    document.getElementById("name").hidden = false;
}

function time() {
    document.querySelector(".time").innerHTML=`last modified on ${document.lastModified}`;
}

function handleSubmit(event){

  event.preventDefault();

  let form=document.forms[0];

  let firstName = form["firstName"].value;
  let LastName = form["LastName"].value;
  let password = form["password"].value;
  let email= form["email"].value;

  console.log("First Name:",firstName);
  console.log("Last Name:",LastName);
  console.log("Password:",password);
  console.log("E-mail:",email);
}