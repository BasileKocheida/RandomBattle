import React from 'react';
import PlayerCard from './PlayerCard';
import { connect } from 'react-redux';
import { resetTurn , hitMonster, hitBack } from '../actions/index'
const mapStateToProps = (state) => {
    return { 
        players: state.players,
        countPlayerTurn: state.countPlayerTurn,
        monster: state.monster
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      hit: (payload) => dispatch(hitMonster(payload)),
      monsterHit: (payload) => dispatch(hitBack(payload)),
      resetTurn: (reset) => dispatch(resetTurn(reset)),

    }
}
const PlayerListConnect = ({ players, hit, monsterHit , resetTurn, countPlayerTurn }) => {
        
    const displayPlayers = () => {
    
    
        //your code 
        return Object.keys(players).map(key => (
            <PlayerCard key={players[key].id} player={players[key]} />
        ));
    }

    return (
    //the render
        <div className='row'>
            {displayPlayers()}
        </div>
    );
}


    const PlayerList = connect(mapStateToProps,mapDispatchToProps)(PlayerListConnect);

export default PlayerList;