import axios from "axios";
import { RootTracks } from "../interfaces/ITrack";
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const SECRET_CLIENT_ID = import.meta.env.VITE_SPOTIFY_SEGRET_CLIENT_ID;

export async function searchSong(song: string) {
    const accessToken = await getSpotifyAccessToken();

    const params = new URLSearchParams();
    params.append("client_id", CLIENT_ID);
    params.append("type", "track");
    params.append("limit", "10");
    params.append("q", song);

    try {
        const response = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params, // Usa direttamente il `URLSearchParams` per aggiungere i parametri alla query
        });

        return response.data as RootTracks;

    } catch (error) {
        console.error("Errore durante la ricerca della canzone:", error);
        throw error; // Propaga l'errore per una gestione a livello superiore
    }
}


export async function getSpotifyAccessToken(): Promise<string> {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const credentials = btoa(`${CLIENT_ID}:${SECRET_CLIENT_ID}`); // Codifica in base64

    const response = await axios.post("https://accounts.spotify.com/api/token", params, {
        headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    return response.data.access_token;
}