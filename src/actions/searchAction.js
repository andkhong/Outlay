export const GET_USER = "GET_USER";

export function searchAction(user){
  return {
    type: GET_USER,
    user
  }
}
