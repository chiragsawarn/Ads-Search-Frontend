export function getAds(input) {
    const txt = {
        searchInput:input
    }
    const payload = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(txt),
    };
    return fetch('http://localhost:5000/ads/search', payload).then(data => data.json())
}
// Prod 1 _id: 636235ad83e1e21dc74d3530
// Prod 2 _id: 636235bf83e1e21dc74d3532
// Prod 3 _id: 636235f183e1e21dc74d3535