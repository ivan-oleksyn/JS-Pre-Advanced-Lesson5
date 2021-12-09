// Task 1
function counter() {
    let count = 0;
    return function summ(step) {
        return count += step;
    }
}
let sum = counter();
console.log(sum(3));
console.log(sum(5));
console.log(sum(228));

//Task 2
import * as shop from './shop.js'
console.log(shop.sellBeer(12));
console.log(shop.sellWine(9));
console.log(shop.sellPepsi(13));
console.log(shop.total());
console.log(shop.checkBalance());