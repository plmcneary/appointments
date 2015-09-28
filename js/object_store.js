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

  update: function(name, newAppt) {
    this.remove(name);
    this.add(newAppt);
    this.save();
  },

  getByName: function(name) {
    return this.all[name];
  },

  search: function(searchq) {
    searchq = searchq.toLowerCase();
    var searchRes = {};
    for (appt in this.all) {
      if (this.all.hasOwnProperty(appt)) {
        var currAppt = this.all[appt];
        var val;
        var valString = '';
        for (info in currAppt) {
          if (currAppt.hasOwnProperty(info)) {
            val = currAppt[info];
            val = val.toLowerCase();
            valString = valString.concat(val);
          }
        }
        if(valString.indexOf(searchq) >= 0) {
          searchRes[appt] = currAppt;
        }
      }
    }
    return searchRes;
  },

  remove: function (name) {
     delete this.all[name];
     this.save();
   },

  load: function() {
    return JSON.parse(this.storage.getItem(this.key) || '{}');
  },

  save: function() {
    this.storage.setItem(this.key, JSON.stringify(this.all));
  }

};
