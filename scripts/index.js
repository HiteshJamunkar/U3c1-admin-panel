//store the products array in localstorage as "products"

function Product(t,d,p,i){
    this.type = t,
    this.desc = d,
    this.price = p,
    this.image = i
}

var productArr = JSON.parse(localStorage.getItem("products")) || [];
function addProduct(){
    event.preventDefault();
    let form = document.getElementById("products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new Product(type,desc,price,image)

    productArr.push(p1);
    localStorage.setItem("products",JSON.stringify(productArr));
    document.getElementById("products").value = null;
    window.location.reload();

}
