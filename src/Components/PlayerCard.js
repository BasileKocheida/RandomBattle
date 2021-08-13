import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ButtonMana from './ButtonMana';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return { 
        players: state.players,
        ownProps: ownProps
    }
  };


const playerCardConnect = ({ players, ownProps }) => {
  
  
    return(
        <div key={ownProps.player.id} className="col-sm-3 card center" id={`joueur${ownProps.player.id}`}>

            <div className="card-body text-center">
                <h5 className="card-title">{ownProps.player.name}</h5>
                <span className="title-name">{ownProps.player.image}</span>
                <ProgressBar pv={ownProps.player.pv} pvMax={ownProps.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={ownProps.player.mana} pvMax={ownProps.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    <div >
                        <ButtonCapacity player={ownProps.player} />
                        <ButtonMana player={ownProps.player} />
           
                    </div>
                </div >
            </div >

        </div >
    )
}
  
  
  const PlayerCard = connect(mapStateToProps)(playerCardConnect);
  

export default PlayerCard;