export const updateFormField = (fieldName: any, value: any) => ({
    type: 'UPDATE_FORM_FIELD',
    payload: {
        fieldName, value
    }
});
export const pushUser = () => ({
    type: 'PUSH_USER',
});