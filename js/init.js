$(function () {

  app.appts = new app.ObjectStore('appts', localStorage);

  Backbone.history.start();
});
