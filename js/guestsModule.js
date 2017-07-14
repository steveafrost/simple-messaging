(function() {

  var guests = {
    init: function() {
      this.cacheDom();
      this.loadGuests();
    },
    cacheDom: function() {
      this.guestField = $('#guestField');
    },
    loadGuests: function() {
      var that = this;

      var request = $.get('../data/guests.json');
      request.done(function(data) {
        $.each(data, function(i, guest) {
          var fullName = guest.firstName + " " + guest.lastName
          that.guestField.append($('<option>', {
            value: guest,
            text: fullName
          }));
        });
      });
    }
  }

  guests.init();
})();
