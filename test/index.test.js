// test/index.test.js

const {
  gameObject,
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon
} = require('../index.js');

describe('NBA Game Object Lab', () => {

  // ---------- gameObject ----------
  test('gameObject returns an object with home and away', () => {
    const game = gameObject();
    expect(game).toHaveProperty('home');
    expect(game).toHaveProperty('away');
  });

  // ---------- Player Info ----------
  test('numPointsScored returns correct points', () => {
    expect(numPointsScored("Alan Anderson")).toBe(22);
    expect(numPointsScored("Ben Gordon")).toBe(33);
  });

  test('shoeSize returns correct shoe size', () => {
    expect(shoeSize("Mason Plumlee")).toBe(19);
    expect(shoeSize("Reggie Evans")).toBe(14);
  });

  // ---------- Team Info ----------
  test('teamColors returns correct team colors', () => {
    expect(teamColors("Brooklyn Nets")).toEqual(["Black", "White"]);
    expect(teamColors("Charlotte Hornets")).toEqual(["Turquoise", "Purple"]);
  });

  test('teamNames returns an array of both teams', () => {
    expect(teamNames()).toEqual(["Brooklyn Nets", "Charlotte Hornets"]);
  });

  // ---------- Player Numbers and Stats ----------
  test('playerNumbers returns jersey numbers for a team', () => {
    expect(playerNumbers("Brooklyn Nets")).toEqual([0, 30, 11, 1, 31]);
    expect(playerNumbers("Charlotte Hornets")).toEqual([4, 0, 2, 8, 33]);
  });

  test('playerStats returns correct stats object', () => {
    expect(playerStats("Alan Anderson")).toEqual({
      number: 0, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1, shoe: 16
    });
    expect(playerStats("Ben Gordon")).toEqual({
      number: 8, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0, shoe: 15
    });
  });

  // ---------- Advanced Challenge ----------
  test('bigShoeRebounds returns rebounds of player with largest shoe', () => {
    expect(bigShoeRebounds()).toBe(12); // Mason Plumlee has shoe 19, rebounds 12
  });

  // ---------- Bonus ----------
  test('mostPointsScored returns the player with highest points', () => {
    expect(mostPointsScored()).toBe("Ben Gordon");
  });

  test('winningTeam returns the team with most total points', () => {
    expect(winningTeam()).toBe("Brooklyn Nets"); // matches your current gameObject totals
  });

  test('playerWithLongestName returns the longest name', () => {
    expect(playerWithLongestName()).toBe("Bismack Biyombo");
  });

  test('doesLongNameStealATon returns true if longest name has most steals', () => {
    expect(doesLongNameStealATon()).toBe(true); // Bismack Biyombo has 22 steals, the most
  });

});
