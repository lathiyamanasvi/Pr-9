let initialState = {
    users : JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
}


const crudReducer = (state = initialState,action) => {
  switch (action.type) {
    case 'add':
        let data = action.payload;
        let all = [...state.users,data];
         localStorage.setItem('user',JSON.stringify(all));
     return {
         ...state,
         users : all
     }

     case 'del':
        let id = action.payload
        let remove = state.users.filter((val)=>{
            return val.id !== id
        })
        localStorage.setItem("user",JSON.stringify(remove))
        return{
            ...state,
            users:remove
        }
        
  
    default:
        return state
  }
}
export default crudReducer