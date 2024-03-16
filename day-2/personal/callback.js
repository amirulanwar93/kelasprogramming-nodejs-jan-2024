console.log("hello world");

function add(a, b) {
  const result = a + b;
  console.log(a, b);
  console.log(result);
  result = result;
}

function mathCallback(a, b, callback) {
  callback(a, b);
}

mathCallback(2, 4, function (a, b) {
  console.log(a * b);
});
