
var slider = document.querySelector('.contant');
var navbar = document.querySelector('.navbar');
var shopcard = document.querySelector('.shopcard');
var scrol = document.querySelector('.scroll');
var cardShopAnchor = document.querySelector('#cardShopAnchor');
var table = document.querySelector('#table');
var about = document.querySelector('#about');
var product1 = document.querySelector('#product1');
var formBtn = document.getElementById('formBtn');
var namep = document.getElementsByClassName('namep');
var Form = document.getElementById('form');
var tfoot = document.getElementById('tfoot');
var pcard = document.getElementsByClassName('shopcard');
var totalPrice=0;


form.addEventListener('submit', function(event) {
    // Your code to handle form submission goes here
    event.preventDefault(); // Prevent the default form submission behavior
});

var indextOfImage = 0;

shopcard.style.display ='none';
//----------------------------- scroll

scrol.style.display ='none';
window.onscroll=function(){
    if(scrollY>400)
    {
        scrol.style.display='block' ;
    }
    else{
        scrol.style.display='none' ;
 
    }
} 
//----------------------------- scrollUp

scrol.onclick=function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
    


}
//----------------------------- silder
const intervalId = setInterval(function () {
    indextOfImage += 1;
    if(indextOfImage==4) indextOfImage=1;
    indextOfImage==2?navbar.style.backgroundColor = '#a29bde':navbar.style.backgroundColor = '#f56f42';

    if (slider) {
        slider.style.backgroundImage = `url("image/${indextOfImage}.jpg")`;
    }
    slider.style.transition = 'background-image 0.9s ease-in-out';

    
}, 3000);

// cardShop Anchor function

shopcard.style.display === 'none';
function cardShopDisplay() {
    shopcard.style.display === 'none'?shopcard.style.display = 'block':shopcard.style.display ='none'   ; 
}

// prodect arrr --------------------------------
var manShirt=[
 {
    name:"Man Shirt",
    img:'image/product/Menshirt/f1.jpg',
    price:150


},
{
    name:"Man Shir",
    img:'image/product/Menshirt/f2.jpg',
    price:150
},
{
    name:"Man Shir",
    img:'image/product/Menshirt/f3.jpg',
    price:150
},
{
    name:"Man Shir",
    img:'image/product/Menshirt/f4.jpg',
    price:150
},
{
    name:"Man Shir",
    img:'image/product/Menshirt/f5.jpg',
    price:150
}]

var manShirtFull=[
    {
        name:"Man Shirt FuLL",
        img:'image/product/Menshirt1/n1.jpg',
        price:300
    
    
    },
    {
        name:"Man Shirt FuLL",
        img:'image/product/Menshirt1/n2.jpg',
        price:300
    },
    {
        name:"Man Shirt FuLL",
        img:'image/product/Menshirt1/n3.jpg',
        price:300
    },
    {
        name:"Man Shirt FuLL",
        img:'image/product/Menshirt1/n4.jpg',
        price:300
    },
    {
        name:"Man Shirt FuLL",
        img:'image/product/Menshirt1/n5.jpg',
        price:300
    }
]

   var SoShirt=[
    {
       name:"So Shirt",
       img:'image/product/t-shart/t1.jpg',
       price:500
   
   
   },
   {
    name:"So Shirt",
    img:'image/product/t-shart/t2.jpg',
    price:500
   },
   {
    name:"So Shirt",
    img:'image/product/t-shart/t3.jpg',
    price:500
   },
  ]

   var Tshirt=[
    {
        name:"T-shirt",
        img:'image/product/t-shart1/p1.png',
        price:200
   
   
   },
   {
    name:"T-shirt",
    img:'image/product/t-shart1/p2.png',
    price:200
   },
   {
    name:"T-shirt",
    img:'image/product/t-shart1/p3.png',
    price:200
   },
   {
    name:"T-shirt",
    img:'image/product/t-shart1/p4.png',
    price:200
   },
   ]

   var jeans=[
    {
       name:"jeans",
       img:'image/product/jeans/jeans1.png',
       price:320
   
   
   },
   {
    name:"jeans",
    img:'image/product/jeans/jeans2.png',
    price:320
   },
   {
    name:"jeans",
    img:'image/product/jeans/jeans3.png',
    price:320
   },
   {
    name:"jeans",
    img:'image/product/jeans/jeans4.png',
    price:320
   },
   {
    name:"jeans",
    img:'image/product/jeans/jeans5.png',
    price:320
   }]
   var shoes=[
    {
       name:"shoes",
       img:'image/product/shoes/shoe1.png',
       price:210
   
   
   },
   {
    name:"shoes",
    img:'image/product/shoes/shoe2.png',
    price:210
   },
   {
    name:"shoes",
    img:'image/product/shoes/shoe3.png',
    price:210
   },
   {
    name:"shoes",
    img:'image/product/shoes/shoe4.png',
    price:210
   },
   {
    name:"shoes",
    img:'image/product/shoes/shoe5.png',
    price:210
   }]

   var allProduct=[manShirt,manShirtFull,SoShirt,Tshirt,jeans,shoes];
   

   var allCategory=['Man Shirt','Man Shirt Full','So Shirt','T-shirt','jeans','shoes'];

