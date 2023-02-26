


function displayCart() {
    console.log("salut");
    console.log(addProduit)
    if (addProduit) {
      console.log(addProduit);
  
      const cartItemsHTML = addProduit.map((produit) => {
        return `
          <article class="cart__item" data-id="${produit.id__Selected}" data-color="${produit.color__Selected}">
          
            <div class="cart__item__img">
              <img src="${produit.imageUrl}" alt="${produit.altTxt}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${produit.name}</h2>
                <p>${produit.selectedColor}</p>
                <p>${produit.price} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produit.quantity__Selected}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article>
        `;
      });
  console.log(cartItemsHTML);
      cart__items.innerHTML = cartItemsHTML.join("urekanap");
    }
  };
  
  function loadCart() {
    const addProduitJSON = localStorage.getItem("urekanap");
    const addProduit = addProduitJSON ? JSON.parse(addProduitJSON) : [];
    const cart__items = document.getElementById("cart__items");
    displayCart();
  };
  
  window.addEventListener("load", loadCart);
  