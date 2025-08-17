"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Pokemon = {
  name: string;
  url: string;
};

export default function Home() {
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

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

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
