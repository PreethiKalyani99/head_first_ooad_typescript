import { Wood } from "./Wood";
import { Builder } from "./Builder";
import { Type } from "./Type";

export class Guitar {
    private serialNumber: string;
    private builder: Builder;
    private model: string;
    private type: Type;
    private backWood: Wood;
    private topWood: Wood;
    private price: number;

    constructor(
        serialNumber: string,
        price: number,
        builder: Builder,
        model: string,
        type: Type,
        backWood: Wood,
        topWood: Wood
    ) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }

    getSerialNumber(): string {
        return this.serialNumber;
    }

    getPrice(): number {
        return this.price;
    }

    getBuilder(): Builder {
        return this.builder;
    }

    getModel(): string {
        return this.model;
    }

    getType(): Type {
        return this.type;
    }

    getBackWood(): Wood {
        return this.backWood;
    }

    getTopWood(): Wood {
        return this.topWood;
    }
}
