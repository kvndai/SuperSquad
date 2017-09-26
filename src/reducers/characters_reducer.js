import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from '../actions/index';

const characters = (state = characters_json, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id)
      return characters
    // case ACTION_TYPE_2:
    //   return state
    default:
      return state
  }
}

export default characters;