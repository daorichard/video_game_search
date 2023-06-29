// BASE URL
const base_url = 'https://api.rawg.io/api/';

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// current day / month / year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games, sort from last year to this year, sort by rating, get 10 results
const popular_games = `games?&key=${process.env.API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
// upcoming games up to next year
const upcoming_games = `games?&key=${process.env.API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
// new games
const newGames = `games?&key=${process.env.API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const newGamesUrl = () => `${base_url}${newGames}`;
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcoming_gamesUrl = () => `${base_url}${upcoming_games}`;

// GAME DETAILS
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?&key=${process.env.API_KEY}`;

// GAME SCREENSHOTS
export const gameSSUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${process.env.API_KEY}`;
