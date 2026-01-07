// index.js

// ---------- Placeholder gameObject function ----------
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": { number: 0, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1, shoe: 16 },
        "Reggie Evans": { number: 30, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7, shoe: 14 },
        "Brook Lopez": { number: 11, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15, shoe: 17 },
        "Mason Plumlee": { number: 1, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5, shoe: 19 },
        "Jason Terry": { number: 31, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1, shoe: 15 }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": { number: 4, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2, shoe: 18 },
        "Bismack Biyombo": { number: 0, points: 12, rebounds: 4, assists: 7, steals: 22, blocks: 15, slamDunks: 10, shoe: 16 },
        "DeSagna Diop": { number: 2, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5, shoe: 14 },
        "Ben Gordon": { number: 8, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0, shoe: 15 },
        "Kemba Walker": { number: 33, points: 6, rebounds: 12, assists: 12, steals: 7, blocks: 5, slamDunks: 12, shoe: 15 }
      }
    }
  };
}

// ---------- 3.1 Player Information ----------
function numPointsScored(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].players[playerName]) {
      return game[teamKey].players[playerName].points;
    }
  }
  return null;
}

function shoeSize(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].players[playerName]) {
      return game[teamKey].players[playerName].shoe;
    }
  }
  return null;
}

// ---------- 3.2 Team Information ----------
function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return game[teamKey].colors;
    }
  }
  return [];
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// ---------- 3.3 Player Numbers and Stats ----------
function playerNumbers(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return Object.values(game[teamKey].players).map(player => player.number);
    }
  }
  return [];
}

function playerStats(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].players[playerName]) {
      return game[teamKey].players[playerName];
    }
  }
  return null;
}

// ---------- 3.4 Advanced Challenge ----------
function bigShoeRebounds() {
  const game = gameObject();
  let maxShoe = 0;
  let rebounds = 0;

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (players[player].shoe > maxShoe) {
        maxShoe = players[player].shoe;
        rebounds = players[player].rebounds;
      }
    }
  }

  return rebounds;
}

// ---------- Bonus Functions ----------
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let teamKey in game) {
    for (let player in game[teamKey].players) {
      if (game[teamKey].players[player].points > maxPoints) {
        maxPoints = game[teamKey].players[player].points;
        topPlayer = player;
      }
    }
  }

  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  const homePoints = Object.values(game.home.players).reduce((sum, p) => sum + p.points, 0);
  const awayPoints = Object.values(game.away.players).reduce((sum, p) => sum + p.points, 0);

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const game = gameObject();
  let longest = "";

  for (let teamKey in game) {
    for (let player in game[teamKey].players) {
      if (player.length > longest.length) {
        longest = player;
      }
    }
  }

  return longest;
}

function doesLongNameStealATon() {
  const game = gameObject();
  const longestNamePlayer = playerWithLongestName();
  let maxSteals = 0;

  for (let teamKey in game) {
    for (let player in game[teamKey].players) {
      if (game[teamKey].players[player].steals > maxSteals) {
        maxSteals = game[teamKey].players[player].steals;
      }
    }
  }

  return game.home.players[longestNamePlayer]?.steals === maxSteals ||
         game.away.players[longestNamePlayer]?.steals === maxSteals;
}

// ---------- Export functions for testing ----------
module.exports = {
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
};
