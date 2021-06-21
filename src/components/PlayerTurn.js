const PlayerTurn = () => {
    return (<div id="player-turn" className="player-turn" value="1"> 
        <span>Player turn:</span>
        <div className="player-turn__area">
            <div className="player-turn__player player-turn__player-one">1</div>
            <div className="player-turn__player player-turn__player-two">2</div>
        </div> 
        </div>)

}
export default PlayerTurn;