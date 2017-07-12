(function() {
  var request = new XMLHttpRequest();
  request.open('GET', '../data/guests.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      var guestField = document.getElementById('guestField');

      data.forEach(function(item, i){
        var fullName = item.firstName + " " + item.lastName
        guestField.options[i + 1] = new Option(fullName, fullName);
      });

    } else {
      alert("Please notify Steve. He'll help. He likes helping.");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("There was an error loading the JSON file.")
  };

  request.send();
})();