// create category btn--------------------------------------------
function CreateCatagory(text,index){
var newDiv = document.createElement("div");
 newDiv.textContent = `${text}`;

 newDiv.onclick=function(){ createAllProductDard(index)}
document.getElementById("category").appendChild(newDiv);
   }

   for(let i=0; i<allCategory.length;i++)
   {
    CreateCatagory(allCategory[i],i)

   }
   // create product--------------------------------------------
   var product = document.getElementById("product");

   function createProductDard(url, name, price, ind1,ind2) {
    var product = document.getElementById("product");

    let productCard = `
    <div class="des1">
        <div onclick="createDetailsCard(${ind1}, ${ind2})"  style="background-image: url(${url});" class="image"></div>
        <p>${name}</p>
        <p>price: <span>${price}$</span></p>
        <button onclick="addProductAtCard(${ind1},${ind2})"  class="btn">add card</button>
    </div>
    `;

    product.innerHTML += productCard;
}

function createAllProductDard(len) {
    product1.innerHTML="";
    var product = document.createElement('div');
      product.id = 'product';
      product1.appendChild(product);// Remove inner HTML content

        for (let i = 0; i < allProduct[len].length; i++) {


            createProductDard(allProduct[len][i].img, allProduct[len][i].name, allProduct[len][i].price, len,i);
        }

    
}
function createAllProduct() {
    product1.innerHTML="";
    var product = document.createElement('div');
      product.id = 'product';
      product1.appendChild(product); // Remove inner HTML content

        for (let i = 0; i < allProduct.length; i++) {
            for(let j = 0; j < allProduct[i].length; j++)
            {
                createProductDard(allProduct[i][j].img, allProduct[i][j].name, allProduct[i][j].price,i,j);


            }


        }

    
}
createAllProduct();

// create product at card--------------------------------------------

function addProductAtCard(ind1, ind2) {
    table=`
    <tr style="margin: 1vh 0;">
    <td><img src=${allProduct[ind1][ind2].img} width="30px" height="30px"></td>
    <td>${allProduct[ind1][ind2].name}</td>
    <td>${allProduct[ind1][ind2].price} </td>
</tr>

            
    `;
totalPrice+=allProduct[ind1][ind2].price;
document.getElementById('tbody').innerHTML+=table;
tfoot.innerHTML=`
<tr>
    <th colspan="2">Total Price</th>
    <th>${totalPrice}</th>
</tr>
`



    
}
// Form Button Action at card--------------------------------------------
formBtn.onclick = function() {
    var email = document.getElementById('email');
    var name = document.querySelector('#name');
    var textarea = document.querySelector('#textarea');
    var namep = document.querySelector('.namep'); // Changed getElementsByClassName to querySelector
    var emailp = document.querySelector('#emailp'); // Changed getElementsByClassName to querySelector
    var textareap = document.querySelector('#textareap'); 
   
    if (name.value === '') {
        name.style.border = '2px solid red';
        namep.style.display='block';
    }
    if (email.value === '') {
        email.style.border = '2px solid red';
        email.style.display='block';

    }
    if (textarea.value === '') {
        textarea.style.border = '2px solid red';
        textareap.style.display='block';

    }
}


// Create Details card--------------------------------------------
function createDetailsCard(ind1, ind2)
{
    product1.innerHTML="";
        let detailsCard=`
    <div class="detailsCard">
      <div class="imgProduct">
        <div style="background-image: url(${allProduct[ind1][ind2].img});background-size:100% 100%;" class="productImage"></div>
        <div class="productImageSmail">
          <div style="background-image: url(image/product/jeans/jeans1.png);background-size:100% 100%;"></div>
          <div style="background-image: url(image/product/jeans/jeans2.png);background-size:100% 100%;"></div>
          <div style="background-image: url(image/product/jeans/jeans3.png);background-size:100% 100%;"></div>
          <div style="background-image: url(image/product/jeans/jeans4.png);background-size:100% 100%;"></div>
          <div style="background-image: url(image/product/jeans/jeans5.png);background-size:100% 100%;"></div>
        </div>
      </div>

      <div class="contentOfDetailsPage">
        <h3 >${allProduct[ind1][ind2].name}</h3>
        <h3>Price:<span>${allProduct[ind1][ind2].price}$</span></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat
          voluptatem animi dicta saepe rerum sequi illo adipisci esse alias
          voluptatibus dolores odit velit pariatur, possimus corrupti architecto
          aspernatur voluptates.
        </p>
        <div class="size"> 
          <h3>Size:</h3>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>

        <div class="btn">
            <button onclick="addProductAtCard(${ind1}, ${ind2})">ADD CARD</button>
            <button onclick="createAllProduct() ">BACK</button>

        </div>
      </div>
    </div>
    
    `;
    product1.innerHTML+=detailsCard;
}


