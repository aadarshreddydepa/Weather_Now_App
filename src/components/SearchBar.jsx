import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full max-w-md items-center"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name..."
        className="flex-grow p-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
      <button
        type="submit"
        className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
      >
        Search
      </button>
    </form>
  );
}
