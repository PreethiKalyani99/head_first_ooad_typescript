import { DogDoor } from './DogDoor';
import { Remote } from './Remote';
import { BarkRecognizer } from './BarkRecognizer';
import { Bark } from './Bark';

export class DogDoorSimulator {
    static main() {
        const door = new DogDoor()
        door.addAllowedBark(new Bark("woof"))
        door.addAllowedBark(new Bark("rowlf"))
        door.addAllowedBark(new Bark("rooowlf"))
        door.addAllowedBark(new Bark("rawlf"))

        const recognizer = new BarkRecognizer(door)
        const remote = new Remote(door)

        console.log("Fido barks to go outside...")
        recognizer.recognize(new Bark("woof"))

        console.log("\nFido has gone outside...")
        
        setTimeout(() => {
            console.log("\nFido's all done...")
            console.log("\n...but he's stuck outside!")

            let smallDogBark = new Bark("yip")
            console.log("\nA small dog starts barking...")
            recognizer.recognize(smallDogBark)

            setTimeout(() => {
                console.log("\nFido starts barking")
                recognizer.recognize(new Bark("rooowlf"))
                console.log("\nFido back inside...")
            })
        }, 10000)



    }
}

DogDoorSimulator.main()