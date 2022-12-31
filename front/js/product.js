/**
 *
 * @param id
 * @return {Promise<void>}
 */
 async function displayProductDetails(id) {
    let response = await fetch(`http://localhost:3000/api/products/${id}`);
    let product = await response.json();
    console.log("product", product);
    productDisplay(product);
    addToBasketManagement();
}

/**
 *
 * @param kanap
 */
function productDisplay(kanap) {
    const itemImg = document.querySelector('.item__img')
    const itemTitle = document.querySelector('#title')
    const itemPrice = document.querySelector('#price')
    const itemDescription = document.querySelector('#description')
    const selectColor = document.querySelector('#colors')

    let imgKanap = document.createElement('img')
    imgKanap.src = kanap.imageUrl
    imgKanap.alt = kanap.altTxt

    itemImg.append(imgKanap)

    itemTitle.textContent = kanap.name;
    itemPrice.textContent = kanap.price;
    itemDescription.textContent = kanap.description;

    kanap.colors.forEach((color) => {
        let tagOption = document.createElement('option')

        tagOption.innerText = color;
        tagOption.value = color;

        selectColor.appendChild(tagOption)
    });
}

/**
 * Fonction qui prend une couleur en paramètre et vérifie si elle est ok
 * @param color couleur à vérifier
 * @return boolean
 */
function checkColor(color) {
if(color== kanap.color){
    console.log("color");
}
}

/**
 * Fonction qui prend une quantité en paramètre et vérifie si elle est définie et >= 1 et <= 100
 * @param quantity quantité à vérifier
 * @return boolean
 */
function checkQuantity(quantity) {
if(quantity == kanap.quantity){
    console.log("quantity");
}
}

/**
 *
 */
function addToBasketManagement() {
    const addToCart = document.querySelector('#addToCart')
    addToCart.addEventListener('click', () => {
        let basket = JSON.parse(localStorage.getItem("canapé"))
        let selectColor = document.querySelector('#colors')

        console.log(basket);
        console.log(selectColor);

        const quantity = document.querySelector('#quantity')
        const productChoice = {
            color: selectColor.value,
            quantity: parseInt(quantity.value),
            _id: kanap._id
        }

        if (!checkColor(selectColor.value)) {
            alert('Veuillez choisir une couleur')
            return
        }
        if (!checkQuantity(quantity.value)) {
            alert('Veuiller saisir une quntité entre 1 et 100')
            return
        }
        if (basket == null) {
            basket = [];
            basket.push(productChoice)
            localStorage.setItem("canapé", JSON.stringify(basket))
            console.log(basket);
        }
        else {
            //Rechercher si le produit qu'on veut ajouter au panier n'est pas déjà dans le panier
            let existingProduct = basket.find()
            if(existingProduct) {
                //Si c'est déjà dans le panier, alors juste incrémenter sa quantité
            } else {
                //Sinon ajouter le produit dans le panier
            }
            //Et stocker (en sérialisant) tout ça dans le localStockage
            //localStorage.setItem("", ) JSON.stringify(basket)
        }
    })
}


//...............................................Logical Business....................................................

let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
displayProductDetails(productId);
