import { DogDoor } from './DogDoor';
import { Remote } from './Remote';
import { BarkRecognizer } from './BarkRecognizer';

export class DogDoorSimulator {
    static main() {
        const door = new DogDoor()
        const remote = new Remote(door)
        const recognizer = new BarkRecognizer(door)

        console.log("Fido barks to go outside...")
        // remote.pressButton()
        recognizer.recognize("Woof")
        console.log("\nFido has gone outside...")
        console.log("\nFido's all done...")

        setTimeout(() => {
            console.log("\nFido's barking to come back inside...")
            // remote.pressButton()
            recognizer.recognize("Woof")
            console.log("\nFido's back inside...")
        }, 10000)

    }
}

DogDoorSimulator.main()