const finalPrice = (price, discount) => (price * (100 - discount)) / 100;
const coupons = [
    "S4p0d3scu3nt0",
    "P3rr0d3scu3nt0",
    "G4m1n",
    "St3Cr1",
    "FIRST15",
];

function priceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const valuePrice = parseFloat(inputPrice.value);
    const valueDiscount = inputDiscount.value;
    let discount;
    switch (valueDiscount) {
        case coupons[0]:
            discount = 10;
            break;
        case coupons[1]:
            discount = 20;
            break;
        case coupons[2]:
            discount = 30;
            break;
        case coupons[3]:
            discount = 50;
            break;
        case coupons[4]:
            discount = 15;
            break;
    }
    if (!coupons.includes(valueDiscount)) {
        alert(`your coupon ${valueDiscount} does not exist`);
    }
    const valueDisplay = document.getElementById("priceDisplay");

    const price = finalPrice(valuePrice, discount);
    valueDisplay.innerHTML = `The final price of your product is $${price}`;
}