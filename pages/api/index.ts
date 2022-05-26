// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TwichApiHeader, UserData } from '../../models/twitchModels';

const twitchApiHeader: TwichApiHeader = {
  "Authorization": String(process.env.TWITCH_AUTHORIZATION),
  'ClientId': String(process.env.TWITCH_CLIENT_ID)
}

export const twitchRequest = async () => {
  const response: Response = await fetch('https://api.twitch.tv/helix/users?login=flyshed', {
    method: 'GET',
    headers: new Headers({
      'Authorization': twitchApiHeader.Authorization,
      'Client-Id': twitchApiHeader.ClientId
    })
  });
  const objResponse: any = await response.json();
  const userData: UserData = objResponse.data[0];
  return userData;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response: Response = await fetch('https://api.twitch.tv/helix/users?login=flyshed', {
    method: 'GET',
    headers: new Headers({
      'Authorization': twitchApiHeader.Authorization,
      'Client-Id': twitchApiHeader.ClientId
    })
  });
  const objResponse: any = await response.json();
  const userData: UserData = objResponse.data;
  res.status(200).json(objResponse);
}

export default handler;