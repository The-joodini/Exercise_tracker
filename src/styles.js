import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f7f4;
    color: #1a1a1a;
    font-family: Arial, sans-serif;
    text-align: center;
  }

  button {
    background-color:rgb(129, 227, 99);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }

  button:hover {
    background-color: #2c944a;
  }

  .app-container {
    padding: 20px;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .exercise-screen {
    margin-top: 20px;
  }

  .timer {
    font-size: 2rem;
    font-weight: bold;
    color:rgb(129, 227, 99);
    background: #1a1a1a;
    padding: 10px 20px;
    border-radius: 8px;
    display: inline-block;
    margin: 10px 0;
  }
`;