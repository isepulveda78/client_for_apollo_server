const GRAPHQL_URL = 'http://localhost:9000'
async function fetchGrettings () {
    const response = await fetch(GRAPHQL_URL,{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            query:`
                query {
                    greeting
                }
            `
        })
    })
    //here we destructure the data that we see in the graphql playground
    const { data } = await response.json()
    return data;
}
 
fetchGrettings().then(({greeting}) => {
    const title = document.querySelector('h1');
    title.textContent = greeting;
});