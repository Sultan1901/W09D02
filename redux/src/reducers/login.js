const instialState = {
  user: null,
  token: "",
};

const sign = (stste = instialState, action) => {
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
      return stste;
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
        tyape:"LOGOUT",
        payload : data
    }
}