//クライアントサイドで動作させる
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Pokemon = {
  name: string;
  url: string;
};
//ホーム画面
export default function Home() {
  //APIからポケモン一覧を取得し、保存する。また、検索できるようにする
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setPokemons(data.results);
    }
    fetchData();
  }, []);

  //部分一致検索
  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  /* 
  inputで検索ウィンドウを作成
  div className　で、四角形の枠でそれぞれのポケモンを表示する。
  Link href　で、詳細ページに遷移する。それぞれのIDごとに対応したページへ遷移できる。
  */

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Pokédex (Gen 1)</h1>
      
      <input
        type="text"
        placeholder="ポケモンを検索..."
        className="border p-2 w-full mb-6 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((pokemon, index) => {
          const id = index + 1;
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <Link
              key={pokemon.name}
              href={`/pokemon/${id}`}
              className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg"
            >
              <img src={image} alt={pokemon.name} className="w-20 h-20" />
              <p className="capitalize mt-2">{pokemon.name}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
