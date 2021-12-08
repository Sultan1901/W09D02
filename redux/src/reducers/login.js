const instialState = {
  user: null,
  token: "",
};

const sign = (state = instialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { user, token } = payload;
      localStorage.setItem("token", token);
      return { user, token };
    case "LOGOUT":
      localStorage.clear();
      return payload;

    default:
      return state;
  }
};
export default sign;
export const log = (data)=> {
return {
    type: "LOGIN",
    payload : data
}
}
export const logout = (data)=>{
    return {
        type:"LOGOUT",
        payload : data
    }
}