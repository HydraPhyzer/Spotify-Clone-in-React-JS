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