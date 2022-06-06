import { TwitchApiHeader, TwitchAcessToken, TwitchUserData } from "../models/interfaces/twitch";

const twitchApiHeader: TwitchApiHeader = {
    "client_id": String(process.env.TWITCH_CLIENT_ID),
    "client_secret": String(process.env.TWITCH_CLIENT_SECRET)
}

const twitchAcessToken: () => Promise<string> = async () => {
    const response: Response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        body: `client_id=${twitchApiHeader.client_id}&client_secret=${twitchApiHeader.client_secret}&grant_type=client_credentials`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    });
    const objResponse: TwitchAcessToken = await response.json();
    return objResponse.access_token;
}

const userData: () => Promise<TwitchUserData> = async () => {
    const access_token = String(await twitchAcessToken());
    const response: Response = await fetch('https://api.twitch.tv/helix/users?login=flyshed', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + access_token,
            'Client-Id': twitchApiHeader.client_id
        })
    });
    const objResponse = await response.json();
    const data: TwitchUserData = await objResponse.data[0];
    return data;
}

export const twitchService = {
    userData
}