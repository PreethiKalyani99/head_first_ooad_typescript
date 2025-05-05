export enum  Builder {
    FENDER = "FENDER",
    MARTIN = "MARTIN",
    GIBSON = "GIBSON",
    COLLINGS = "COLLINGS",
}

export function builderToString(builder: Builder): string{
    
    switch(builder) {
        case Builder.FENDER:
            return "Fender";
        case Builder.MARTIN:
            return "Martin"
        case Builder.COLLINGS:
            return "Collings"
        case Builder.GIBSON: 
            return "Gibson"
    }
}