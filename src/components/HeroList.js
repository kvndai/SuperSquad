import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions/index';


class HeroList extends Component {
  render() {
    console.log("this.props herolist", this.props)
    return (
      <div>
        <h2>Heroes</h2>
        <ul className="list-group">
          {
            this.props.heroes.map((heroes) => {
              return (
                <li key={heroes.id} className="list-group-item">
                  <div className="list-item">{heroes.name}</div>
                  <div 
                    className="list-item right-button"
                    onClick={() => this.props.removeCharacterById(heroes.id)}
                  >
                    X
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
  console.log('state in herolist', state);
  return {
    heroes: state.heroes
  }
}


export default connect(mapStateToProps,{ removeCharacterById })(HeroList);