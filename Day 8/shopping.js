let products=[
    {
        id:1,
        name:"Casual Wear Jacket",
        size:"L",
        color:"Grayish orange",
        price:1200,
        image:"Product1.jpg",
        description:"A cool jacket to highlight your chic soul"
    },
    {
        id:2,
        name:"Formal Wear",
        size:"M",
        color:"Black-white",
        price:2000,
        image:"Product2.jpg",
        description:"An Elegant wear for a sophisticated look"
    },
    {
        id:3,
        name:"Ethnic Wear",
        size:"XL",
        color:"Multicolor",
        price:5000,
        image:"Product3.jpg",
        description:"A desi Lehenga for a desi Function"
    },
    {
        id:4,
        name:"Western wear",
        size:"L",
        color:"Blue",
        price:10000,
        image:"Product4.jpeg",
        description:"A perfect prom dress to complete your ravishing look"
    },
    {
        id:5,
        name:"Night wear",
        size:"S",
        color:"Lavender",
        price:900,
        image:"product5.jpg",
        description:"A comfy night wear for your beauty sleep routine"
    },
    {
        id:6,
        name:"Hoodie",
        size:"XL",
        color:"Red",
        price:500,
        image:"product6.jpeg",
        description:"A combo pack of style, comfort and versatility"
    },
    {
        id:7,
        name:"Leather Jacket",
        size:"L",
        color:"Black",
        price:2000,
        image:"product7.jpg",
        description:"A perfect jacket to complete your bad boy look"
    },
    {
        id:8,
        name:"Formal Wear",
        size:"M",
        color:"Black-White",
        price:1000,
        image:"product8.jpg",
        description:"This could help you to look like a focused person"
    },
    {
        id:9,
        name:"Ethnic Wear",
        size:"XL",
        color:"Lightgreen-Peacockgreen",
        price:5000,
        image:"product9.jpg",
        description:"This is only thing that can make you look good"
    },
    {
        id:10,
        name:"Western Wear",
        size:"L",
        color:"Blue-Black",
        price:6000,
        image:"product10.png",
        description:"Just buy it man"
    },
    {
        id:11,
        name:"Night Wear",
        size:"M",
        color:"Blue-gray",
        price:900,
        image:"product11.jpg",
        description:"Wear it if you want"
    },
    {
        id:12,
        name:"Hoodie",
        size:"XL",
        color:"Black-White",
        price:700,
        image:"product12.jpg",
        description:"Available in all colors"
    },
];
let cart=[];


function displayproducts(productsdata,who="productwrapper"){
   let productsString="";
   
   
      if(who=="productwrapper")
      {

           productsdata.forEach(function (product){
                let {name,image,color,description,price,size,id}=product;
                        productsString+=`<div class="product">
                        <div class="prodimg">
                            <img src="Productimages/${image}" width="100%">
                        </div>
                        <h4>${name} </h4>
                        <p>Price: ${price}</p>
                        <p>Size: ${size}</p>
                        <p>Color:${color}</p>
                        <p>${description}</p>
                        <p>
                            <button onclick="addTocart(${id})">ADD TO CART</button>
                        </p>            
                    </div>`;
                
            });
      
    }
        else {
             productsdata.forEach(function (product,index){
    
                let {name,image,color,description,price,size,id}=product;
                productsString+=`
                <div class="product">
                <div class="prodimg">
                    <img src="Productimages/${image}" width="100%">
                </div>
                <h4>${name} </h4>
                <p>Price: ${price}</p>
                <p>Size: ${size}</p>
                <p>Color:${color}</p>
                <p>${description}</p>
                <p>
                    <button onclick="removeFromcart(${index})">Remove from Cart</button> 
                    </p>            
            </div>`;
        }); 
            productsString+=`<br><h3>Total count is ${productsdata.length}</h3>`;
            
            }
        

   document.getElementById(who).innerHTML=productsString;
}
displayproducts(products);

function searchProduct(searchValue){
   
   let searchedProducts= products.filter(function (product,index){
       let searchString=product.name+" "+product.color+" "+product.description; 
       return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    displayproducts(searchedProducts);
}
function addTocart(productid){
    console.log(productid);
    let temp1=cart.filter(function (product){
        return product.id==productid;
    });
    products.forEach(function (product,index){
        if(product.id==productid){
            productindex=index;
            console.log(product);
        }
    })
    if(temp1.length==0){
    cart.push(products[productindex]);
    displayproducts(cart,"cart");
    count(cart);}
    else
    {
        alert("The product is already in the cart");
    }
}

function removeFromcart(index){
     cart.splice(index,1);
     displayproducts(cart,"cart");
     count(cart);
}
function count(cart){
    document.getElementsByClassName("count").innerHTML=`Total count is ${cart.length}`;
}
function searchpricerange(){
    let min=document.getElementById("minprice").value;
    let max=document.getElementById("maxprice").value; 
    let found=products.filter(function (product){
        return (product.price>=min && product.price<=max );
    });
    displayproducts(found);
}