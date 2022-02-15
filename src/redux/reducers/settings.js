import produce from 'immer';
const initialState = {
 exit:true
}
export default produce((state, action) => {
  switch (action.type) {
    case 'SET_EXIT':
      state.exit= action.payload
      break;
    default:
      return state;
  }
}, initialState)
