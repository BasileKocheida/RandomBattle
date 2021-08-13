import React from 'react';
import { connect } from 'react-redux';
import { hitHard } from '../actions/index'
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
      hitHard: (payload) => dispatch(hitHard(payload)),
      monsterHit: (payload) => dispatch(hitBack(payload)),
      resetTurn: (reset) => dispatch(resetTurn(reset)),

    }
}

const ButtonManaConnect = ({player, hitHard, monsterHit, players, resetTurn, countPlayerTurn, monster}) => {

    const manaHit = () => {
        hitHard({damage: -60, minusMana: -20, playerId: player.id})
        console.log('KING KONG PUNCH !');
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
            <button type="button" disabled={disableButton()} onClick={ () => manaHit() } className="btn btn-primary m-2 material-tooltip-main ">
                    hit
                <i className="fas fa-bomb"></i> 60 
                <i className="fas fa-fire-alt"></i> - 20 mana
            </button>
            )

}
   
 

const ButtonMana = connect(mapStateToProps, mapDispatchToProps)( ButtonManaConnect);

export default ButtonMana;