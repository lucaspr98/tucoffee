export async function load() {
    const response = await fetch("https://tucoffee-7581.restdb.io/rest/method?q={}&h={\"$orderby\": {\"unlocked\":-1, \"name\": 1}}", {
        method: 'GET',
        headers: {
            'x-apikey': '64c5c96a86d8c563ebed92b0'
        } 
    });
    return {
        methods: await response.json()
    }
}