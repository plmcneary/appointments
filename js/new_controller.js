app.router.route('appts/new', function () {

  app.show('appt-new', { appt: new app.Appt()});

  $("[name='appt-form']").on('submit', function (e) {
    e.preventDefault();

    app.appts.add(new app.Appt(app.serializeForm(this)));

    app.goto('appts');
  });

});
