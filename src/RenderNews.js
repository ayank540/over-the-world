import React, { useState, useEffect } from 'react'
import axios from './axios'
import { Card, Button } from 'react-bootstrap'

function RenderNews({ title, fetchUrl }) {
    const [news, setNews] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setNews(request.data.articles)
            console.log(request.data);
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className="container">
            <h4 className="mt-3">{title}</h4>
            <hr />
            <div className="row">
                {news.map((article) =>
                    <div className="col-sm-4 mb-5">
                        <Card>
                            <Card.Img height="200px" variant="top" src={article.urlToImage} />
                            <Card.Body style={{ height: "100px" }}>
                                <Card.Title>{article.title}</Card.Title>
                            </Card.Body>
                            <Card.Body>
                                <Button style={{ marginLeft: "195px" }} variant="primary" href={article.url}>Read more</Button>
                            </Card.Body>
                            <Card.Footer>Source: {article.source.name}</Card.Footer>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RenderNews