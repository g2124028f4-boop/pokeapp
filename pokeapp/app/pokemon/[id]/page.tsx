import Link from "next/link";

type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
};

async function getPokemon(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
}

export default async function PokemonPage({ params }: { params: { id: string } }) {
  const pokemon: PokemonDetail = await getPokemon(params.id);

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mb-4 w-32 h-32"
      />

      <table className="table-auto border-collapse border border-gray-300 w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2">ID</td>
            <td className="border px-4 py-2">{pokemon.id}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Height</td>
            <td className="border px-4 py-2">{pokemon.height}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Weight</td>
            <td className="border px-4 py-2">{pokemon.weight}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Types</td>
            <td className="border px-4 py-2">
              {pokemon.types.map((t) => t.type.name).join(", ")}
            </td>
          </tr>
        </tbody>
      </table>

      <Link
        href="/"
        className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded"
      >
        ← 戻る
      </Link>
    </main>
  );
}
