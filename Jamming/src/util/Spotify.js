const accessToken = '';
const clientID = '1a4ea45a5e734a3f9753c2ea1c4c4ffc';
const redirectURI = 'http://localhost:3000/';
const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            const expiresIn = Number(urlExpiresIn[1]);
            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            const redirect ='https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}';
            window.location = redirect;
        }
    },

    search(term) {
        return fetch('https://api.spotify.com/v1/search?type=track&q=${term}')
    }
};

export { Spotify };
