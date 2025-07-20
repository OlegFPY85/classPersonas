import Undead from '../src/Undead';

test('Undead creation', () => {
  const undead = new Undead('Shon');
  expect(undead.name).toBe('Shon');
  expect(undead.type).toBe('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});
