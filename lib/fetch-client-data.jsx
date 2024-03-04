import axios from 'axios';

export const fetchClientData = async() => {
  const guildsResult = await axios.get('https://api.nyxrobot.site/guilds');
  const topTracksResult = await axios.get('https://api.nyxrobot.site/top-tracks');
  const usersResult = await axios.get('https://api.nyxrobot.site/users');

  return {
    guilds: guildsResult.data.guilds,
    tracks: topTracksResult.data.tracks,
    users: usersResult.data.users,
  };
};
