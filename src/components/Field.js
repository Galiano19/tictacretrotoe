const Field = (props) => {
    const { value, row, column } = props;

    function updateField(e) {
        e.preventDefault();

        if (e.target.getAttribute("value") === "0") {
            const player = document.getElementById("player-turn")
            const board = document.getElementById("game-board")

            if (player.getAttribute("value") === "1") {
                e.target.setAttribute("value", "1")
                player.setAttribute("value", "2")
                board.classList.remove("player-turn-one")
                board.classList.add("player-turn-two")
            } else {
                e.target.setAttribute("value", "2")
                player.setAttribute("value", "1")
                board.classList.remove("player-turn-two")
                board.classList.add("player-turn-one")
            }

        };

        if(checkGameStatus(e.target)){
            const board = document.getElementById("game-board")
            const winnerArea = document.getElementById("player-winner")
            const winner = e.target.getAttribute("value")
            const player = document.getElementById("player-turn")

            player.setAttribute("value", winner)   
            board.classList.add("game-finished")
            board.classList.add("game-ended")
            winnerArea.innerHTML= "Winner Player "+ winner
            winnerArea.classList.remove("player-two__winner")
            winnerArea.classList.remove("player-winner")
            if (winner === "2") {
                winnerArea.classList.add("player-two__winner")
                winnerArea.classList.add("player-winner")
            } else {
                winnerArea.classList.add("player-one__winner")
                winnerArea.classList.add("player-winner")
            }
            

            document.getElementById("btn__open-menu").click()

        }
    }

    function checkGameStatus(lastField) {
        let fieldValue= lastField.getAttribute("value")
        let fieldRow= lastField.getAttribute("row")
        let fieldColumn= lastField.getAttribute("column")
        let ticTacToe = true

        if (!checkRow(fieldValue, fieldRow)){
            if (!checkColumn(fieldValue, fieldColumn)){
                    if(!checkDiagonal(fieldValue)){
                        ticTacToe = false
                    }
            }
        }

        function checkRow(v,r) {
            let bingo = true
            let i=0
            let item
            while (bingo && i<3) {
                item = document.querySelector(`[row="${r}"][column="${i}"]`);
                if (item.getAttribute("value") != v) {
                    bingo = false
                }
                i++
            }
            return bingo
        }

        function checkColumn(v,c) {
            let bingo = true
            let i=0
            let item
            while (bingo && i<3) {
                item = document.querySelector(`[row="${i}"][column="${c}"]`);
                if (item.getAttribute("value") != v) {
                    bingo = false
                }
                i++
            }
            return bingo
        }

        function checkDiagonal(v) {
            let bingo = true
            let bingoLeft = true
            let bingoRight = true
            let i=0
            let j=0
            let item

            while (bingoLeft && i<3) {
                item = document.querySelector(`[row="${i}"][column="${j}"]`);
                if (item.getAttribute("value") != v) {
                    bingoLeft = false
                }
                i++
                j++
            }

            i = 0
            j = 2
            while (bingoRight && j>=0) {
                item = document.querySelector(`[row="${i}"][column="${j}"]`);
                if (item.getAttribute("value") != v) {
                    bingoRight = false
                }
                i++
                --j
            }

            if(!bingoLeft && !bingoRight){
                bingo = false
            }
            
            return bingo
        }

        return ticTacToe
    }

    
    return (
    <div 
        role="button"
        tabIndex={0}
        className="game-board--field__score"
        value={value}
        row={row}
        column = {column}
        onClick = {updateField} 
        onKeyPress={updateField}
    ></div> 
    )
}



export default Field