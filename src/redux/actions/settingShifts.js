export function setSettingInstitutionId(institutionId) {

    return {
        type: 'SET_SETTING_INSTITUTION_ID',
        payload: institutionId,

    };
}
export function setSettingName(settingName) {

    return {
        type: 'SET_SETTING_SETTING_NAME',
        payload: settingName,
        
    };
}
export function setSettingValueInt(settingValueInt) {

    return {
        type: 'SET_SETTING_SETTING_VALUE_INT',
        payload: settingValueInt,

    };
}
export function setSettingValueString(settingValueString) {

    return {
        type: 'SET_SETTING_SETTING_VALUE_STRING',
        payload: settingValueString,

    };
}
export function setSettingValueDate(settingValueDate) {

    return {
        type: 'SET_SETTING_SETTING_VALUE_DATE',
        payload: settingValueDate,

    };
}
export function setSetting(settingShifts) {

    return {
        type: 'SET_SETTING',
        payload: settingShifts,

    };
}
 