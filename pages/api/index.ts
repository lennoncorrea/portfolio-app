// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type UserData = {
  "id": string,
  "login": string,
  "display_name": string
  "type": string,
  "broadcaster_type": string,
  "description" : string,
  "profile_image_url": string,
  "offline_image_url": string,
  "view_count": number,
  "created_at": string
};

export const handler = async () => {

  const response: Response = await fetch('https://api.twitch.tv/helix/users?login=flyshed', {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Bearer 7l3ysr0xwiy3n6ta2ya8q7upic80hf',
      'Client-Id': '4dgpxlxr0k0rpd04m2ecc27thobrts'
    })
  });
  const objResponse:any = await response.json();
  const userData:UserData = objResponse.data[0];
  return userData;
  
}

export type { UserData };