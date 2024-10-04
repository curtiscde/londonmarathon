import { IOAuthTokenResponse } from './types/IOAuthTokenResponse';

// require('dotenv').config();

export async function getAuthData(refreshToken: string): Promise<IOAuthTokenResponse> {
  return fetch('https://www.strava.com/oauth/token', {
    cache: 'no-store',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENTID,
      client_secret: process.env.STRAVA_CLIENTSECRET,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })
    .then((res) => res.json());
}
