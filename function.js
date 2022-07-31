// 1. function declare 
// addition
function shopping(panjabi, pajama) {
    var totalBill = panjabi + pajama;
    return totalBill;
};
var panjabi = 1500;
var pajama = 1000;
var shoppingResult = shopping(panjabi, pajama);
console.log(shoppingResult);

// multiplaction 
function laptopUpdate(ram, ssd) {
    var totalCost = ram * ssd;
    return totalCost;
}
var ram = 2500;
var ssd = 3500;
var updateResult = laptopUpdate(ram, ssd);
console.log(updateResult);

// division
function asusVivobook(budget, price) {
    var product = budget / price;
    return product;
}
var budget = 80000;
var price = 40000;
var productResult = asusVivobook(budget, price);
console.log(productResult);

// object 
var country = {
    name: 'Bangladesh',
    area: 150000,
    capital: 'Dhaka',
    Division: 8,
    currency: 'Taka'
}
country.name = 'Republic of Bangladesh';
country['Division'] = 9;
var goverment = country.name;
console.log(goverment);
console.log(country)
