(function() {

  var companies = {
    init: function() {
      this.cacheDom();
      this.loadCompanies();
    },
    cacheDom: function() {
      this.$companyField = $('#companyField');
    },
    loadCompanies: function() {
      var request = $.get('../data/companies.json');
      request.done(function(data) {
        $.each(data, function(i, company) {
          this.$companyField.append($('<option>', {
            value: JSON.stringify(company),
            text: company.company
          }));
        }.bind(this));
      }.bind(this));
    }
  }

  companies.init();
})();
