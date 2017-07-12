(function() {
  var request = new XMLHttpRequest();
  request.open('GET', '../data/companies.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      var companyField = document.getElementById('companyField');

      data.forEach(function(item, i){
        companyField.options[i + 1] = new Option(item.company, item.company);
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
