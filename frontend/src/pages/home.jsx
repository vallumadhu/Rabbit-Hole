import { Card } from '../components/card.jsx'
export function Home() {
    const posts = [
        {
            id: 1,
            title: " Tech companies after AI ",
            likecount: 30,
            imageUrl: "https://preview.redd.it/tech-companies-after-ai-v0-0p31qhezxbnh1.jpeg?width=1080&crop=smart&auto=webp&s=b1b228e3f221eda41d57a6f5391378ae09d10226",
            discription: ""

        },
        {
            id: 1,
            title: " In Peddi (2026), Peddi wears jersey number 27. It's a subtle reference to the number of days it takes to finish watching the entire movie ",
            likecount: 10,
            imageUrl: "https://preview.redd.it/in-peddi-2026-peddi-wears-jersey-number-27-its-a-subtle-v0-bxydjpikpych1.png?width=1080&crop=smart&auto=webp&s=8079b5cb7ca7933666252c7680c38dc2899eff15",
            discription: ""

        },
        {
            id: 1,
            title: "Got married yesterday and now my wife (27F) wants to divorce because of this decoration I did for our first night today",
            likecount: 300,
            imageUrl: "https://preview.redd.it/got-married-yesterday-and-now-my-wife-27f-wants-to-divorce-v0-fzofuez3q3nh1.jpeg?width=1080&crop=smart&auto=webp&s=193b1ff47186ceba7556ae02571008d27a697185",
            discription: "I (30M) got married to a woman (27F) just yesterday through AM. We discussed about compatibility and all and proceeded with marriage only after that. But now she saw this amazing decoration I did for our first night and now she wants to file for a divorce. పవన్ అన్న పుట్టిన రోజు సందర్భంగా అన్న ఆశీస్సులతో మా మొదటి రాత్రి బాగా జరగాలని కష్టపడి చేశాను. కానీ తనేమో ఇప్పుడు విడాకులు అడుగుతుంది. Why are women like this?"

        },
        {
            id: 5,
            title: " In Peddi (2026), Peddi wears jersey number 27. It's a subtle reference to the number of days it takes to finish watching the entire movie ",
            likecount: 10,
            imageUrl: "https://preview.redd.it/in-peddi-2026-peddi-wears-jersey-number-27-its-a-subtle-v0-bxydjpikpych1.png?width=1080&crop=smart&auto=webp&s=8079b5cb7ca7933666252c7680c38dc2899eff15",
            discription: ""

        },
    ]
    return (
        <>
            <div className="post-container">
                {posts.map((post) => (
                    <Card key={post.id} title={post.title} likecount={post.likecount} imageUrl={post.imageUrl} discription={post.discription} />
                ))}

            </div>
        </>
    )
}