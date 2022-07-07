// ⬇︎ IMPORTS/VARIABLES ⬇︎
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Imports the Potion() constructor into the test to establish Potion as a usable variable
const Potion = require('../lib/Potion');

// Replaces the constructor's implementations with our mock data
jest.mock('../lib/Potion');

const Player = require('../lib/Player');

// ————————————————————————————————————————————————————————————————————————————————————————


// ⬇︎ TESTS ⬇︎
// ▬▬▬▬▬▬▬▬▬▬▬

// PLAYER TEST
test('creates a player object', () => {
  const player = new Player('Dave');

  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});