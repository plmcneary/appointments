// When the url is #appts
app.router.route('appts', apptListController);

// When the url is empty (the default route)
app.router.route('', apptListController);

// The user list "controller" function
function apptListController () {
  app.show('appt-list', app.appts.all);

  $("[name='search']").keyup(function () {
    var searchq = this.value;
    var searchList = app.appts.search(searchq);
    app.filter(searchList);
  })
}
