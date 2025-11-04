<<<<<<< HEAD
let price = 650; 
let finalPrice;

if (price <= 0) {
    console.log("ราคาสินค้าไม่ถูกต้อง");
}

if (price > 0 && price <= 500) {
    finalPrice = price - 50;
    console.log("ราคาหลังหักส่วนลด: " + finalPrice + " บาท");
}

if (price > 500) {
    finalPrice = price - (price * 0.10);
    console.log("ราคาหลังหักส่วนลด: " + finalPrice.toFixed(2) + " บาท");
=======
let price = 650; 
let finalPrice;

if (price <= 0) {
    console.log("ราคาสินค้าไม่ถูกต้อง");
}

if (price > 0 && price <= 500) {
    finalPrice = price - 50;
    console.log("ราคาหลังหักส่วนลด: " + finalPrice + " บาท");
}

if (price > 500) {
    finalPrice = price - (price * 0.10);
    console.log("ราคาหลังหักส่วนลด: " + finalPrice.toFixed(2) + " บาท");
>>>>>>> 7725b81bf25abc7b1a80fd30f69b7d4949da009f
}