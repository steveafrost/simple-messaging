(function() {

  var guests = {
    current: [],
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
      var data = {current: this.current}
      console.log(data);
      var rendered = Mustache.render(this.template, data);
      this.guestField.html(rendered);
    },
    loadGuests: function() {
      var that = this;

      var request = $.get('../data/guests.json');
      request.done(function(data) {
        $.each(data, function(i, guest) {
          that.current.push(guest);
        });
      });
    }
  }

  guests.init();
})();
