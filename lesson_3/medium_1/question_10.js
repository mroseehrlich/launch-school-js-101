function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());
// this returns "no" because foo() returns yes and that
// value is passed into bar(). Since yes !== "no", bar returns "no"