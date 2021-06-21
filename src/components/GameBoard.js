import Field from "./Field"

const GameBoard = () => {

    const board = Array(3).fill(0).map(
        () => new Array(3).fill(0)
    )

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j]= <Field value="0" row={i} column={j} />
        }
    }

    return (
        <div id= "game-board" className= "game-board player-turn-one">
            
            {board.map((row, index) => {
                return (
                    <div className="game-board-row" key={index}>
                        {row.map((fields, sIndex) => {
                            return <div className="game-board-field" key={sIndex}>{fields}</div>
                        })}
                    </div>
                )
            })}
        </div> 
        
    )
}

export default GameBoard;