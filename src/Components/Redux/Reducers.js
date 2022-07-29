let InitialState=
{
    User:"null",
    Playlist:[],
    Token:"",
}

let Reducer=(state=InitialState,action)=>
{
    switch (action.Type) {
        case "SET-USER":
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default Reducer