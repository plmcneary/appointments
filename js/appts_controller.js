(function () {
  // When the url is #users
  app.router.route('appts', apptListController);

  // When the url is empty (the default route)
  app.router.route('', apptListController);

  // The user list "controller" function
  function apptListController () {
    app.show('appt-list', { users: app.users });
  }
})();
