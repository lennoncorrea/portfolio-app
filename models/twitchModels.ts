export type UserData = {
    "id": string,
    "login": string,
    "display_name": string
    "type": string,
    "broadcaster_type": string,
    "description": string,
    "profile_image_url": string,
    "offline_image_url": string,
    "view_count": number,
    "created_at": string
  };
  
  export type TwichApiHeader = {
    'ClientId': string,
    'ClientSecret': string
  }

  export type TwitchAcessToken = {
    "access_token": string,
    "expires_in": string,
    "token_type": string
  }