const createTodo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getTodo = async (id) => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  let res = response.json();
  return res;
};

const mainfunc = async () => {
  let todo = await createTodo({
    id: 4,
    title: "Mustaqim1",
    body: "bhai",
    userId: 13,
    place: "Siwan",
  });
  console.log(todo);
  console.log(await getTodo(33));
};
mainfunc();
