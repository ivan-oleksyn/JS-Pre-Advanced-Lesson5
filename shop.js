let balance = 1000,
    beer = 100,
    beerPrice = 30,
    totalBeer = 0,
    wine = 50,
    winePrice = 50,
    totalWine = 0,
    pepsi = 80,
    pepsiPrice = 20,
    totalPepsi = 0,
    totalPrice = 0;

function sellBeer(count) {
    if (count <= beer) {
        beer -= count;
        totalBeer = count * beerPrice;
        return `Beer: ${count} units`;
    }
    return `Sorry, Beer on stock: ${beer} units`
}

function sellWine(count) {
    if (count <= wine) {
        wine -= count;
        totalWine = count * winePrice;
        return `Wine: ${count} units`
    }
    return `Sorry, Wine on stock: ${wine} units`
}

function sellPepsi(count) {
    if (count <= pepsi) {
        pepsi -= count;
        totalPepsi = count * pepsiPrice;
        return `Pepsi: ${count} units`
    }
    return `Sorry, Pepsi on stock: ${pepsi} units`
}

function total() {
    totalPrice = totalBeer + totalWine + totalPepsi;
    balance += totalPrice;
    return `Total: ${totalPrice} grn`
}

function checkBalance() {
    return `Balance: ${balance}`;
}

export {
    sellBeer,
    sellWine,
    sellPepsi,
    total,
    checkBalance
}