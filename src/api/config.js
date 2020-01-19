let mode = process.env.NODE_ENV;
let config = null;

if(mode === 'production') {
    config = {
        remote: 'http://www.bluemsun.work',
        port: 8080,
    }
}

if(mode === 'development') {
    config = {
        remote: 'http://localhost',
        port: 3000,
    }
}

export default config