import React from 'react';
import { connect } from 'react-redux';
import { hitMonster } from '../actions/index'
import { hitBack } from '../actions/index'
import { resetTurn } from '../actions/index'
import { getRandomPlayer } from "./function"

const mapStateToProps = (state, ownProps) => {
    return  {
        player: ownProps.player,
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

const ButtonCapacityConnect = ({player, hit, monsterHit, players, resetTurn, countPlayerTurn, monster}) => {

    const combat = () => {
        hit({damage: -5, playerId: player.id})
        console.log('aie !');
        let rndInt = getRandomPlayer(players)
        while (players[rndInt].pv <= 0 ) {
            rndInt =   getRandomPlayer(players)
            console.log(rndInt);
        }
        
        monsterHit({damage: -5, playerId: rndInt })
        console.log('Tiens prends ça !')

        let playerInLife = Object.keys(players).filter((index)=>{
            if (players[index].pv > 0) {
                return players[index]
            }
        });
        console.log(countPlayerTurn);
        console.log(playerInLife.length);

        if(countPlayerTurn  >= playerInLife.length){
            playerInLife.forEach((player)=> {
              
                resetTurn({player: players[player]})
            })
            monsterHit({damage: -5, playerId: rndInt })
        }

    }

 

    function disableButton(){
        if(player.played || player.pv <= 0){
            return true
        }else{
            return false
        }
    }

    return (
            <button type="button" disabled={disableButton()} onClick={ () => combat() } className="btn btn-danger material-tooltip-main ">
                    hit
                <i className="fas fa-bomb"></i> 5
                <i className="fas fa-fire-alt"></i> - 5
            </button>
            )

}
   
 

const ButtonCapacity = connect(mapStateToProps, mapDispatchToProps)( ButtonCapacityConnect);

export default ButtonCapacity;