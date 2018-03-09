'use strict';

module.exports = Object.freeze({
    // App-ID. Set to your own Skill App ID from the developer portal.
    appId : 'amzn1.ask.skill.a78b95fd-cd92-4b93-a7c5-e3ea59619dab',
    // MIKE: 'amzn1.ask.skill.a78b95fd-cd92-4b93-a7c5-e3ea59619dab',
    // TYLER:'amzn1.ask.skill.f97c6cfe-20a6-481d-929b-3c72234ce323',

    //  DynamoDB Table name
    dynamoDBTableName : 'OpenBookSessions',

    /*
     *  States:
     *  START_MODE : Welcome state when the stream has not begun.
     *  PLAY_MODE :  When the stream is being played. Does not imply only active play.
     *               It remains in the state as long as the app is active.
     *  RESUME_MODE: When a user invokes the skill in PLAY_MODE with a LaunchRequest,
     *               the skill provides an option to resume from last position, or to start over the playlist.
     */
    states : {
        START_MODE : '',
        PLAY_MODE : '_PLAY_MODE',
        RESUME_MODE : '_RESUME_MODE'
    }
});
