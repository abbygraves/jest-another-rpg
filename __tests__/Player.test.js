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


// GETSTATS() TEST
test("gets player's stats as an object", () => {
  const player = new Player('Dave');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');
});


// GETINVENTORY() TEST
test('gets inventory from player or returns false', () => {
  const player = new Player('Dave');

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});


// GETHEATH() TEST —— TEST TO GET INFO ABOUT THE PLAYER'S HEALTH
test("gets player's health value", () => {
  const player = new Player('Dave');

  expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});


// ISALIVE() TEST —— TEST TO CHECK IF THE PLAYER IS ALIVE
test('checks if player is alive or not', () => {
  const player = new Player('Dave');

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});


// REDUCEHEALTH() TEST —— TEST TO CHECK IF CORRECT AMOUNT OF HEALTH IS BEING SUBTRACTED FROM THE PLAYER HEALTH PROPERTY
test("subtracts from player's health", () => {
  const player = new Player('Dave');
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});