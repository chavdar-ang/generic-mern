import { addAlert } from "../alerts";

const alerter = ({ dispatch }) => next => action => {
    if (action.type === 'alert') {
        dispatch(addAlert({ message: action.payload.message, alertType: action.payload.alertType }));
    }
    next(action);
};

export default alerter;