import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Pokecard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => response.json().then((data) => setPokemonData(data)));
  }, []);

  return (
    <Home>
      <Card>
        <Circle>
          {pokemonData && (
            <Pokemon>
              <Image src={pokemonData.sprites.front_default} alt="Imagen" />
            </Pokemon>
          )}
        </Circle>
        <Name>{pokemonData.name}</Name>
      </Card>
    </Home>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #15181e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Pokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 200px;
`;

const Name = styled.h3`
  font-size: 30px;
  color: black;
  margin-top: 35px;
  text-transform: uppercase;
`;

const Circle = styled.div`
  justify-content: center;
  width: 40%;
  background-color: white;
  border-radius: 50%;
  margin-top: 40px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 25vw;
  height: 50vh;
  background-color: #e1e2e1;
  border-radius: 20px;
`;

const Type = styled.h3`
  font-size: 30px;
  color: black;
  margin-top: 35px;
  text-transform: uppercase;
`;
