
// // // let params = new URLSearchParams(window.location.search);
// // // let productId = params.get("id");
// // // displayProductDetails(productId);


// // // /**
// // //  *
// // //  * @param id
// // //  * @return {Promise<void>}
// // //  */
// // //  async function displayProductDetails(id) {
// // //     let response = await fetch(`http://localhost:3000/api/products/${id}`);
// // //     let product = await response.json();
// // //     console.log("product", product);
// // //     productDisplay(product);
// // //     addToBasketManagement();
// // // }
// // // /**
// // //  *
// // //  * @param kanap
// // //  */

// // // function productDisplay(kanap) {
// // //     const itemImg = document.querySelector('.item__img')
// // //     const itemTitle = document.querySelector('#title')
// // //     const itemPrice = document.querySelector('#price')
// // //     const itemDescription = document.querySelector('#description')
// // //     const selectColor = document.querySelector('#colors')

// // //     let imgKanap = document.createElement('img')
// // //     imgKanap.src = kanap.imageUrl
// // //     imgKanap.alt = kanap.altTxt

// // //     itemImg.append(imgKanap)

// // //     itemTitle.textContent = kanap.name;
// // //     itemPrice.textContent = kanap.price;
// // //     itemDescription.textContent = kanap.description;

// // //     kanap.colors.forEach((color) => {
// // //         let tagOption = document.createElement('option')

// // //         tagOption.innerText = color;
// // //         tagOption.value = color;

// // //         selectColor.appendChild(tagOption)
// // //     });
// // //     checkColor()
// // // }
// // // // /**
// // // //  * Fonction qui prend une couleur en paramètre et vérifie si elle est ok
// // // //  * @param color couleur à vérifier
// // // //  * @return boolean
// // // //  */
// // // // function checkColor(color) {
// // // // if(color== kanap.color){
// // // //     console.log("color");
// // // // }
// // // // }
// // // /**
// // //  * Fonction qui prend une couleur en paramètre et vérifie si elle est ok
// // //  * @param color couleur à vérifier
// // //  * @return boolean
// // //  */
// // //  function checkColor(color) {
// // //     if(color === kanap.color){
// // //       console.log("La couleur est valide");
// // //       return alert("cette couleur est valide");
     
// // //     } else {
// // //       console.log("La couleur n'est pas valide");
// // //       return alert("c'est pas valide");
      
// // //     }
// // //   }
// // //   checkColor(color)

// // // /**
// // //  * Fonction qui prend une quantité en paramètre et vérifie si elle est définie et >= 1 et <= 100
// // //  * @param quantity quantité à vérifier
// // //  * @return boolean
// // //  */
// // // function checkQuantity(quantity) {
// // // if(quantity == kanap.quantity){
// // //     console.log("quantity");
// // // }
// // // }

// // // /**
// // //  *
// // //  */
// // // function addToBasketManagement() {
// // //     const addToCart = document.querySelector('#addToCart')
// // //     addToCart.addEventListener('click', () => {
// // //         let basket = JSON.parse(localStorage.getItem("canapé"))
// // //         let selectColor = document.querySelector('#colors')
// // //         console.log(basket);
// // //         console.log(selectColor);
// // //         const quantity = document.querySelector('#quantity')
// // //         const productChoice = {
// // //             color: selectColor.value,
// // //             quantity: parseInt(quantity.value),
// // //             _id: kanap._id
// // //         }
// // //         if (!checkColor(selectColor.value)) {
// // //             alert('Veuillez choisir une couleur')
// // //             return
// // //         }
// // //         if (!checkQuantity(quantity.value)) {
// // //             alert('Veuiller saisir une quntité entre 1 et 100')
// // //             return
// // //         }
// // //         if (basket == null) {
// // //             basket = [];
// // //             basket.push(productChoice)
// // //             localStorage.setItem("canapé", JSON.stringify(basket))
// // //             console.log(basket);
// // //         }
// // //         else {
// // //             // Rechercher si le produit qu'on veut ajouter au panier n'est pas déjà dans le panier
// // //             let existingProduct = basket.find()
// // //             if(existingProduct) {
// // //                 // Si c'est déjà dans le panier, alors juste incrémenter sa quantité
// // //             } else {
// // //                 // Sinon ajouter le produit dans le panier
// // //             }
// // //             // Et stocker (en sérialisant) tout ça dans le localStockage
// // //             // localStorage.setItem("", ) JSON.stringify(basket)
// // //         }
// // //     })
// // // }
















































