let key = prompt("Enter key you want to store");
let value = prompt("Enter key you want to store");

localStorage.setItem(key, value);

if (key == "color" || value == "blue") {
  localStorage.removeItem(key);
}

if (key == 0) {
  localStorage.clear();
}

console.log(`The value of ${key} is ${localStorage.getItem(key)}`);
