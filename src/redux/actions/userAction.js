import { USER } from "./actionTypes";

export const User = (id) => {
  return {
    type: USER,
    id,
  };
};
