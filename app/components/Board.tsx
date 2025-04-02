import React from "react";

import Square from "./Square";

interface BoardProps {
  xIsNext: boolean;
  // `squares` is an array of values, where each value can be either a string or null.
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

function calculateWinner(squares: (string | null)[]) {
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

  const linesLength = lines.length;

  for (let i = 0; i < linesLength; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    console.log("handleClick called with index: ", i);

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = [...squares];

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  let squareIndex = -1;

  const boardJSX = Array(3)
    .fill(null)
    .map((_item, index) => (
      <div key={index} className="board-row">
        {Array(3)
          .fill(null)
          .map(() => {
            const currentIndex = ++squareIndex;

            return (
              <Square
                key={currentIndex}
                value={squares[currentIndex]}
                onSquareClick={() => handleClick(currentIndex)}
              />
            );
          })}
      </div>
    ));

  return (
    <>
      <div className="status">{status}</div>
      {boardJSX}
    </>
  );
}