// // // // let params = new URLSearchParams(window.location.search)
// // // // let getUrlId = params.get('id')
// // // // displayProductDetails(getUrlId)


// // // // async function displayProductDetails(id){
// // // //     let response = await fetch(`http://localhost:3000/api/products/${id}`)
// // // //     let product = response.json();
// // // //     console.log("product", product);
// // // //     productDisplay(product)
// // // // }

// // // // function productDisplay(kanap){
// // // //     const itemImage = document.querySelector('.item__img');
// // // //     const itemTitle = document.querySelector("#title");
// // // //     const itemPrice = document.querySelector("#price");
// // // //     const itemDescription = document.querySelector("#description");

// // // //     let imgKanap = document.createElement("img");
// // // //     imgKanap.src = kanap.imageUrl
// // // //     imgKanap.alt = kanap.altTxt
// // // //     console.log(imgKanap);

// // // //     itemImage.append(imgKanap)
// // // // }
// // // // function productDisplay(kanap) {
// // // //         const itemImg = document.querySelector('.item__img')
// // // //         const itemTitle = document.querySelector('#title')
// // // //         const itemPrice = document.querySelector('#price')
// // // //         const itemDescription = document.querySelector('#description')
// // // //         const selectColor = document.querySelector('#colors')
    
// // // //         let imgKanap = document.createElement('img')
// // // //         imgKanap.src = kanap.imageUrl
// // // //         imgKanap.alt = kanap.altTxt
    
// // // //         itemImg.append(imgKanap)
    
// // // //         itemTitle.textContent = kanap.name;
// // // //         itemPrice.textContent = kanap.price;
// // // //         itemDescription.textContent = kanap.description;
    
// // // //         kanap.colors.forEach((color) => {
// // // //             let tagOption = document.createElement('option')
    
// // // //             tagOption.innerText = color;
// // // //             tagOption.value = color;
    
// // // //             selectColor.appendChild(tagOption)
// // // //         });
// // // //     }
// // // // // ...............................................Logical Business....................................................

// // // // let params = new URLSearchParams(window.location.search);
// // // // let productId = params.get("id");
// // // // displayProductDetails(productId);


// // // // /**
// // // //  *
// // // //  * @param id
// // // //  * @return {Promise<void>}
// // // //  */
// // // //  async function displayProductDetails(id) {
// // // //     let response = await fetch(`http://localhost:3000/api/products/${id}`);
// // // //     let product = await response.json();
// // // //     console.log("product", product);
// // // //     productDisplay(product);
// // // //     addToBasketManagement();
// // // // }

// // // // async function displayProductDetails(id){
// // // //     let response = await fetch(`http://localhost:3000/api/products/${id}`)
// // // //     let product = await  response.json()
// // // //     console.log("product", product);
// // // // }

// // // // function productDisplay(kanap){
// // // //     const imgKanap = document.querySelector('.item__img')
// // // //     const titleKanap = document.querySelector('#title')
// // // //     const priceKanap = document.querySelector('#price')
// // // //     const descriptionKanap = document.querySelector('#description')

    
// // // // }





// // // // /**
// // // //  *
// // // //  * @param kanap
// // // //  */

// // // // function productDisplay(kanap) {
// // // //     const itemImg = document.querySelector('.item__img')
// // // //     const itemTitle = document.querySelector('#title')
// // // //     const itemPrice = document.querySelector('#price')
// // // //     const itemDescription = document.querySelector('#description')
// // // //     const selectColor = document.querySelector('#colors')

// // // //     let imgKanap = document.createElement('img')
// // // //     imgKanap.src = kanap.imageUrl
// // // //     imgKanap.alt = kanap.altTxt

// // // //     itemImg.append(imgKanap)

// // // //     itemTitle.textContent = kanap.name;
// // // //     itemPrice.textContent = kanap.price;
// // // //     itemDescription.textContent = kanap.description;

// // // //     kanap.colors.forEach((color) => {
// // // //         let tagOption = document.createElement('option')

// // // //         tagOption.innerText = color;
// // // //         tagOption.value = color;

// // // //         selectColor.appendChild(tagOption)
// // // //     });
// // // // }

// // // // /**
// // // //  * Fonction qui prend une couleur en paramètre et vérifie si elle est ok
// // // //  * @param color couleur à vérifier
// // // //  * @return boolean
// // // //  */
// // // // function checkColor(color) {
// // // // if(color== kanap.color){
// // // //     console.log("color");
// // // // }
// // // // }

