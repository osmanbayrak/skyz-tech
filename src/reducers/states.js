import { GET_DATA, UPDATE_DATA, DELETE_DATA, ADD_DATA } from '../actions/actionTypes';

const initialDatas = {
  data: [],
  count: 0,
  loading: true,
};

function datas(state = initialDatas, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return Object.assign({}, state, {
        data: state.data.map(item => (item.id === action.payload.id ? action.payload : item)),
      });
    case ADD_DATA:
      return Object.assign({}, state, { data: [...state.data, action.payload] });
    case DELETE_DATA:
      return Object.assign({}, state, {
        data: state.data.filter(item => item.id !== action.payload),
      });
    case GET_DATA:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}

export { datas };
