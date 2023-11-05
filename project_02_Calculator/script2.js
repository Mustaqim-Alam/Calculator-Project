let string = " ";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        document.querySelector("input").value = string;
      } catch (error) {
        document.querySelector("input").value = "Error: " + error.message;
      }
    } else if (e.target.innerHTML == "C") {
      let inputField = document.querySelector("input");
      let currentValue = inputField.value;
      if (currentValue.length > 0) {
        string = inputField.value = currentValue.substring(
          0,
          currentValue.length - 1
        );
        console.log(string);
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      console.log(string);
      document.querySelector("input").value = string;
    }
  });
});
