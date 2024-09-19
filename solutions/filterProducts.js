// filterProducts.js
// Data Filtering

const filterProducts = (products, filters) => {
    if(filters){
        return products.filter(product => {
            if (filters.name && filters.price) {
                return product.name.toLowerCase().includes(filters.name.toLowerCase()) && product.price < filters.price
            } else if (filters.name) {
                return product.name.toLowerCase().includes(filters.name.toLowerCase())
            } else if (filters.price) {
                return product.price < filters.price
            }
        })
    }
    
    return products
};

const array = [
  {
    name: "Max Pro",
    price: 18,
  },
  {
    name: "Ultra Max Pro",
    price: 20,
  },
  {
    name: "Sumsung Galaxy",
    price: 100,
  },
  {
    name: "Head Nokia",
    price: 40,
  },
  {
    name: "Baap Nokia",
    price: 50,
  },
  {
    name: "Infinix Smart Series",
    price: 130,
  },
];


const complexFilter = filterProducts(array, {name: 'max', price: 19});
const nameFilter = filterProducts(array, {name: 'Max'});
const priceLessThanFilter = filterProducts(array, {price: 20});
const noFilter = filterProducts(array);

console.log({
    complexFilter,
    nameFilter,
    priceLessThanFilter,
    noFilter,

});