export let Auth="https://accounts.spotify.com/authorize";

let Redirect="http://localhost:3000/";

let ClientID="00d6d148aa0446fa962df3ebe5a8a4b1";

let Scopes=
[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-modify-playback-state",
    "user-top-read",
    "user-read-playback-state",

];

export let GetToken=()=>
{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((Accum , Item)=>
    {
        let Tokenize=Item.split("=");
        Accum[Item[0]]=decodeURIComponent(Tokenize[1]);

        return Accum;
    }, {})
}

export let LogInURL=`${Auth}?response_type=token&client_id=${ClientID}&redirect_uri=${Redirect}&scope=${Scopes.join("%20")}&show_dialog=true`