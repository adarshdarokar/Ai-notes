import axios from "axios";
import { serverUrl } from "../App.jsx";
import { setUserData } from "../redux/userSlice";

/* ================= GET CURRENT USER ================= */

export const getCurrentUser = async (dispatch) => {
  try {
    const result = await axios.get(
      serverUrl + "/api/user/currentuser",
      { withCredentials: true }
    );

    console.log("Current User:", result.data);

    dispatch(setUserData(result.data));
  } catch (error) {
    console.log("Get Current User Error:", error);
  }
};

/* ================= GENERATE NOTES ================= */

export const generateNotes = async (payload) => {
  try {
    const result = await axios.post(
      serverUrl + "/api/notes/generate-notes",
      payload,
      { withCredentials: true }
    );

    console.log("Generate Notes Response:", result.data);

    return result.data; // ✅ VERY IMPORTANT (this fixes your error)
  } catch (error) {
    console.log("Generate Notes Error:", error);
    throw error; // ✅ so frontend catch works
  }
};