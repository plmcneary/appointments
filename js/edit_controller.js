app.router.route('appts/:name/edit', function (name) {

  var appt = app.appts.getByName(name);

  app.show('appt-edit', appt);

  $("[name='date']").pickadate({
    container: '.picka-holder'
  });
  $("[name='time']").pickatime({
    container: '.picka-holder'
  });

  $("[name='appt-form']").on('submit', function (e) {
    e.preventDefault();

    var newAppt = new app.Appt(app.serializeForm(this));
    app.appts.update(name, newAppt);

    app.goto('appts');
  });

  $("[name='delete-appt']").click(function () {

    app.appts.remove(name);

    app.goto('appts');
  })

});
