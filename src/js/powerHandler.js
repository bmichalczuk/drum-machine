import getState, {switchPower} from "./state";
import setScreenStatus from "./setScreenStatus";

const powerHandler = (event) => {
    switchPower();
    getState().power === false && setScreenStatus("");
};

export default powerHandler;