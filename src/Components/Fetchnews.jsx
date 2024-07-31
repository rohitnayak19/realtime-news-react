const API_KEY = "df1501f8ed0b40e085a2fa45753b10e4";
const url = "https://newsapi.org/v2/everything?q=";

export async function fetchnews(query) {
    if (!API_KEY) {
        console.error('API key is missing.');
        return;
    }
    if (!query) {
        console.error('Query is missing.');
        return;
    }

    try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}
