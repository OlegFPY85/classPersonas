export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string with length between 2 and 10 characters');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid type. Valid types are: ${validTypes.join(', ')}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Can't level up a dead character");
    }
    this.level += 1;
    this.attack = Math.floor(this.attack * 1.2);
    this.defence = Math.floor(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) return;

    const damage = points * (1 - this.defence / 100);
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
