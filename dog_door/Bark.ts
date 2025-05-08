export class Bark {
    private sound: string

    constructor(sound: string) {
        this.sound = sound
    }

    getSound(): string {
        return this.sound
    }

    equals(bark: Bark): boolean {
        if (this.sound === bark.getSound()) {
            return true
        } 
        return false
    }
}