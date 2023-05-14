let accessToken = null; //Store the access token and related info
let tokenExpirationTime = null;

const clientID = '1a4ea45a5e734a3f9753c2ea1c4c4ffc'; // My Spotify app's client ID
const redirectURI = 'http://localhost:3000/'; // The redirect URI of my Spotify spp

const Spotify = {

    userID: null,

    getAccessToken() { //Get an access token for making requests to the Spotify API
        if (accessToken && !this.isTokenExpired()) { //Check if an access token is already available amd not expired
            return accessToken;
        }

        //Extract access token and expiration time from the URL if present
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            const expiresIn = Number(urlExpiresIn[1]);
            tokenExpirationTime = new Date().getTime() + expiresIn * 1000;

            // Set the access token to expire and clear it
            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            // Redirect to Spotify authorization page
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=user-read-private%20playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    },

    isTokenExpired() { // Check if the access token is expired
        if (!tokenExpirationTime) {
            return true;
        }
        const currentTime = new Date().getTime();
        return currentTime >= tokenExpirationTime;
    },

    async search(term) { // Search the Spotify API for tracks matching a search term
        this.getAccessToken(); // Get an access token
        if (!accessToken) {
            return;
        }

        try {
            // Make a request to the Spotify API with the search term
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonResponse = await response.json(); //Parse the response as JSON
            if (!jsonResponse.tracks) {
                return []; // Return an empty array if no tracks are found
            }

            // Map the JSON response to an array of track objects
            return jsonResponse.tracks.items.map(tracks => ({
                id: tracks.id,
                name: tracks.name,
                artist: tracks.artists[0].name,
                album: tracks.album.name,
                uri: tracks.uri,
            }));

        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    },

    async getUserData() {
        const accessToken = this.getAccessToken();
        
        if (!accessToken) {
          return;
        }
      
        try {
          const response = await fetch('https://api.spotify.com/v1/me', {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
        }
    },

    async savePlaylist(name, trackURIs) {
        if (!name || !trackURIs.length) {
          return;
        }
      
        if (!this.userID) {
          const userResponse = await this.getUserData();
          console.log(userResponse); // Add this line to debug
          this.userID = userResponse.id;
        }
      
        const headers = { Authorization: `Bearer ${accessToken}` };
        let playlistResponse;
        try {
          // POST request to Spotify API to create a new playlist
          playlistResponse = await fetch(`https://api.spotify.com/v1/users/${this.userID}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({ name: name }),
          });
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
          return;
        }
      
        const playlistJsonResponse = await playlistResponse.json();
        const playlistID = playlistJsonResponse.id;
      
        // POST request to Spotify API to add tracks to the new playlist
        await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackURIs }),
        });
    }

}

export default Spotify;
