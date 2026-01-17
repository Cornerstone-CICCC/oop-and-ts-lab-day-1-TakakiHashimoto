class Animal {
  static remainingAnimals = 0;
  #name;
  #species;
  #energy;
  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
    Animal.remainingAnimals++;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }

  get species() {
    return this.#species;
  }
  set species(newSpecies) {
    this.#species = newSpecies;
  }

  get energy() {
    return this.#energy;
  }
  set energy(newValue) {
    this.#energy = newValue;
  }

  doAttack(animal, howMuch) {
    if (this.energy <= 0) {
      console.log(`${this.name} cannot attack`);
      return;
    }
    if (animal.energy > 0) {
      animal.energy = animal.energy - howMuch;
      this.energy = this.energy - howMuch;
    }

    // Checking if it runs out of the energy;
    if (animal.energy <= 0) {
      console.log(`${animal.name} lost`);
      Animal.remainingAnimals -= 1;
    } else if (this.energy <= 0) {
      console.log(`${this.name} has lost energy. ${animal.name} won`);
    }
  }

  eat() {
    this.energy = this.energy + 10;
  }
}

class Bird extends Animal {
  #canFly;
  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }

  attack(animal) {
    this.doAttack(animal, 20);
  }

  eat() {
    this.energy += 10;
  }
}

class Mammal extends Animal {
  #furColor;
  constructor(name, species, furColor) {
    super(name, species, 200);
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }

  attack(animal) {
    this.doAttack(animal, 50);
  }

  eat() {
    this.energy = this.energy + 20;
  }
}

class Reptile extends Animal {
  #coldBlooded;
  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }
  set coldBlooded(value) {
    this.#coldBlooded = value;
  }

  attack(animal) {
    this.doAttack(animal, 30);
  }

  eat() {
    this.energy = this.energy + 15;
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`,
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`,
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`,
);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
