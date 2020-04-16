'use strict';

function watchForm() {
  $('form').submit(function(event) {
    console.log('Submit working') 
    event.preventDefault() ;
    let myValue = document.getElementsByName('numberOfDogs')[0].value;
    console.log(myValue);
    getDogImage(myValue);
    });
  }

function getDogImage(myValue) {
  fetch('https://dog.ceo/api/breeds/image/random/' + myValue)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  for (let i = 0; i < responseJson.message.length; i++) {
    $('.results-img').append (
      `<img src="${responseJson.message[i]}">`
    )
  }
/*how to break down Json message value piece into separate URLs and display separately?*/





  //display the results section
  $('.results').removeClass('hidden');
}



$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
