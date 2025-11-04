<<<<<<< HEAD
const products = [
    { name: "เสื้อ", price: 300, discount: 0.1 },     
    { name: "รองเท้า", price: 800 },                 
    { name: "หมวก", price: 150, discount: 0.2 },       
    { name: "กระเป๋า", price: 1200, discount: 0.15 },  
    { name: "นาฬิกา", price: 500 }                     
];

function calculateTotal() {
    let total = 0;

    products.forEach(product => {
        let finalPrice;

        if (product.discount) {
            finalPrice = product.price - (product.price * product.discount);
        } else {
            finalPrice = product.price;
        }

        total += finalPrice;
    });

    console.log(`Total price after discount: $${total.toFixed(2)}`);
}
=======
const products = [
    { name: "เสื้อ", price: 300, discount: 0.1 },     
    { name: "รองเท้า", price: 800 },                 
    { name: "หมวก", price: 150, discount: 0.2 },       
    { name: "กระเป๋า", price: 1200, discount: 0.15 },  
    { name: "นาฬิกา", price: 500 }                     
];

function calculateTotal() {
    let total = 0;

    products.forEach(product => {
        let finalPrice;

        if (product.discount) {
            finalPrice = product.price - (product.price * product.discount);
        } else {
            finalPrice = product.price;
        }

        total += finalPrice;
    });

    console.log(`Total price after discount: $${total.toFixed(2)}`);
}
>>>>>>> 7725b81bf25abc7b1a80fd30f69b7d4949da009f
calculateTotal();