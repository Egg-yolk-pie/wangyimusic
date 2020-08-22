import {GET_BANNERLIST} from "../constants/home";

const initHome = []
function home(prevState = initHome, action) {
  switch (action.type) {
    case GET_BANNERLIST:
      return action.data;
    default:
      return prevState;
  }
}
export default home;
