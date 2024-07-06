import { useEffect, useState } from "react"

export default function Profile() {
    const [newsData, setnewsData] = useState()
    useEffect(() => {
        getData()
    }, []);
    function getData() {
        const apiKey = '8c14884c628c4eb3921b2b05f7d3e038'; // Replace with your actual API key
        const apiUrl = 'https://newsapi.org/v2/top-headlines';
        const country = 'us'; // Example: Fetch top headlines from the US

        fetch(`${apiUrl}?country=${country}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setnewsData(data.articles)
                console.log('NewsAPI Response:', data.articles);
                // Handle data processing/display here
            })
            .catch(error => {
                console.error('Error fetching data from NewsAPI:', error);
                // Handle error scenario
            });
    }
    if (!newsData) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <div>
            {/* {newsData.map((item, index) => {
                return (
                    <div className="border-2 p-2 space-y-3">
                        <h1 className="font-bold text-xl">{item.title}</h1>
                        <p>Data {item.publishedAt}</p>
                        <img width={500} src={item.urlToImage} />
                    </div>
                )
            })} */}
        </div>
    )
}