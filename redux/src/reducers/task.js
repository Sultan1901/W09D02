const instialState = {
  name: "",
  isdel: false,
};
const Tasks = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "READ":
         
      return { name, isdel } 
    case "CREATE":
      return { name, isdel: false };
    case "DELETE":
        const { name, isdel } = payload;
      return { name, isdel: true };

    default:
      return state;
  }
};