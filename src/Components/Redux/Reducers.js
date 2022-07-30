let InitialState=
{
    User:"null",
    Playlist:[],
    Token:"",
    SinglePlaylistID:"",
    SinglePlaylist:{},
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
        case "SET-SINGLE-PLAYLIST-ID":
            return{
                ...state,
                SinglePlaylistID:action.SinglePlaylistID,
            }
        case "SET-SINGLE-PLAYLIST":
            return{
                ...state,
                SinglePlaylist:action.SinglePlaylist,
            }
        default:
            return state;
    }
}

export default Reducer