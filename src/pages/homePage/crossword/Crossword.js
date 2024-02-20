import React from 'react';
import "./Crossword.css";

const Crossword = () => {

    let squareList = [];
    for (let i = 0; i < 8; i++) {
        squareList = [...squareList, []]
        for (let j = 0; j < 10; j++) {
            squareList[squareList.length - 1] = [...squareList[squareList.length - 1], j]
        }
    }
    return (
        <div className="crossword-container">
            {squareList.map((row, index) =>
                <div className="crossword-row" key={index}>
                    {
                        row.map((square) =>
                            <div className="square" key={square}/>
                        )
                    }
                </div>
            )
            }
        </div>
    )
};

export default Crossword;