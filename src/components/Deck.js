const Deck = ({title, path}) => {

    (async () => {
        const cards =  await (await fetch(`http://localhost:8000/${path}`)).json()
        console.log(path, cards);
    })()
    return <div>I'm the {title} Deck</div>
}

export default Deck