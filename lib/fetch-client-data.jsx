import axios from 'axios';

export const fetchClientData = async() => {
  const guildsResult = await axios.get('https://api.nyxrobot.site/guilds', { params: { per_page: 10 } });
  const topTracksResult = await axios.get('https://api.nyxrobot.site/top-tracks', { params: { per_page: 10 } });
  const usersResult = await axios.get('https://api.nyxrobot.site/users', { params: { per_page: 10 } });

  return {
    guilds: guildsResult.data.guilds,
    tracks: topTracksResult.data.tracks,
    users: usersResult.data.users,
  };
};
