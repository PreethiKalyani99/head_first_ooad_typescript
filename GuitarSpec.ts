import { Wood } from "./Wood";
import { Builder } from "./Builder";
import { Type } from "./Type";

export class GuitarSpec {
    private builder: Builder;
    private model: string;
    private type: Type;
    private backWood: Wood;
    private topWood: Wood;
    private numStrings: number

    constructor(
        builder: Builder,
        model: string,
        type: Type,
        backWood: Wood,
        topWood: Wood,
        numStrings: number
    ) {
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
        this.numStrings = numStrings;
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

    getNumStrings(): number{
        return this.numStrings
    }

    matches(specs: GuitarSpec): boolean {
        if(this.builder !== specs.getBuilder()) return false
        if(specs.getModel() && this.model !== specs.getModel()) return false
        if(this.type !== specs.getType()) return false
        if(this.backWood !== specs.getBackWood()) return false
        if(this.topWood !== specs.getTopWood()) return false
        if(this.numStrings !== specs.getNumStrings()) return false

        return true
    }
}