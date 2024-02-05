import axios from "axios";

export async function postTG(state, val) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/duplicateContact",
      val
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}
