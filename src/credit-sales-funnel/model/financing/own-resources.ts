export class OwnResources {
    liquidAssets: number;
    balanceFromBuildingSociety: number;
    ownManpower: number;

    sum() {
        return this.liquidAssets + this.balanceFromBuildingSociety + this.ownManpower;
    }
}