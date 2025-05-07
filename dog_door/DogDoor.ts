export class DogDoor {
    private open: boolean

    constructor() {
        this.open = false
    }

    openDoor() {
        console.log("The dog door opens.")
        this.open = true

        setTimeout(() => {
            this.closeDoor()
        }, 5000)
    }

    closeDoor() {
        console.log("The dog door closes.")
        this.open = false
    }

    isOpen(): boolean {
        return this.open
    }
}