app.router.route('appts/new', function () {

  // Render the view
  app.show('appt-new', { appt: new app.Appt()});

  // Bind our events



  $("[name='appt-form']").on('submit', function (e) {
    e.preventDefault();

    app.appts.add(new app.Appt(app.serializeForm(this)));

    app.goto('appts');
  });

});
