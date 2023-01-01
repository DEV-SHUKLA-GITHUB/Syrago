fetch("https://fakestoreapi.com/products/")
  .then((data) => data.json())
  .then((completedata) => {
    // console.log(data);
    let elements = "";
    completedata.map((item) => {
      elements += `
        <div class="card">
            <img src="${item.image}" class="image" alt="">
            <p class="place">${item.category}</p>
            <p class="para">${item.price}</p>
        </div>`;
    });
    document.getElementById("main-div").innerHTML = elements;
    function handleClick() {
      console.log("clicked");
    }
  })
  .catch((e) => {
    console.log(e);
  });
// });
