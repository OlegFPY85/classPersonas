import Bowman from '../src/Bowman';

test('Bowman creation', () => {
  const bowman = new Bowman('Robin');
  expect(bowman.name).toBe('Robin');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});
