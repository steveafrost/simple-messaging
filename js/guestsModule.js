(function() {

  var guests = {
    guests: [],
    init: function() {
      this.cacheDom();
      this.loadGuests();
      this.render();
    },
    cacheDom: function() {
      this.guestField = $('#guestField');
      this.template = $('#guest-template').html();
    },
    render: function() {
      console.log(this.guests);
      this.guestField.html(Mustache.render(this.template, this.guests));
    },
    loadGuests: function() {
      var request = $.get('../data/guests.json');
      var that = this;
      request.done(function(data) {
        $.each(data, function(i, guest) {
          console.log(guest.firstName);
          that.guests.push(guest.firstName);
        });
      });
    },
    setGuests: function(data) {

    }
  }

  guests.init();
})();
