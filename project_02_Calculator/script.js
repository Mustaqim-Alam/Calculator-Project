try {
  let string = " ";
  let buttons = document.querySelectorAll(".Button");

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        try {
          string = eval(string);
          document.querySelector("input").value = string;
        } catch (error) {
          console.log(error);
          document.querySelector("input").value = "Error:" + error.name;
        }
      } else if (e.target.innerHTML == "AC") {
        string = " ";
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "C") {
        let inputField = document.querySelector("input");
        let currentValue = inputField.value;
        console.log(currentValue.length);
        if (currentValue.length > 0) {
          console.log(currentValue.length);
          string = inputField.value = currentValue.substring(
            0,
            currentValue.length - 1
          );
          console.log(currentValue.length);
        }
      } else {
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
        console.log(string);
      }
    });
  });
} catch (error) {
  console.log(error);
  document.querySelector("input").value = "Error:" + Error.name;
}
