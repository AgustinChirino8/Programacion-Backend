class ProductManager {
  constructor() {
    this.Products = [];
  }

  getProducts() {
    return this.Products;
  }

  addProduct(title, description, price, thumbnail, stock , code) {
    const product = {
      title,
      description,
      price,
      thumbnail,
      stock,
      newCode:100 + code + this.setNewCode(),
    };
    this.Products.push(product);
  }

  setNewCode(){
    return this.Products.filter((product) => product.code);
  }

}

const Producto1 = new ProductManager();
const Producto2 = new ProductManager();
const Producto3 = new ProductManager();
const Producto4 = new ProductManager();
const Producto5 = new ProductManager();
const Producto6 = new ProductManager();
const Producto7 = new ProductManager();

Producto1.addProduct("Heladera", "Marca Samsung", 2500, "img", 45 , 1),
Producto2.addProduct("Microondas", "Marca Phillips", 1900, "img", 15 , 2),
Producto3.addProduct("Tetera Electrica", "Marca LG", 800, "img", 25, 3),
Producto4.addProduct("Cafetera", "Marca Nespresso", 1800, "img", 10 ,4),
Producto5.addProduct("Home Theater", "Marca Phillips", 1500, "img", 5, 5),
Producto6.addProduct("Tostadora", "Marca Liliana", 750, "img", 26 , 6),
Producto7.addProduct("Horno Electrico","Marca Samsung",2600,"img",2 , 7)

Producto1.setNewCode();
Producto2.setNewCode();
Producto3.setNewCode();
Producto4.setNewCode();

 
console.log(Producto1,Producto2,Producto3,Producto4);
