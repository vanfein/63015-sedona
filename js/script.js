var indexFormOpen=document.querySelector(".btn-brown");
var indexFormStatus=document.querySelector(".search-hotel-form");
indexFormOpen.addEventListener( "click", function(event) {
  event.preventDefault();
  indexFormStatus.classList.toggle('index-form-show');
  }
)
