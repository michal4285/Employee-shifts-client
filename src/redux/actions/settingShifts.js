export function setnumfreedaysforeployee(numfreedaysforeployee) {

    return {
        type: 'SET_NUM_FREE_DAYS_FOR_EMPLOYEE',
        payload: numfreedaysforeployee,

    };
}
export function setnumshiftsforemployee(numshiftsforemployee) {

    return {
        type: 'SET_NUM_SHIFTS_FOR_EMPLOYEE',
        payload: numshiftsforemployee,
        
    };
}
export function setnummissingemployeesinday(nummissingemployeesinda) {

    return {
        type: 'SET_MISSING_EMPLOYEES_IN_DAY',
        payload: nummissingemployeesinda,

    };
}
export function setnummissingemployeesinShift(nummissingemployeesinShift) {

    return {
        type: 'SET_NUM_MISSING_EMPLOYEES_IN_SHIFT',
        payload: nummissingemployeesinShift,

    };
}
export function setnumemployees(numemployees) {

    return {
        type: 'SET_NUM_EMPLOYEES',
        payload: numemployees,

    };
}
export function setdayofchangeshifts(dayofchangeshifts) {

    return {
        type: 'DAY_OF_CHANGE_SHIFTS',
        payload: dayofchangeshifts,

    };
}
 