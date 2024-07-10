import axios from 'axios';

export const fetchClientData = async() => {
  const guildsResult = await axios.get('https://api.nyxrobot.site/guilds', { timeout: 20000 });
  const topTracksResult = await axios.get('https://api.nyxrobot.site/top-tracks', { timeout: 20000 });
  const usersResult = await axios.get('https://api.nyxrobot.site/users', { timeout: 20000 });

  return {
    guilds: guildsResult.data.guilds,
    tracks: topTracksResult.data.tracks,
    users: usersResult.data.users,
  };
};
