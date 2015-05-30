$(function () {
  'use strict';

  app.apptList = new app.ObjectStore('apptList', localStorage);

  Backbone.history.start();
});
