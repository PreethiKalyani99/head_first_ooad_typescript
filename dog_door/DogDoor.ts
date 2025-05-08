import { Bark } from "./Bark"

export class DogDoor {
    private open: boolean
    private allowedBarks: Bark[] = []

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

    addAllowedBark(bark: Bark) {
        this.allowedBarks.push(bark)
    }

    getAllowedBarks(): Bark[] {
        return this.allowedBarks
    }
}