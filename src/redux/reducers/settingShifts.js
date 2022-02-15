import produce from 'immer';

const initialState = {
    institutionId: 1,
    settingName: "NumFreeDaysForEployee",
    settingValueInt: 1,
    settingValueString: null,
    settingValueDate: null,
}
export default produce((state, action) => {
    switch (action.type) {
        case 'SET_SETTING_INSTITUTION_ID':
            state.institutionId = action.payload
            break;
        case 'SET_SETTING_SETTING_NAME':
            state.settingName = action.payload
            break;
        case 'SET_SETTING_SETTING_VALUE_INT':
            state.settingValueInt = action.payload
            break;
        case 'SET_SETTING_SETTING_VALUE_STRING':
            state.settingValueString = action.payload
            break;
        case 'SET_SETTING_SETTING_VALUE_DATE':
            state.settingValueDate = action.payload
            break;
        case 'SET_SETTING':
            state.institutionId= action.payload.institutionId
            state.settingName = action.payload.settingName
            state.settingValueInt = action.payload.settingValueInt
            state.settingValueString = action.payload.settingValueString
            state.settingValueDate = action.payload.settingValueDate
            break;
        default:
            return state;
    }
}, initialState)