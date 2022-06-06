import { TwitchAcessToken, TwitchApiHeader, TwitchUserData } from "../models/interfaces/twitch";

describe('Twitch Interfaces', () => {
    describe('TwitchUserData Interface', () => {
        it('should be created', () => {
            const twitchUserData: TwitchUserData = {
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
            expect(twitchUserData).not.toBe(null);
            expect(twitchUserData.id).toBe("testId");
            expect(twitchUserData.login).toBe("testLogin");
            expect(twitchUserData.display_name).toBe("testDisplayName");
            expect(twitchUserData.type).toBe("testType");
            expect(twitchUserData.broadcaster_type).toBe("testBroadcasterType");
            expect(twitchUserData.description).toBe("testDescription");
            expect(twitchUserData.profile_image_url).toBe("testProfileImageUrl");
            expect(twitchUserData.offline_image_url).toBe("testOfflineImageUrl");
            expect(twitchUserData.view_count).toBe(0);
            expect(twitchUserData.created_at).toBe("testCreatedAt");
        });
    });
    describe('TwichApiHeader Interface', () => {
        it('should be created', () => {
            const twitchApiHeader: TwitchApiHeader = {
                'client_id': "testClientId",
                'client_secret': "testClientSecret"
            };
            expect(twitchApiHeader).not.toBe(null);
            expect(twitchApiHeader.client_id).toBe("testClientId");
            expect(twitchApiHeader.client_secret).toBe("testClientSecret");
        });
    });
    describe('TwitchAcessToken Interface', () => {
        it('should be created', () => {
            const twitchAcessToken: TwitchAcessToken = {
                "access_token": "twitchAcessToken",
                "expires_in": "twitchExpiresIn",
                "token_type": "twitchTokenType"
            };
            expect(twitchAcessToken).not.toBe(null);
            expect(twitchAcessToken.access_token).toBe("twitchAcessToken");
            expect(twitchAcessToken.expires_in).toBe("twitchExpiresIn");
            expect(twitchAcessToken.token_type).toBe("twitchTokenType");
        });
    });
});