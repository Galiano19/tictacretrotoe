const Menu = () =>{

    function restartGame() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let field = document.querySelector(`[row="${i}"][column="${j}"]`)
                field.setAttribute("value", "0")
                
            }
        }
        const player = document.getElementById("player-turn")
        const board = document.getElementById("game-board")
        const winnerArea = document.getElementById("player-winner")

        player.setAttribute("value", "1")
        board.classList.remove("game-finished")
        winnerArea.innerHTML= ""

        board.classList.remove("player-turn-two")
        board.classList.remove("game-ended")
        board.classList.add("player-turn-one")
        closeMenu()
        
    }

    function openMenu() {
        const menu = document.getElementById("menu-area")
        const board = document.getElementById("game-board")
        menu.classList.remove("hidden")
        board.classList.add("game-finished")
    }

    function closeMenu() {
        const menu = document.getElementById("menu-area")
        const board = document.getElementById("game-board")
        menu.classList.add("hidden")
        board.classList.remove("game-finished")
    }

    return (
        <div>
            <button 
                id="btn__open-menu"
                className="btn btn__open-menu"
                onClick={openMenu}
            >Menu</button>
            <div id="menu-area" className="menu-area hidden">
                <button 
                    className="btn btn__close-menu"
                    onClick={closeMenu}
                >X</button>
                <div className="info-wrapper">
                    <span id="player-winner" className=""></span>
                    <button 
                        id="btn__restart"
                        className="btn btn__restart"
                        onClick={restartGame}
                    >Restart</button>
                </div> 
            </div>
        </div>
    )
} 
export default Menu