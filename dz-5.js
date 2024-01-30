const Character = function(race,name,language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Character.prototype.speak = function() {
    console.log(this.language, this.name)
};

const Ork = function(race,name,language,weapon) { 
    Character.apply(this, arguments);
    this.weapon = weapon;
};

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.shoot = function(){
    console.log(`${this.name} hit someone`)
};

const Elf = function(race,name,language,spell){
    Character.apply(this, arguments);
    this.spell = spell;
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function() {
    console.log(`${this.spell} had created`);
};

const ork = new Ork('ork','Serg','eng','knife');
ork.speak();
ork.shoot();
const elf = new Elf('elf','Diana','elfian','rain');
elf.speak();
elf.createSpell();