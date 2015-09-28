app.router.route('appts/new', function () {

  app.show('appt-new', { appt: new app.Appt()});

  $("[name='date']").pickadate({
    container: '.picka-holder'
  });
  $("[name='time']").pickatime({
    container: '.picka-holder'
  });

  $("[name='appt-form']").on('submit', function (e) {
    e.preventDefault();

    app.appts.add(new app.Appt(app.serializeForm(this)));

    app.goto('appts');
  });

});
