import { DogDoor } from "./DogDoor"
import { Bark } from "./Bark"

export class BarkRecognizer {
    private door: DogDoor

    constructor(door: DogDoor) {
        this.door = door
    }

    recognize(bark: Bark){
        console.log("BarkRecognizer: Heard a bark...", bark.getSound())
        // this.door.openDoor()
        let allowedBarks: Bark[] = this.door.getAllowedBarks()

        for(const otherBark of allowedBarks){
            if(otherBark.equals(bark)){
                this.door.openDoor()
                return
            }
        }
        console.log("This dog is not allowed to enter!")
    }
}