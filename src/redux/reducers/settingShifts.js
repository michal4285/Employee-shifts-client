import produce from 'immer';

const initialState = {
    NumFreeDaysForEployee:1,
    NumShiftsForEmployee:2,
    NumMissingEmployeesInDay:3,
    NumMissingEmployeesInShift:4,
    NumEmployees:5,
    DayOfChangeShifts:4
}
export default produce((state, action) => {
    switch (action.type) {
        case 'SET_NUM_FREE_DAYS_FOR_EMPLOYEE':
            state.NumFreeDaysForEployee = action.payload
            break;
        case 'SET_NUM_SHIFTS_FOR_EMPLOYEE':
            state.NumShiftsForEmployee = action.payload
            break;
        case 'SET_MISSING_EMPLOYEES_IN_DAY':
            state.NumMissingEmployeesInDay = action.payload
            break;
        case 'SET_NUM_MISSING_EMPLOYEES_IN_SHIFT':
            state.NumMissingEmployeesInShift = action.payload
            break;
        case 'SET_NUM_EMPLOYEES':
            state.NumEmployees = action.payload
            break;
        case 'DAY_OF_CHANGE_SHIFTS':
            state.DayOfChangeShifts= action.payload.institutionId
            break;
        default:
            return state;
    }
}, initialState)