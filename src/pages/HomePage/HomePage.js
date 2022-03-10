import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

export const HomePage = ({ setPokemon }) => {
  const [input, setInput] = useState("");

  const history = useNavigate();

  const handleSearchClick = () => {
    setPokemon(input);
    history("/card");
  };

  const handleSearch = (event) => {
    setInput(event.target.value);
  };

  return (
    <Home>
      <Wrapper>
        <Logo src="https://gamersrd.com/wp-content/uploads/2020/11/Pokemon-Logo.png" alt="Imagen Pokemon" />
        <form>
          <InputSearch value={input} onChange={handleSearch} type="search" />
          <ButtonWrapper>
            <button onClick={handleSearchClick}>Buscar</button>
            <button>Azar</button>
          </ButtonWrapper>
        </form>
      </Wrapper>
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 600px;
  height: 300px;
`;

const ButtonWrapper = styled.div`
  flex-direction: row;
  gap: 100px;
  button {
    border-radius: 5px;
    border: none;
    padding: 5px;
    font-size: 20px;
    background-color: #cca300;
    transition: all 0.5s;
    font-weight: bold;

    &:hover {
      background-color: #2e83f7;
    }

    &:first-child {
      width: 70%;
      margin-right: 10px;
    }
    &:last-child {
      width: 28%;
    }
  }
`;

const InputSearch = styled.input`
  width: 500px;
  height: 35px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  font-size: 20px;
  background-color: #d9d9d9;
`;
