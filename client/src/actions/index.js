import axios from "axios";
import { FETCH_USER } from "./type";

const fetchUser = () => dispatch => {
  axios.get("/api/profile").then(res =>
    dispatch({
      type: FETCH_USER,
      user: res.data
    })
  );
};

export { fetchUser };
