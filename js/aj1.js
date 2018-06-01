//Create event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
  //Create the xhr object
  var xhr = new XMLHttpRequest();

  //Open
  xhr.open('GET', 'sample.txt', true);

  xhr.onload = function () {
    if (this.status == 200) {
       document.getElementById('text').innerHTML = this.responseText;
      //console.log(this.responseText);
    }
  }

  xhr.onerror = function () {
    console.log("Request Error...");
  }

  //Send request
  xhr.send();
}
