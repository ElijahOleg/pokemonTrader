module.exports = {

    'twitterAuth' : {
        'consumerKey'       : 'process.env.CONSUMER_KEY',
        'consumerSecret'    : 'process.env.CONSUMER_SECRET',
        'callbackURL'       : 'http://lvh.me:3000/auth/twitter/callback'
    }
};

//http://127.0.0.1:8080/auth/twitter/callback