if (true) {
  console.log("true é truthy");
}

if (42) {
  console.log("42 é truthy");
} else {
  console.log("42 é falsy");
}

if (0) {
  console.log("0 é truthy");
} else {
  console.log("0 é falsy");
}

if (undefined) {
  console.log("undefined é truthy");
} else {
  console.log("undefined é falsy");
}

if ("") {
  console.log("aspas é truthy");
} else {
  console.log("aspas é falsy");
}

if (-0) {
  console.log("-0 é truthy");
} else {
  console.log("-0 é falsy");
}

if (``) {
  console.log("`` é truthy");
} else {
  console.log("`` é falsy");
}
let test;

if (test) {
  console.log("test é truthy");
} else {
  console.log("test é falsy");
}
