import React, { useState } from "react";
import "./Style.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const Game = () => {
  const [flag, setFlag] = useState(true);
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    flag ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setFlag(!flag);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next turn: " + (flag ? "X" : "O");
  }

  return (
    <>
      <div className="parent">
        <div className="status" style={{ fontSize: "30px" }}>
          TIC-TAC-TOE
        </div>
        <div className="status" style={{ fontSize: "15px", color: "#CCC" }}>
          {status}
        </div>
        <div className="main-container">
          <div className="board-row">
            {/* SquareArray.map(handleClick()) // execute */}
            {/* SquareArray.map(handleClick) // func ref */}
            {/* SquareArray.map(()=>{
            ClipboardItem.id===2
            return ;
          }) */}

            {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              return (
                <Square
                  key={index}
                  value={squares[item]}
                  onSquareClick={() => {
                    handleClick(index);
                  }}
                />
              );
            })} */}
            <Square
              value={squares[0]}
              onSquareClick={() => {
                handleClick(0);
              }}
            />
            <Square
              value={squares[1]}
              onSquareClick={() => {
                handleClick(1);
              }}
            />
            <Square
              value={squares[2]}
              onSquareClick={() => {
                handleClick(2);
              }}
            />
          </div>
          <div className="board-row">
            <Square
              value={squares[3]}
              onSquareClick={() => {
                handleClick(3);
              }}
            />
            <Square
              value={squares[4]}
              onSquareClick={() => {
                handleClick(4);
              }}
            />
            <Square
              value={squares[5]}
              onSquareClick={() => {
                handleClick(5);
              }}
            />
          </div>
          <div className="board-row">
            <Square
              value={squares[6]}
              onSquareClick={() => {
                handleClick(6);
              }}
            />
            <Square
              value={squares[7]}
              onSquareClick={() => {
                handleClick(7);
              }}
            />
            <Square
              value={squares[8]}
              onSquareClick={() => {
                handleClick(8);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
