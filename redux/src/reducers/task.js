const initialState = {
  name: "",
  isdel: false,
};
const Tasks = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "READ":
      return { name, isdel };
    case "CREATE":
      return { name, isdel: false };
    case "DELETE":
      const { name, isdel } = payload;
      return { name, isdel: true };

    default:
      return state;
  }
};
 export default Tasks;
 export const delTask = (data) => {
   return {
     type: "DELETE",
     payload: data,
   };
 };
export const nweTask =(data)=>{
       return{
           type:"CREATE",
           payload:data
       }}
      export const getTask = (data) => {
        return {
          type: "READ",
          payload: data,
        };
      };