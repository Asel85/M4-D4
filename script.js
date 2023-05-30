const containerRow = document.querySelector(".row");
function getBookCard(){
    fetch("https://striveschool-api.herokuapp.com/books")
    .then(function(result){
        return result.json();
    })
    .then(function(json){
       containerRow.innerHTML = json.map((item) => {
      return   ` <div class='col col-3 my-4'> <div class="card mb-4 shadow-sm card_height mt-4" id='book_${item.asin}'>
      <img src='${item.img}'class="card_img" />

      <div class="card-body">
        <p class='font-weight-bold text-truncate book-title'> ${item.title} </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          
          <button class='btn btn-primary' onclick="addToCart('${item.title}', '${item.price}', '${item.asin}')"> EUR ${item.price} </button>
          <button class='btn btn-secondary'> Nascondi </button>
        </div>
      </div>
    </div> </div>`
         }).join("");
      
    
    
    })
    .catch(function(error){
        console.log("error");
    }) 
}
getBookCard();