import axios from "axios";

export async function postTG(state, val) {
  try {
    const response = await axios.post(
      "http://79.137.194.169:3001/api/duplicateContact",
      val
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}
