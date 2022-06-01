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

export type SteamApiHeader = {
    "key": string
}

export type SteamUserData = {
    "steamid": string,
    "communityvisibilitystate": number,
    "profilestate": number,
    "personaname": string,
    "profileurl": string,
    "avatar": string,
    "avatarmedium": string,
    "avatarfull": string,
    "avatarhash": string,
    "lastlogoff": number,
    "personastate": number,
    "realname": string,
    "primaryclanid": string,
    "timecreated": number,
    "personastateflags": number,
    "loccountrycode": string,
    "locstatecode": string
}