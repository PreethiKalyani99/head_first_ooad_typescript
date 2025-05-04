import { Guitar } from "./Guitar";
import { Inventory } from "./Inventory";
import { Wood } from "./Wood";
import { Builder } from "./Builder";
import { Type } from "./Type";

export class FindGuitar {
    static main(): void {
        const inventory = new Inventory();
        this.initializeInventory(inventory);

        const whatErinLikes = new Guitar("", 0, Builder.FENDER, "", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
        const guitars = inventory.searchGuitar(whatErinLikes);

        if (guitars) {
            console.log("Erin, you might like these guitars:");
            for (const guitar of guitars){
                console.log(`\t${guitar.getBuilder()} ${guitar.getModel()} ${guitar.getType()} guitar:
                    ${guitar.getBackWood()} back and sides,
                    ${guitar.getTopWood()} top.
                    You can have it for only $${guitar.getPrice()}!`);
            }
        } 
        else {
            console.log("Sorry, Erin, we have nothing for you.");
        }
    }

    private static initializeInventory(inventory: Inventory): void {
        inventory.addGuitar("11277", 3999.95, Builder.COLLINGS, "CJ", Type.ACOUSTIC, Wood.INDIAN_ROSEWOOD, Wood.SITKA);
        inventory.addGuitar("V95693", 1499.95, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
        inventory.addGuitar("V9512", 1549.95, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
    }
}

FindGuitar.main();