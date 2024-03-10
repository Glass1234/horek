import axios from "axios";

export async function postTG(state, val) {
  try {
    const response = await axios.post(
      "https://horek.design/api/duplicateContact",
      val
    );
    return response;
  } catch (error) {
    return error;
  }
}
