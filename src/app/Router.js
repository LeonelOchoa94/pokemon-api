import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Pokecard } from "../pages/PokeCard";

export const Router = () => {
  const [pokemon, setPokemon] = useState("");

  const handleSetPokemon = (pokemon) => {
    setPokemon(pokemon);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/card" element={<Pokecard pokemon={pokemon} />}></Route>
        <Route path="/" element={<HomePage setPokemon={handleSetPokemon} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
