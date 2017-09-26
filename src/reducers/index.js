import characters_json from '../data/characters.json';

const characters = (state = characters_json, action) => {
  switch (action.type) {
    // case ACTION_TYPE_1:
    //   return state
    // case ACTION_TYPE_2:
    //   return state
    default:
      return state
  }
}

export default characters;