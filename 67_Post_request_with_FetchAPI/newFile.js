fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((json) => console.log(json));
