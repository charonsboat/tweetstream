var TwitterBot = require('@drm2/twitterbot');
var dotenv = require('dotenv');
var io = require('socket.io');

// load environment vars from file
dotenv.config();

// initialize the TwitterBot
var bot = new TwitterBot({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var stream = bot.filteredStream(process.env.TWITTER_STREAM_FILTER);

stream.on('tweet', function (tweet)
{
    io.emit('tweet', tweet);
});
