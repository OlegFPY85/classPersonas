import Daemon from '../src/Daemon';

test('Daemon creation', () => {
  const daemon = new Daemon('Alucard');
  expect(daemon.name).toBe('Alucard');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});
