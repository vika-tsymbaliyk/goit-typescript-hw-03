class Key {
    private signature: number = Math.random();
    getSignature(): number{
        return this.signature
    }
}

class Person{
    constructor(private key: Key) {}

    getKey(): Key {
      return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.door = false;
      this.key = key;
    }

    public comeIn(person: Person): void {
        if (this.door) {
        this.tenants.push(person);
        }
    }
    abstract openDoor(key: Key): void;
}


class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
      } else {
        this.door = false;
      }
    }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};