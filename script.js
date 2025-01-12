//your JS code here. If required.
let student = {
  name: "deepak",
  getkeys: function () {
    return Object.keys(this);
  },
};

console.log(student.getKeys())