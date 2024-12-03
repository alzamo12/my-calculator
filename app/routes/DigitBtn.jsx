import { ACTIONS } from "./calculator";

const DigitBtn = ({ dispatch, digit }) => {
    return (
        <button onClick={() => dispatch({
            type: ACTIONS.ADD_DIGIT,
            payload: { digit }
        })}>
            {digit}</button>
    );
};

export default DigitBtn;