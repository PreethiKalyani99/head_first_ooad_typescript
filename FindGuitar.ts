import { GuitarSpec } from "./GuitarSpec";
import { Inventory } from "./Inventory";
import { Wood } from "./Wood";
import { Builder } from "./Builder";
import { Type } from "./Type";

export class FindGuitar {
    static main(): void {
        const inventory = new Inventory();
        this.initializeInventory(inventory);

        const whatErinLikes = new GuitarSpec(Builder.FENDER, "", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
        const guitars = inventory.searchGuitar(whatErinLikes);

        if (!guitars || guitars?.length === 0) {
            console.log("Sorry, Erin, we have nothing for you.");
            return
        } 
        
        console.log("Erin, you might like these guitars:");
        for (const guitar of guitars){
            const spec = guitar.getSpec();

            console.log(`\t${spec.getBuilder()} ${spec.getModel()} ${spec.getType()} guitar:
                ${spec.getBackWood()} back and sides,
                ${spec.getTopWood()} top.
                You can have it for only $${guitar.getPrice()}!`);
        }
    }

    private static initializeInventory(inventory: Inventory): void {
        inventory.addGuitar("11277", 3999.95, Builder.COLLINGS, "CJ", Type.ACOUSTIC, Wood.INDIAN_ROSEWOOD, Wood.SITKA);
        inventory.addGuitar("V95693", 1499.95, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
        inventory.addGuitar("V9512", 1549.95, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
    }
}

FindGuitar.main();