import { DogDoor } from "./DogDoor"

export class BarkRecognizer {
    private door: DogDoor

    constructor(door: DogDoor) {
        this.door = door
    }

    recognize(bark: string){
        console.log("BarkRecognizer: Heard a bark...", bark)
        this.door.openDoor()
    }
}