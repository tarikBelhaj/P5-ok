

let params = new URLSearchParams(window.location.search)
let getUrlId = params.get("id")
console.log(getUrlId);
getProductDetails(getUrlId)

async function getProductDetails(id) {

    let response = await fetch(`http://localhost:3000/api/products/${id}`);
    let product = await response.json();
    console.log(("product", product));
    displayProductDetails(product)
    addToBasketManagement();

     // appel de displayItem avec le produit récupéré depuis l'API
  const cartItem = {
    imageUrl: product.imageUrl,
    name: product.name,
    color: product.colors[0],
    price: product.price,
    id: product._id,
    quantity: 1,
  };
  
}

function displayProductDetails(kanap) {
    const kanap__img = document.querySelector('.item__img')
    const kanap__title = document.querySelector('#title')
    const kanap__price = document.querySelector('#price')
    const kanap__description = document.querySelector('#description')
    const select__colors = document.querySelector('#colors')

    let imageKanap = document.createElement('img')
    imageKanap.src = kanap.imageUrl
    imageKanap.alt = kanap.altTxt
    kanap__img.appendChild(imageKanap)

    kanap__title .textContent = kanap.name
    kanap__price.textContent = kanap.price
    kanap__description.textContent = kanap.description

    kanap.colors.forEach((color) => {

        let tagOption = document.createElement('option')
        tagOption.textContent = color
        select__colors .appendChild(tagOption)
    });

}

function addToBasketManagement() {
    const addToCart = document.querySelector('#addToCart')
    const kanap__color = document.querySelector('#colors')
    const kanap__quantity = document.querySelector('#quantity')
    const kanap__titlee =document.querySelector('#title')
    

    
    addToCart.addEventListener("click", ()=>{

        console.log("hello");
        const selectedKanap = {
            id__Selected : getUrlId,
            color__Selected : kanap__color.value ,
            quantity__Selected : kanap__quantity.value
        }
        let produitTableau = JSON.parse(localStorage.getItem("kanapgo"))

        if(produitTableau == null){
            produitTableau = [];
        }

        // on verfifie que la couleur a été saisie 

        if(selectedKanap.color__Selected === ""){
            alert('saisi une couleur ')
        }
        // on verfifie que la quantité a été saisie et quelle soit inferieur a 100

        if(selectedKanap.quantity__Selected < 1){
            alert('saisi une quantité ')
        }else if (selectedKanap.quantity__Selected > 100){
            alert('Ce produit est limité a 100 exemplaires ')
        }
        // si le produit est deja dans le panier on va l'incrementer
        const existingProduct = produitTableau.find((kanapee)=>{
             if(kanapee.color__Selected === selectedKanap.color__Selected && kanapee.id__Selected === selectedKanap.id__Selected){
                 kanapee.quantity__Selected = parseInt(kanapee.quantity__Selected)+parseInt(selectedKanap.quantity__Selected)
                 total__quantity = parseInt(kanapee.quantity__Selected)
                 alert(`Vous avez ajouter ${total__quantity} exemplaires de ce produit a votre panier `)
                 return true 
             }
             return false 
        })
        // si le produit n' est pas présent dans le panier 
        if(!existingProduct){
            produitTableau.push(selectedKanap)
        }
        localStorage.setItem("kanapgo",JSON.stringify(produitTableau))

    })
}