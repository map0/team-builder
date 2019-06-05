import * as actionTypes from "./actions";

const initialState = {
  counterparts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COUNTERPART:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        yearsExperience: action.personData.yearsExperience,
        counterpartTeam: action.personData.counterpartTeam
      };
      return {
        ...state,
        counterparts: state.counterparts.concat(newPerson)
      };
    case actionTypes.REMOVE_COUNTERPART:
      return {
        ...state,
        counterparts: state.counterparts.filter(
          person => person.id !== action.personId
        )
      };
    default:
      return state;
  }
};

export default reducer;
