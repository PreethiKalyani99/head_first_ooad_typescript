import { GuitarSpec } from "./GuitarSpec";

export class Guitar {
    private serialNumber: string;
    private price: number;
    private spec: GuitarSpec

    constructor(
        serialNumber: string,
        price: number,
        spec: GuitarSpec
    ) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.spec = spec;
    }

    setPrice(price: number): void {
        this.price = price
    }

    getSerialNumber(): string {
        return this.serialNumber;
    }

    getPrice(): number {
        return this.price;
    }

    getSpec(): GuitarSpec {
        return this.spec;
    }
}
