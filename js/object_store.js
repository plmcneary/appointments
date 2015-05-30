app.ObjectStore = function(key, storage) {
  this.key = key;
  this.storage = storage;
  this.all = this.load();

};

app.ObjectStore.prototype = {

  get values () {
    return _.values(this.all);
  },

  add: function (obj) {
    this.all[obj.name] = obj;
    this.save();
  },

  update: function(name, newAppts) {
    this.remove(name);
    this.add(newAppts);
    this.save();
  },

  getByName: function(name) {
    return this.all[name];
  },

  remove: function (name) {
     delete this.all[name];
     this.save();
   },

  load: function() {
    return JSON.parse(this.storage.getItem(this.key)) || '{}';
  },

  save: function() {
    this.storage.setItem(this.key, JSON.stringify(this.all))
  }

};
