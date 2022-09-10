import { GET_DATA_INTERFACE } from "../types.servies";

export const getData = async (url: string, setState: Function) => {
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    setState?.(data)
  } catch (err) {
    console.log(err);
  }
};
