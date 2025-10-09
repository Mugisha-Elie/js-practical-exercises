const itemPrices = new Map([
    ['Laptop', 1200], 
    ['Monitor', 300],
    ['Mouse', 50]
]);

const taxContent = {
    taxRate: 0.08,
    calculateTaxedPrice(price){
        return price * (1 + this.taxRate);
    }
}

const taxedPrices = [];

itemPrices.forEach(function(value, key){
    const taxedPrice = this.calculateTaxedPrice(value);

    taxedPrices.push({
        name: key,
        original: value,
        taxed: taxedPrice.toFixed(2)
    });
}, taxContent);

console.log(taxedPrices);