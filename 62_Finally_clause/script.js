let f = () => {
  try {
    let a = 0;
    // console.log((2).ureed);
    console.log("I'm in try");
    return;
  } catch (err) {
    console.log("It gots an error");
    // console.log(sdfghv)
  } finally {
    console.log("I'm in finally");
  }
};
f();
