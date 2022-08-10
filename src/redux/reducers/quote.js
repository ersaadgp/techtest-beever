const initState = { quote: "Lorem", quotes: [], myQuotes: [] };

const quoteReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, quote: action.payload };
    }
    case "ADD_DATA": {
      return { ...state, quotes: [...state.quotes, action.payload] };
    }
    case "ADD_MY_QOUTES": {
      return { ...state, myQuotes: [...state.myQuotes, action.payload] };
    }
    default:
      return state;
  }
};

export default quoteReducer;
