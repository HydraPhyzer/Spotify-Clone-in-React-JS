export let SETTOKEN=(Token)=>
{
    return{
        type:"SET-TOKEN",
        Token:Token,
    }   
}
export let SETUSER=(User)=>
{
    return{
        type:"SET-USER",
        User:User
    }   
}
export let SETPLAYLIST=(Lists)=>
{
    return{
        type:"SET-PLAYLIST",
        Playlist:Lists,
    }   
}
export let SETSINGLEPLAYLISTID=(ID)=>
{
    return{
        type:"SET-SINGLE-PLAYLIST-ID",
        SinglePlaylistID:ID,
    }   
}
export let SETSINGLEPLAYLIST=(List)=>
{
    return{
        type:"SET-SINGLE-PLAYLIST",
        SinglePlaylist:List,
    }   
}
export let SETTRACK=(Track)=>
{
    return{
        type:"SET-TRACK",
        Track:Track,
    }   
}