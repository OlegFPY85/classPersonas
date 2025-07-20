import Zombie from '../src/Zombie';

test('Zombie creation', () => {
  const zombie = new Zombie('Rob');
  expect(zombie.name).toBe('Rob');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});
