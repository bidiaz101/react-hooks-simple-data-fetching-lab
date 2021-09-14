// create your App component here
import React, { useEffect, useState } from "react"

function App() {
    const [imgUrl, setImgUrl] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            setImgUrl(data.message)
        })
    }, [])
    
    if(!imgUrl){
        return <p>Loading...</p>
    } else {
        return <img src={imgUrl} alt="A Random Dog" />
    }
}

export default App
