import { SteamApiHeader, SteamUserData } from "../models/steam";

const steamApiHeader: SteamApiHeader = {
    "key": String(process.env.STEAM_KEY)
}

export const userData: () => Promise<SteamUserData> = async () => {
    const response: Response = await fetch(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiHeader.key}&steamids=${"76561198037069762"}`,
        {
            method: 'GET'
        });

    const objResponse = await response.json();
    const data: SteamUserData = await objResponse.response.players[0];
    return data;
}

export const steamService = {
    userData
}