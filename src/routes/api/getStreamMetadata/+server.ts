import { json } from '@sveltejs/kit'
// import { CORS_TOKEN } from '$env/static/private'

export async function GET() {

    try {
        const response = await fetch(
            "https://proxy.radiojar.com/api/stations/7mh06pa8uwzuv/now_playing/",
            // {headers: {
            //     'x-cors-api-key': CORS_TOKEN,
            //     'x-requested-with': ''
            // }}
        )

        const data = await response.json()
        return json(data)
    } catch (error) {
        return json({
            error: error
        })
    }
}