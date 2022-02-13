import produce from 'immer';
const initialState = {
    id:-1,
    firstname: 'Michal',
    lastName: 'Prober',
    password: '0533114285',
    email: 'michalprober@gmail.com',
    phone: '0533114285',
    address: 'chazon hish 60'

}
export default produce((state, action) => {
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
      state.id=action.payload.employeeId
      state.firstname = action.payload.employeeFirstName
      state.lastName = action.payload.employeeLastName
      state.address = action.payload.employeeAddress
      state.phone = action.payload.employeePhone
      state.email = action.payload.employeeEmail
      state.password = action.payload.employeePassword 
      break;
    default:
      return state;
  }
}, initialState)