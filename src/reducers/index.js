const initialState = {
    //TODO : complete players {} and monster{}
    players: {
        1: { name: "Elea", pv: 10, pvMax: 100, mana: 30, manaMax: 30, id: 1, played: false, image: <img src="/elea.jpg" /> },
        2: { name: "Jean", pv: 10, pvMax: 100, mana: 30, manaMax: 30, id: 2, played: false, image: <img src="/jean.jpg" /> },
        3: { name: "Julien", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, played: false, image: <img src="/julien.jpg" /> },
        4: { name: "Max", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, played: false, image: <img src="/maxime.jpg" /> }
    },

    monster: { name: "La GUEURNOUILLE", pv:800, pvMax:800},

    countPlayerTurn: 1,

    buttons: {  }

};


const rootReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case 'HIT_MONSTER':
            newState = {
                ...state,
                monster: { ...state.monster, pv: state.monster.pv + action.payload.damage 
                },
                
                players: { ...state.players,
                            [action.payload.playerId] : {
                                ...state.players[action.payload.playerId],
                                played: !state.players[action.payload.playerId].played
                            },
                        },
                countPlayerTurn: state.countPlayerTurn +1
            }
            return newState
          
        case 'HIT_BACK':
            newState = {
                ...state,
                players: { 
                    ...state.players,
                    [action.payload.playerId] : {
                        ...state.players[action.payload.playerId],
                        pv: state.players[action.payload.playerId].pv + action.payload.damage
                    }
                }
            }
            return newState


        case 'RESET_TURN':
            newState = {
                ...state,
                players: { 
                    ...state.players,
                    [action.reset.player.id] : {
                        ...state.players[action.reset.player.id],
                        played: false
                    },
                },

                countPlayerTurn: 1
            }
            return newState

        case 'MANA_HIT':
            newState = {
                ...state,
                monster: { ...state.monster, pv: state.monster.pv + action.payload.damage 
                },
                
                players: { ...state.players,
                    [action.payload.playerId] : {
                        ...state.players[action.payload.playerId],
                        played: !state.players[action.payload.playerId].played,
                        mana: state.players[action.payload.playerId].mana + action.payload.minusMana,
                            },
                        },
                countPlayerTurn: state.countPlayerTurn +1
            }
            return newState

        default: 
            return state;
    };

     

}

   
  export default rootReducer;
  