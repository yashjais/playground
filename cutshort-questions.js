class DS {
  constructor(x) {
    this.x = x;
  }
  static addDSTest(f, b) {
    return f.x + b.x + b.y;
  }
}
class Test extends DS {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
}
let f = new DS(5);
let b = new Test(5, 5);
console.log(Test.addDSTest(f, b));

//--
function abc(val = "DoSelect") {
  return val;
}
var def = abc();
console.log(def);

var array = eval("['Waverly','Westley','Ben']");
console.log(array[1]);

const demo = new Promise((resolve) => {
  throw "Hello World";
});
demo.catch(() => "Hello World 2").then(console.log.bind(console));

//--
const fn = (a) => console.log(a);

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    fn(i);
  }, 0);
}
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    fn(i);
  }, 0);
}

//--
const array = [16, 32, 64, 128];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("Ind_Val: " + i + ", elem: " + array[i]);
  }, 3000);
}
