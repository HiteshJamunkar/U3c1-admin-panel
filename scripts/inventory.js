let productArr =JSON.parse(localStorage.getItem("products"))
console.log('productArr:', productArr )

function append(){
    let main = document.getElementById("all_products");

productArr.map(function(ele,index){
    let div =   document.createElement("div");
    let image = document.createElement("img");
    let type =  document.createElement("h3");
    let desc =  document.createElement("h3");
    let price = document.createElement("h3");
    let btn = document.createElement("button");
    btn.innerText = "Remove product";
    btn.addEventListener("click",function(){
    removeProd(ele,index);
    })

    image.src = ele.image;
    type.innerText = ele.type;
    desc.innerText = ele.desc;
    price.innerText = ele.price;

    div.append(image,type,desc,price,btn);
    main.append(div);

})

}
append();

function removeProd(ele,index){ 
    productArr.splice(index,1);
    console.log('productArr:', productArr)
    localStorage.setItem("products",JSON.stringify(productArr));
    window.location.reload();
}