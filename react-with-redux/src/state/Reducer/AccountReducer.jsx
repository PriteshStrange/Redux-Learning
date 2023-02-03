const reducer = (state=0,action) => {
    console.log("object",action,state);
  switch(action.type){
      case  "Deposit" : 
        return state + action.payload;
      case "Withdraw" :
          return state - action.payload;
      default :
            return state
  }
}

export default reducer