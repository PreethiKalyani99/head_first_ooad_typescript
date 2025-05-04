export enum Type {
    ACOUSTIC = "ACOUSTIC",
    ELECTRIC = "ELECTRIC"
}

export function typeToString(type: Type): string{
    switch(type){
        case Type.ACOUSTIC: return 'Acoustic';
        case Type.ELECTRIC: return 'Electric';
    }
}