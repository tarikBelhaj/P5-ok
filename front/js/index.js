
let url = "http://localhost:3000/api/products"

getlink = document.querySelector('.items')
   function fetchU () {
   fetch(url)
  .then((resp)=> resp.json())
  .then((data)=>{
    data.forEach(product => {
      console.log(product);
 const link =  document.createElement('a')
 getlink.appendChild(link)
 link.href = `./product.html?id=${product._id}`
 console.log(link)

 const  articleProduct = document.createElement('article')
 link.appendChild(articleProduct)
 console.log(articleProduct);

 let imgProduct = document.createElement('img')
 articleProduct.appendChild(imgProduct)
 imgProduct.src = product.imageUrl
 imgProduct.alt = product.altTxt

console.log(imgProduct);

const titleProduct = document.createElement('h3')
articleProduct.append(titleProduct)
console.log(titleProduct);
titleProduct.innerText = product.name

const descriptionProduct = document.createElement('p')
console.log(descriptionProduct);
descriptionProduct.innerText = product.description
    });
  })
}
fetchU()




























// // Page d' accueil -- On affiche les produits en les recuperant  en format json //


// let getLinke = document.querySelector("#items")
// let newArticle


// function fetchU (){
//   let url = "http://localhost:3000/api/products"
// fetch(url)
// .then(function(response){
//   return response.json()
// })
// .then(function(data){
//   data.forEach(product => {
//     console.log(product);

//     let newLink = document.createElement('a')
//     console.dir(newLink);
//     getLinke.appendChild(newLink)
//     getLinke.href = `./html/product.html?id=${product._id}`

//     let newArticle = 
//     document.createElement('article')
//     console.dir(newArticle);
//     getLinke.appendChild(newLink)


//     let newImg = document.createElement('img')
//     console.dir(newImg);
//     newArticle.appendChild(newImg)
//     newImg.src= product.imageUrl
//     newImg.alt = product.altTxt;

//     let newTitle = document.createElement('h3')
//     newArticle.appendChild(newTitle)
//     newTitle.innerText = product.name;
//     console.dir(newTitle);


//     let newP= document.createElement('p')
//     newArticle.appendChild(newP)
//     newP.innerText = `hello world`
//     console.dir(newP);



//     // getLinke.innerHTML+=

//     // `
//     // <a href= './product.html?id=${product._id}' >
//     //         <article>
//     //           <img src=' ${product.imageUrl}' alt='${product.altTxt}'>
//     //           <h3 class="productName">${product.name}</h3>
//     //           <p class="productDescription">${product.description}</p>
//     //         </article>
//     //       </a>
//     //       `
//   });
// })


// }
// fetchU()

// // function displayProduct(){


  

// // }

// // displayProduct()