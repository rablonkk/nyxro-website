'use client';
import React from 'react';

import { fetchClientData } from '../lib/fetch-client-data';
import '../styles/globals.css';

export default function homePage() {
  const [data, setData] = React.useState({});
  (async() => setData(await fetchClientData()))();

  return (
    <>
      <main className="flex flex-col justify-center items-center mt-44">
        <div className="flex justify-center flex-col items-center">
          <span className="font-black text-7xl max-md:text-4xl text-center">
              O Melhor Bot de Música é o
            <h1 style={{
              'background': '-webkit-linear-gradient(100deg, #24292F 20%, #FB029E 100%)',
              'WebkitBackgroundClip': 'text',
              'WebkitTextFillColor': 'transparent',
            }} className="font-black text-9xl max-md:text-6xl">NyxroBot</h1>
          </span>
          <p className="text-center text-xl max-md:text-sm">Um bot desenvolvido para tocar suas músicas favoritas!</p>

          <button className="mt-10 pt-2 pb-2 pr-10 pl-10 bg-[#FB029E] rounded-xl text-white font-semibold">
            <a href="https://discord.com/oauth2/authorize?client_id=1152354301914648636&permissions=274881144832&scope=bot+applications.commands">Adicione ao seu servidor!</a>
          </button>
        </div>
      </main>

      {(data.tracks && data.users && data.guilds) && (
        <ul className="mt-28 mb-10 w-full flex flex-wrap items-center justify-center gap-8">
          <li className="bg-[#F9F9F9] rounded-2xl h-32 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-2xl mb-2">👤 Usuários</h1>
            <p className="text-xl pl-5">+{data.users.toLocaleString()}</p>
          </li>

          <li className="bg-[#F9F9F9] rounded-2xl h-50 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-2xl mb-2">🔥 Músicas em alta</h1>
            {data.tracks.map((el, i) => <p className="text-xl pl-5" key={i}>{i + 1}. {el}</p>)}
          </li>

          <li className="bg-[#F9F9F9] rounded-2xl h-32 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-2xl mb-2">👥 Servidores</h1>
            <p className="text-xl pl-5">+{data.guilds.toLocaleString()}</p>
          </li>
        </ul>
      )}
    </>
  );
}
