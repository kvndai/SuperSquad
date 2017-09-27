import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharactersById } from '../actions/index';

class CharacterList extends Component {
  render() {
    console.log("this.props charlist", this.props)
    return (
      <div>
        <h2>Characters</h2>
        <ul className="list-group">
          {
            this.props.characters.map(character => {
              return (
                <li key={character.id} className="list-group-item">
                  <div className="list-item">{character.name}</div>
                  <div
                    className="list-item right-button"
                    onClick={() => this.props.addCharactersById(character.id)}
                  >
                    +
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state in charlist', state)
  // State will contain all properties in the state
  //returns whichever property is stated as props. ie, no heroes props avail in charlist component
  return {
    characters: state.characters
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ addCharactersById }, dispatch)
// }

export default connect(mapStateToProps, { addCharactersById })(CharacterList);