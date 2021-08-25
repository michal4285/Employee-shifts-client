import produce from 'immer';
const initialState = {
  firstname: '',
  lastName: '',
  password: '',
  email:'',
  phone:'',
  address:''
}
export default produce((state, action) => {
  debugger;
  switch (action.type) {
    case 'SET_EMPLOYEE_FIRST_NAME':
      state.firstname = action.payload
      break;
    case 'SET_EMPLOYEE_LAST_NAME':
      state.lastName = action.payload
      break;
    case 'SET_EMPLOYEE_PASSWORD':
      state.password = action.payload
      break;
      case 'SET_EMPLOYEE_PHONE':
      state.phone = action.payload
      break;
      case 'SET_EMPLOYEE_ADDRESS':
      state.address = action.payload
      break;
      case 'SET_EMPLOYEE_EMAIL':
      state.email = action.payload
      break;
      case 'SET_EMPLOYEE':
      state.email = action.payload.employeeEmail
      state.password = action.payload.employeePassword
      state.firstname = action.payload.employeeFirstName
      state.lastName = action.payload.employeeLastName
      state.phone = action.payload.employeePhone
      state.address = action.payload.employeeAddress
      break;
    default:
      return state;
  }
}, initialState)