
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