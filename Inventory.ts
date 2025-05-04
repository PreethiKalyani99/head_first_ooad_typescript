import { Guitar } from './Guitar';
import { Builder } from './Builder';
import { Wood } from './Wood';
import { Type } from './Type';
import { GuitarSpec } from './GuitarSpec';

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
        const spec = new GuitarSpec(builder, model, type, backWood, topWood)
        const guitar = new Guitar(serialNumber, price, spec)
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

    searchGuitar(searchGuitar: GuitarSpec): Guitar[] | null {
        return this.guitars.filter((guitar) => {
            const spec = guitar.getSpec()

            if (searchGuitar.getBuilder() && searchGuitar.getBuilder() !== spec.getBuilder()) return false;
            if (searchGuitar.getModel() && searchGuitar.getModel() !== spec.getModel()) return false;
            if (searchGuitar.getType() && searchGuitar.getType() !== spec.getType()) return false;
            if (searchGuitar.getBackWood() && searchGuitar.getBackWood() !== spec.getBackWood()) return false;
            if (searchGuitar.getTopWood() && searchGuitar.getTopWood() !== spec.getTopWood()) return false;
            
            return true;
        })  
    }
}