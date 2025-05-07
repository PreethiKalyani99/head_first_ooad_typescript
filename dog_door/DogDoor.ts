export class DogDoor {
    private open: boolean

    constructor() {
        this.open = false
    }

    openDoor() {
        console.log("The dog door opens.")
        this.open = true
    }

    closeDoor() {
        console.log("The dog door closes.")
        this.open = false
    }

    isOpen(): boolean {
        return this.open
    }
}