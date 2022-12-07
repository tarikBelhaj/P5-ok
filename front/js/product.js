let params = new URLSearchParams(window.location.search)
let getUrlId = params.get("id")

let kanap = [] ;


 async function fetchUrl(){
  console.log("hei");
   await fetch(`http://localhost:3000/api/products/${getUrlId}`)
  .then((resp)=> resp.json())
  .then((promise)=>{
    kanap = promise
    console.log(kanap);
  })
}

const itemImg = document.querySelector('.item__img') 
const itemTitle = document.querySelector('#title') 
const itemPrice = document.querySelector('#price') 
const itemDescription = document.querySelector('#description') 
const selectColor = document.querySelector('#colors')


function productDisplay(){
   fetchUrl();

  let imgKanap = document.createElement('img')
  itemImg.appendChild(imgKanap)
  imgKanap.src = kanap.imageUrl
  imgKanap.alt = kanap.altTxt
  console.log(imgKanap);

  console.log(imgKanap);
  

  let kanapTitle = document.createElement('h1')
  itemTitle.append(kanapTitle)
  console.log(kanapTitle);
  kanapTitle.innerText = kanap.name
  };

productDisplay();

const addToCart = document.querySelector('#addToCart')

const addBasket  = () => {

  addToCart.addEventListener('click', () => {
    let basket = JSON.parse(localStorage.getItem("canapé"))
    let selectColor = document.querySelector('#colors')

    console.log(basket);
    console.log(selectColor);

    const quantity = document.querySelector('#quantity')
    const productChoice = {
      color : selectColor.value,
      quantity :  parseInt(quantity.value) , 
      _id : kanap._id
    }

    if(!checkColor(selectColor.value) ){
       alert('Veuillez choisir une couleur')
         return
    } 
if(!checkQuantity(quantity.value)){
  alert('Veuiller saisir une quntité entre 1 et 100')
    return
}
    if(basket == null ){
      basket = [];
      basket.push(productChoice)
      localStorage.setItem("canapé", JSON.stringify(basket))
      console.log(basket);

    }
  })
}
addBasket()
