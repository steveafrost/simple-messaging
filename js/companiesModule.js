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
      var that = this;

      var request = $.get('../data/companies.json');
      request.done(function(data) {
        $.each(data, function(i, company) {
          that.$companyField.append($('<option>', {
            value: company,
            text: company.company
          }));
        });
      });
    }
  }

  companies.init();
})();
