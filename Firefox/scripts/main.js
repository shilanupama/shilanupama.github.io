var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Mozilla Firefox.png') {
      myImage.setAttribute ('src','images/Mozilla.png');
	  
    }
 else if(mySrc === 'images/Mozilla.png') {
      myImage.setAttribute ('src','images/download.png');
	  
    }
	else {
      myImage.setAttribute ('src','images/Mozilla Firefox.png');
    }

}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}