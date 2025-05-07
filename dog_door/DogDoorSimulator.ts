import { DogDoor } from './DogDoor';
import { Remote } from './Remote';

export class DogDoorSimulator {
    static main() {
        const door = new DogDoor()
        const remote = new Remote(door)

        console.log("Fido barks to go outside...")
        remote.pressButton()
        console.log("\nFido has gone outside...")
        console.log("\nFido's all done...")

        setTimeout(() => {
            console.log("\nFido's barking to come back inside...")
            remote.pressButton()
            console.log("\nFido's back inside...")
        }, 10000)

    }
}

DogDoorSimulator.main()