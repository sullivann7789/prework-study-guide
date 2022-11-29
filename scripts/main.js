const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./assets/wwPh9CZ.jpg") {
    myImage.setAttribute("src", "assets/firefox2.png");
  } else {
    myImage.setAttribute("src", "./assets/wwPh9CZ.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}'s Prework Study Guide`;
  }}
localStorage.clear()
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}'s Prework Study Guide`;
  }
  myButton.onclick = () => {
    setUserName();
  };



