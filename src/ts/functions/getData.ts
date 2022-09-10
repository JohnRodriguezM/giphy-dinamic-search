import { GET_DATA_INTERFACE } from "../types.servies";

export const getData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
