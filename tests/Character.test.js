import Character from '../src/Character';

test('Character creation with valid name and type', () => {
  const character = new Character('Alice', 'Magician');
  expect(character.name).toBe('Alice');
  expect(character.type).toBe('Magician');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});

test('Character creation with invalid name', () => {
  expect(() => new Character('A', 'Magician')).toThrow();
  expect(() => new Character('', 'Magician')).toThrow();
  expect(() => new Character(123, 'Magician')).toThrow();
});

test('Character creation with invalid type', () => {
  expect(() => new Character('Alice', 'InvalidType')).toThrow();
});

describe('Character methods', () => {
  let character;

  beforeEach(() => {
    character = new Character('Alice', 'Magician');
    character.attack = 10;
    character.defence = 10;
  });

  test('levelUp should increase level and stats', () => {
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(12); // 10 * 1.2
    expect(character.defence).toBe(12); // 10 * 1.2
    expect(character.health).toBe(100);
  });

  test('levelUp should throw error when health is 0', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrow("Can't level up a dead character");
  });

  test('damage should reduce health considering defence', () => {
    character.defence = 40; // 40% protection
    character.damage(50);
    // 50 * (1 - 0.4) = 30 damage
    expect(character.health).toBe(70);
  });

  test('damage should not reduce health below 0', () => {
    character.defence = 0;
    character.damage(200);
    expect(character.health).toBe(0);
  });
});

describe('Character damage method edge cases', () => {
  test('should not reduce health when character is already dead', () => {
    const character = new Character('Ghost', 'Undead');
    character.health = 0;
    character.damage(100);
    expect(character.health).toBe(0);
  });

  test('should handle very high defence (100)', () => {
    const character = new Character('Tank', 'Swordsman');
    character.defence = 100;
    character.damage(100);
    expect(character.health).toBe(100); // No damage
  });

  test('should handle zero defence', () => {
    const character = new Character('Glass', 'Magician');
    character.defence = 0;
    character.damage(50);
    expect(character.health).toBe(50);
  });
});
