import type { NextApiRequest, NextApiResponse } from 'next'
import { SteamApiHeader, SteamUserData } from '../../models/steam';
import { TwichApiHeader, TwitchAcessToken, TwitchUserData } from '../../models/twitch';

const twitchApiHeader: TwichApiHeader = {
  "client_id": String(process.env.TWITCH_CLIENT_ID),
  "client_secret": String(process.env.TWITCH_CLIENT_SECRET)
}

const steamApiHeader: SteamApiHeader = {
  "key": String(process.env.STEAM_KEY)
}

export const twitchAcessToken: () => Promise<string> = async () => {
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

export const twitchUserData: () => Promise<TwitchUserData> = async () => {
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

export const steamUserData: () => Promise<SteamUserData> = async () => {
  const response: Response = await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiHeader.key}&steamids=${"76561198037069762"}`,
    {
      method: 'GET'
    });

  const objResponse = await response.json();
  const data:SteamUserData = await objResponse.response.players[0];
  return data;
}

export const handler: (req: NextApiRequest, res: NextApiResponse) => void = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    Name: "Lennon Correa",
    Job: "Bllog",
    Role: "Software Engineer Intern",
    Skills: [
      "C#",
      "Java",
      "Javascript"
    ],
    Languages: [
      "Portuguese",
      "English"
    ]
  }
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else {
    res.status(405).json({
      "Request:": req.method,
      "Error": "Method Not Allowed"
    });
  }
}

export default handler;