import axios from "axios";

const initialState = {
    formData: {
        FirstName: '',
        LastName: '',
        Phone: '',
        Email: ''
    }
};
const formReducer = (state = initialState, action: { type: any; payload: { fieldName: any; value: any; }; }) => {
   console.dir(state)
    switch (action.type) {
        case 'UPDATE_FORM_FIELD':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.fieldName]: action.payload.value
                }
            };
        case 'PUSH_USER':
            axios.post('http://localhost:1337/user-informations', state.formData).then(response => console.dir('Response:', response))
        default:
            return state;
    };
};
export default formReducer;