// // // // /**
// // // //  * Fonction qui prend une quantité en paramètre et vérifie si elle est définie et >= 1 et <= 100
// // // //  * @param quantity quantité à vérifier
// // // //  * @return boolean
// // // //  */
// // // // function checkQuantity(quantity) {
// // // // if(quantity == kanap.quantity){
// // // //     console.log("quantity");
// // // // }
// // // // }

// // // // /**
// // // //  *
// // // //  */

// // function addToBasketManagement() {
// //     const addToCart = document.querySelector('#addToCart')
// //     addToCart.addEventListener('click', () => {
// //         let basket = JSON.parse(localStorage.getItem("canapé"))
// //         let selectColor = document.querySelector('#colors')

// //         console.log(basket);
// //         console.log(selectColor);

// //         const quantity = document.querySelector('#quantity')
// //         const productChoice = {
// //             color: selectColor.value,
// //             quantity: parseInt(quantity.value),
// //             _id: kanap._id
// //         }

// //         if (!checkColor(selectColor.value)) {
// //             alert('Veuillez choisir une couleur')
// //             return
// //         }
// //         if (!checkQuantity(quantity.value)) {
// //             alert('Veuiller saisir une quntité entre 1 et 100')
// //             return
// //         }
// //         if (basket == null) {
// //             basket = [];
// //             basket.push(productChoice)
// //             localStorage.setItem("canapé", JSON.stringify(basket))
// //             console.log(basket);
// //         }
// //         else {
// //             // Rechercher si le produit qu'on veut ajouter au panier n'est pas déjà dans le panier
// //             let existingProduct = basket.find()
// //             if(existingProduct) {
// //                 // Si c'est déjà dans le panier, alors juste incrémenter sa quantité
// //             } else {
// //                 // Sinon ajouter le produit dans le panier
// //             }
// //             // Et stocker (en sérialisant) tout ça dans le localStockage
// //             localStorage.setItem("", ) JSON.stringify(basket)
// //         }
// //     })
// // }





// // --------------------------------------------------------------------------------------------
// // function checkColor(color) {
// //     // Ajouter une liste de couleurs valides
// //     const validColors = [];
// //     return validColors.includes(color);
// // //   }

// // function addToBasketManagement() {
// //     const addToCart = document.querySelector('#addToCart')
// //     addToCart.addEventListener('click', () => {
// //         let basket = JSON.parse(localStorage.getItem("basket")) || [];
// //         let selectColor = document.querySelector('#colors')
// //         const quantity = document.querySelector('#quantity')
// //         const productChoice = {
// //             color: selectColor.value,
// //             quantity: parseInt(quantity.value),
// //             name: kanap.name,
// //             price: kanap.price
// //         }
// //         if (checkColor(selectColor.value) === false) {
// //             alert('Veuillez choisir une couleur valide')
// //             return
// //         }
// //         if (checkQuantity(quantity.value) === false) {
// //             alert('Veuiller saisir une quantité entre 1 et 100')
// //             return
// //         }
// //         if(kanap !== null){
// //             let existingProduct = basket.find(p => p.name === kanap.name && p.color === productChoice.color);
// //             if (existingProduct) {
// //             existingProduct.quantity += productChoice.quantity;
// //             } else {
// //             basket.push(productChoice)
// //             }
// //             localStorage.setItem("basket", JSON.stringify(basket))
// //             } else {
// //             console.error("kanap is not defined")
// //             }
// //             } )}







// ------------------------------



// // let params = new URLSearchParams(window.location.search)
// // let getUrlId = params.get("id")
// // console.log(getUrlId);
// // displayProductDetails(getUrlId)

// // async function displayProductDetails(id){
// //     let response = await fetch(`http://localhost:3000/api/products/${id}`)
// //     let product = await response.json();

// //     // check if product has a "colors" property before using it
// //     if(product.hasOwnProperty("colors")){
// //         productDisplay(product);
// //     } else {
// //         console.log("The product does not have a 'colors' property");
// //     }
// //     addToBasketManagement();
// // }

// // function productDisplay(kanap){
// //     const itemImage = document.querySelector('.item__img');
// //     const itemTitle = document.querySelector('#title');
// //     const itemPrice= document.querySelector('#price');
// //     const itemDescription= document.querySelector('#description');
// //     const selectColor = document.querySelector('#colors');

