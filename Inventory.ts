import { Guitar } from './Guitar';
import { Builder } from './Builder';
import { Wood } from './Wood';
import { Type } from './Type';

export class Inventory {
    private guitars: Guitar[] = [];

    constructor() {
        this.guitars = [];
    }

    addGuitar(
        serialNumber: string,
        price: number,
        builder: Builder,
        model: string,
        type: Type,
        backWood: Wood,
        topWood: Wood
    ): void {
        const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood)
        this.guitars.push(guitar);
    }

    getGuitar(serialNumber: string): Guitar | null {
        for (const guitar of this.guitars) {
            if (guitar.getSerialNumber() === serialNumber) {
                return guitar;
            }
        }
        return null;
    }

    searchGuitar(searchGuitar: Guitar): Guitar[] | null {
        return this.guitars.filter((guitar) => {
            if (searchGuitar.getBuilder() && searchGuitar.getBuilder() !== guitar.getBuilder()) return false;
            if (searchGuitar.getModel() && searchGuitar.getModel() !== guitar.getModel()) return false;
            if (searchGuitar.getType() && searchGuitar.getType() !== guitar.getType()) return false;
            if (searchGuitar.getBackWood() && searchGuitar.getBackWood() !== guitar.getBackWood()) return false;
            if (searchGuitar.getTopWood() && searchGuitar.getTopWood() !== guitar.getTopWood()) return false;
            return true;
        })  
    }
}