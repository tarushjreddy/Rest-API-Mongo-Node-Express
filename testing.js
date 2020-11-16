fetch("http://localhost:3000/post/")
  .then((resu) => {
    return resu.json();
  })
  .then((data) => {
    console.log(data);
  });