// //     let imgKanap = document.createElement('img');
// //     imgKanap.src = kanap.imageUrl
// //     imgKanap.alt = kanap.altTxt
// //     itemImage.appendChild(imgKanap)

// //     itemTitle.textContent = kanap.name
// //     itemPrice.textContent = kanap.price
// //     itemDescription.textContent = kanap.description

// //     kanap.colors.forEach((color) => {
// //         let tagOption = document.createElement('option')

// //         tagOption.innerText = color
// //         tagOption.value = color

// //         selectColor.appendChild(tagOption)
// //     });
// // }


// // function addToBasketManagement(kanap) {
// //     const addToCart = document.querySelector('#addToCart')
// //     addToCart.addEventListener('click', () => {
// //         let basket = JSON.parse(localStorage.getItem("basket")) || [];
// //         let selectColor = document.querySelector('#colors')
// //         const quantity = document.querySelector('#quantity')
// //         const productChoice = {
// //             color: selectColor.value,
// //             quantity: parseInt(quantity.value),
// //             name: kanap.name,
// //             price: kanap.price
// //         }
// //         if (checkColor(selectColor.value) === false) {
// //             alert('Veuillez choisir une couleur valide')
// //             return
// //         }
// //         if (checkQuantity(quantity.value) === false) {
// //             alert('Veuiller saisir une quantité entre 1 et 100')
// //             return
// //         }
// //         if(kanap !== undefined && kanap !== null){
// //             let existingProduct = basket.find(p => p.name === kanap.name && p.color === productChoice.color);
// //             if (existingProduct) {
// //                 existingProduct.quantity += productChoice.quantity;
// //             } else {
// //                 basket.push(productChoice)
// //             }
// //             localStorage.setItem("basket", JSON.stringify(basket))
// //         } else {
// //             console.error("kanap is not defined")
// //         }
// //     }  )}


// let params = new URLSearchParams(window.location.search)
// let getUrlId = params.get("id")
// console.log(getUrlId);

// let kanap; // déclaration de la variable kanap

// displayProductDetails(getUrlId)

// async function displayProductDetails(id){
//     let response = await fetch(`http://localhost:3000/api/products/${id}`)
//     kanap = await response.json(); // stocker les détails du produit dans la variable kanap

//     // check if product has a "colors" property before using it
//     if(kanap.hasOwnProperty("colors")){
//         productDisplay(kanap);
//     } else {
//         console.log("The product does not have a 'colors' property");
//     }
//     addToBasketManagement(kanap);
// }

// function productDisplay(kanap){
//     const itemImage = document.querySelector('.item__img');
//     const itemTitle = document.querySelector('#title');
//     const itemPrice= document.querySelector('#price');
//     const itemDescription= document.querySelector('#description');
//     const selectColor = document.querySelector('#colors');

//     let imgKanap = document.createElement('img');
//     imgKanap.src = kanap.imageUrl
//     imgKanap.alt = kanap.altTxt
//     itemImage.appendChild(imgKanap)

//     itemTitle.textContent = kanap.name
//     itemPrice.textContent = kanap.price
//     itemDescription.textContent = kanap.description

//     kanap.colors.forEach((color) => {
//         let tagOption = document.createElement('option')

//         tagOption.innerText = color
//         tagOption.value = color

//         selectColor.appendChild(tagOption)
//     });
// }

// // function addToBasketManagement(){
// //     const addToCart = document.querySelector('#addToCart')
// //     addToCart.addEventListener('click', (color) =>{

// //         let basket = JSON.parse(localStorage.getItem("canapé"));
// //         console.log(basket);

// //         let selectColor = document.querySelector('#colors')
// //         selectColor.value = color
// //         console.log(selectColor);

// //        const productChoice = {
// //         color : selectColor.value ,
// //         quantity: parseInt(quantity.value),
// //         _id: kanap._id
// //        }

// //        if (basket == null){
// //         basket = [];
// //         basket.push(productChoice)
// //        }
// //        console.log(productChoice);
// //     })

// // }
// console.log("hello world!");
// function addToBasketManagement(){

//     const addToCart = document.querySelector('#addToCart')

//     addToCart.addEventListener('click',()=> {

//         let produitTableau = JSON.parse(localStorage.getItem("canapé"))
//         console.log(produitTableau);
       

        

//     })
// }