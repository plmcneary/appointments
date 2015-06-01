app.router.route('appts/:name/details', function(name) {

  var appt = app.appts.getByName(name);

  app.show('appt-details', appt);
});
