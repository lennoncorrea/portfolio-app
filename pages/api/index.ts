// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TwichApiHeader, UserData, TwitchAcessToken } from '../../models/twitchModels';

const twitchApiHeader: TwichApiHeader = {
  "ClientId": String(process.env.TWITCH_CLIENT_ID),
  "ClientSecret": String(process.env.TWITCH_CLIENT_SECRET)
}

export const twitchAcessToken = async () => {
  const response: Response = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    body: `client_id=${twitchApiHeader.ClientId}&client_secret=${twitchApiHeader.ClientSecret}&grant_type=client_credentials`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  });
  const objResponse: TwitchAcessToken = await response.json();
  console.log("teste");
  return objResponse.access_token;
}


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const access_token = String(await twitchAcessToken());
  const response: Response = await fetch('https://api.twitch.tv/helix/users?login=flyshed', {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Bearer '+ access_token,
      'Client-Id': twitchApiHeader.ClientId
    })
  });

  const objResponse = await response.json();
  const data = await objResponse.data[0];
  res.status(200).json(await data);
}

export const twitchUserData = async () => {
  const access_token = String(await twitchAcessToken());
  const response: Response = await fetch('https://api.twitch.tv/helix/users?login=flyshed', {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Bearer '+ access_token,
      'Client-Id': twitchApiHeader.ClientId
    })
  });

  const objResponse = await response.json();
  const data = await objResponse.data[0];
  return await data;
}


export default handler;