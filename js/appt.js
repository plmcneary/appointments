app.Appt = function (spec) {
  spec = spec || {};

  this.name = spec.name;
  this.street = spec.street;
  this.city = spec.city;
  this.state = spec.state;
  this.date = spec.date;
  this.time = spec.time;
};
