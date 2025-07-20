import Swordsman from '../src/Swordsman';

test('Swordsman creation', () => {
  const swordsman = new Swordsman('Artur');
  expect(swordsman.name).toBe('Artur');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});
