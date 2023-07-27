import { useState, useEffect } from "react";

function QuoteGenerator() {
    const url = "https://type.fit/api/quotes"
    const [data, setData] = useState([])
    const [num, setNum] = useState(0)

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    return (
        <>
            <div className="container quote-box">
                <center>
                    <h1 className="heading">Random Quote Generator</h1>
                    <button className="btn quotebutton" onClick={() => {
                        setNum(Math.floor(Math.random() * data.length));
                    }}>Click Here</button>
                    {data.length > 0 && (
                        <div className="quote">{data[num].text}</div>
                    )}
                </center>
            </div>
        </>
    )
}

export default QuoteGenerator;