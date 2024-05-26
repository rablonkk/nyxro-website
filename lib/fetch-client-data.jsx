import axios from 'axios';

export const fetchClientData = async() => {
  const guildsResult = await axios.get('https://nyxro.squareweb.app/guilds');
  const topTracksResult = await axios.get('https://nyxro.squareweb.app/top-tracks');
  const usersResult = await axios.get('https://nyxro.squareweb.app/users');

  return {
    guilds: guildsResult.data.guilds,
    tracks: topTracksResult.data.tracks,
    users: usersResult.data.users,
  };
};
