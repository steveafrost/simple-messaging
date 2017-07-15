(function() {

  var guests = {
    init: function() {
      this.cacheDom();
      this.loadGuests();
    },
    cacheDom: function() {
      this.$guestField = $('#guestField');
    },
    loadGuests: function() {
      var request = $.get('../data/guests.json');
      request.done(function(data) {
        $.each(data, function(i, guest) {
          var fullName = guest.firstName + " " + guest.lastName
          this.$guestField.append($('<option>', {
            value: JSON.stringify(guest),
            text: fullName
          }));
        }.bind(this));
      }.bind(this));
    }
  }

  guests.init();
})();
