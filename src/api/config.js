let mode = process.env.NODE_ENV;
let config = null;

if(mode === 'production') {
    config = {
        remote: 'https://www.steins.club',
        port: 443,
    }
}

if(mode === 'development') {
    config = {
        remote: 'http://localhost',
        port: 3000,
    }
}

export default config