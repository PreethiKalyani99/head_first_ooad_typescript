import { Guitar } from './Guitar';
import { GuitarSpec } from './GuitarSpec';

export class Inventory {
    private guitars: Guitar[] = [];

    constructor() {
        this.guitars = [];
    }

    addGuitar(
        serialNumber: string,
        price: number,
        spec: GuitarSpec
    ): void {
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

    searchGuitar(searchSpec: GuitarSpec): Guitar[] {
        return this.guitars.filter((guitar) => guitar.getSpec().matches(searchSpec))  
    }
}