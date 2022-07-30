let InitialState=
{
    User:"null",
    Playlist:[],
    Token:"",
}

let Reducer=(state=InitialState,action)=>
{
    switch (action.type) {
        case "SET-TOKEN":
            return{
                ...state,
                Token:action.Token,
            }
        case "SET-USER":
            return{
                ...state,
                User:action.User
            }
        case "SET-PLAYLIST":
            return{
                ...state,
                Playlist:action.Playlist,
            }
        default:
            return state;
    }
}

export default Reducer