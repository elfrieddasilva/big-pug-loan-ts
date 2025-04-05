export class PurchaseCosts {
    priceOfLand: number;
    purchasePrice: number;
    reconstructionCosts: number;
    additionalPurchaseCosts: number;

    sum() {
        return this.priceOfLand + this.purchasePrice + this.reconstructionCosts + this.additionalPurchaseCosts;
    }

}