// parent class
class Ninja {
  constructor(name, health = 10, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  // method, logs a ninja name
  sayName() {
    console.log(this.name);
  }

  // method, logs current stat of a ninja
  showStats() {
    console.log(
      'Name:', this.name, '\n',
      'Health:', this.health, '\n',
      'Speed:', this.speed, '\n',
      'Strength:', this.strength
    );
  }

  // method, adds 10 health to a ninja's current health
  drinkSake() {
    this.health += 10;
  }
}

// child Sensei class
class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name);
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.wisdom = wisdom;
  }

  // method, calls Ninja method drinkSake then logs a "wise" message
  speakWisdom() {
    super.drinkSake();
    console.log("Life is like a box of chocolate, you never know what you're gonna get.");
  }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Life is like a box of chocolate, you never know what you're gonna get."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
