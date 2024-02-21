'use client';

import '../styles/globals.css';

export default function homePage() {
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-28">
        <div className="flex justify-center flex-col items-center">
          <span className="font-black text-7xl max-md:text-4xl text-center">
              O melhor bot de música é o
            <h1 style={{
              'background': '-webkit-linear-gradient(100deg, #24292F 20%, #FB029E 100%)',
              'WebkitBackgroundClip': 'text',
              'WebkitTextFillColor': 'transparent',
            }} className="font-black text-9xl max-md:text-6xl">Nyxro!</h1>
          </span>
          <p className="text-center mt-6 text-xl max-md:text-1xl">Nyxro é um bot de música criado e desenvolvido para tocar suas músicas favoritas!</p>

          <button className="mt-10 pt-2 pb-2 pr-10 pl-10 bg-[#FB029E] rounded-xl text-white font-semibold">
            <a href="https://discord.com/oauth2/authorize?client_id=1152354301914648636&scope=bot%20applications.commands">Adicionar ao seu servidor</a>
          </button>
        </div>
      </main>

      {(
        <ul className="mt-24 mb-10 w-full flex flex-wrap items-center justify-center gap-8">
          <li className="bg-[#F9F9F9] rounded-2xl h-50 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-xl max-md:text-1xl mb-2 pl-5">Facilidade de Uso</h1>
            <p className="text-xl max-md:text-1xl pl-5">O Nyxro oferece uma experiência simplificada para reprodução de música no Discord, com a sua interface intuitiva.</p>
          </li>

          <li className="bg-[#F9F9F9] rounded-2xl h-50 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-xl max-md:text-1xl mb-2 pl-5">Suporte Multifuncional</h1>
            <p className="text-xl max-md:text-1xl pl-5">Além do suporte ao YouTube e SoundCloud, o Nyxro têm outras funcionalidades, como pesquisa de músicas.</p>
          </li>

          <li className="bg-[#F9F9F9] rounded-2xl h-50 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-xl max-md:text-1xl mb-2 pl-5">Confiabilidade e Estabilidade</h1>
            <p className="text-xl max-md:text-1xl pl-5">Sua infraestrutura robusta permitem que os usuários desfrutem de uma experiência sem interrupções.</p>
          </li>
        </ul>
      )}
    </>
  );
}
