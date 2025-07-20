import Magician from '../src/Magician';

test('Magician creation', () => {
  const magician = new Magician('Merlin');
  expect(magician.name).toBe('Merlin');
  expect(magician.type).toBe('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});
