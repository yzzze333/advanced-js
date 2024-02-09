class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }
    speak() {
        console.log(this.language, this.name);
    }
};


class Ork extends Character {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }
    shoot() {
        console.log(`${this.name} hit someone`);
    }
    speak() {
        console.log(`I'm ${this.name}`);
    }
};

class Elf extends Character {
    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }
    createSpell() {
        console.log(`${this.spell} had created`);
    }
    speak() {
        console.log(`My language is ${this.language}`);
    }
};

const elf = new Elf('elf','Diana','elfian','icestorm');
elf.speak();
const ork = new Ork('ork','OgrMage','orkian','sword');
ork.speak()

