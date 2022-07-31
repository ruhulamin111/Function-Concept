// 1. function declare 
function laptopConfiguration() {
    console.log('Asus vivobook configuration')
}
laptopConfiguration();

function asusVivobook(budget) {
    var productPrice = 45000;
    var productQuantity = budget / productPrice;
    return productQuantity;
}
var totalBudget = 90000;
console.log(asusVivobook(totalBudget));
