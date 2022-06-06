import { SteamApiHeader, SteamUserData, UserData } from '../models/interfaces/steam';

describe('Steam Interface', () => {
    describe('UserData Interface', () => {
        it('should be created', () => {
            const userData: UserData = {
                "id": "testId",
                "login": "testLogin",
                "display_name": "testDisplayName",
                "type": "testType",
                "broadcaster_type": "testBroadcasterType",
                "description": "testDescription",
                "profile_image_url": "testProfileImageUrl",
                "offline_image_url": "testOfflineImageUrl",
                "view_count": 0,
                "created_at": "testCreatedAt"
            };
            expect(userData).not.toBe(null);
            expect(userData.id).toBe("testId");
            expect(userData.login).toBe("testLogin");
            expect(userData.display_name).toBe("testDisplayName");
            expect(userData.type).toBe("testType");
            expect(userData.broadcaster_type).toBe("testBroadcasterType");
            expect(userData.description).toBe("testDescription");
            expect(userData.profile_image_url).toBe("testProfileImageUrl");
            expect(userData.offline_image_url).toBe("testOfflineImageUrl");
            expect(userData.view_count).toBe(0);
            expect(userData.created_at).toBe("testCreatedAt");
        });
    });
    describe('SteamApiHeader Interface', () => {
        it('should be created', () => {
            const steamApiHeader: SteamApiHeader = {
                "key": "testKey"
            };
            expect(steamApiHeader).not.toBe(null);
            expect(steamApiHeader.key).toBe("testKey");
        });
    });
    describe('SteamUserData Interface', () => {
        it('should be created', () => {
            const steamUserData: SteamUserData = {
                "steamid": "testSteamId",
                "communityvisibilitystate": 0,
                "profilestate": 1,
                "personaname": "testPersonaName",
                "profileurl": "testProfileUerl",
                "avatar": "testAvatar",
                "avatarmedium": "testAvatarMedium",
                "avatarfull": "testAvatarFull",
                "avatarhash": "testAvatarHash",
                "lastlogoff": 2,
                "personastate": 3,
                "realname": "testRealName",
                "primaryclanid": "testPrimaryClanId",
                "timecreated": 4,
                "personastateflags": 5,
                "loccountrycode": "testLocCountryCode",
                "locstatecode": "testLocStateCode"
            };
            expect(steamUserData).not.toBe(null);
            expect(steamUserData.steamid).toBe("testSteamId");
            expect(steamUserData.communityvisibilitystate).toBe(0);
            expect(steamUserData.profilestate).toBe(1);
            expect(steamUserData.personaname).toBe("testPersonaName");
            expect(steamUserData.profileurl).toBe("testProfileUerl");
            expect(steamUserData.avatar).toBe("testAvatar");
            expect(steamUserData.avatarmedium).toBe("testAvatarMedium");
            expect(steamUserData.avatarfull).toBe("testAvatarFull");
            expect(steamUserData.avatarhash).toBe("testAvatarHash");
            expect(steamUserData.lastlogoff).toBe(2);
            expect(steamUserData.personastate).toBe(3);
            expect(steamUserData.realname).toBe("testRealName");
            expect(steamUserData.primaryclanid).toBe("testPrimaryClanId");
            expect(steamUserData.timecreated).toBe(4);
            expect(steamUserData.personastateflags).toBe(5);
            expect(steamUserData.loccountrycode).toBe("testLocCountryCode");
            expect(steamUserData.locstatecode).toBe("testLocStateCode");
        });
    });
});