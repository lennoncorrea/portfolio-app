export interface TwitchUserData {
  "id": string,
  "login": string,
  "display_name": string,
  "type": string,
  "broadcaster_type": string,
  "description": string,
  "profile_image_url": string,
  "offline_image_url": string,
  "view_count": number,
  "created_at": string
};

export interface TwitchApiHeader {
  'client_id': string,
  'client_secret': string
}

export interface TwitchAcessToken {
  "access_token": string,
  "expires_in": string,
  "token_type": string
}