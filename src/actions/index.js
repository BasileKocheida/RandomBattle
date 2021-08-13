export function hitMonster(payload) {
    return { type: "HIT_MONSTER", payload }
  };

export function hitBack(payload) {
  return { type: "HIT_BACK", payload }
};

export function resetTurn(reset) {
  return { type: "RESET_TURN", reset }
};

export function hitHard(payload) {
  return { type: "MANA_HIT", payload }
};