export enum Wood {
    INDIAN_ROSEWOOD = "INDIAN_ROSEWOOD",
    BRAZILIAN_ROSEWOOD = "BRAZILIAN_ROSEWOOD",
    MAHOGANY = "MAHOGANY",
    MAPLE = "MAPLE",
    COCOBOLO = "COCOBOLO",
    CEDAR = "CEDAR",
    ADIRONDACK = "ADIRONDACK",
    ALDER = "COLLINGS",
    SITKA = "SITKA"
}

export function woodToString(wood: Wood): string {

    switch (wood) {
        case Wood.INDIAN_ROSEWOOD:
            return "Indian Rosewood";
        case Wood.ADIRONDACK:
            return "Adirondack"
        case Wood.ALDER:
            return "Alder"
        case Wood.BRAZILIAN_ROSEWOOD:
            return "Brazilian Rosewood"
        case Wood.CEDAR:
            return "Cedar";
        case Wood.COCOBOLO:
            return "Cocobolo"
        case Wood.MAHOGANY:
            return "Mahogany"
        case Wood.MAPLE:
            return "Maple"
        case Wood.SITKA:
            return "Sitka"
    }
}