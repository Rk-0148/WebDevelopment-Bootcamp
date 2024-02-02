// always use initial Capital letters to name constructor function

function BellBoy(id, name, age, hasWorkPermit, language) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.language = language;
  this.method1 = function (){
    alert("should i clean ?");
    clearInterval();
  }
}

var bellBoy1 = new BellBoy(1, "rk", 21, false, "English");
console.log(bellBoy1);
