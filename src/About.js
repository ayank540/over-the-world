import React from 'react'
import Link from 'react-router-dom/Link'

function About({ title }) {
    return (
        <div className="container">
            <h4 className="mt-3">{title}</h4>
            <hr />
            <div className="justify-content-center">
                <div style={{height: "244px"}}>
                    This is a news web app utilizing API from <Link to="https://newsapi.org">News API</Link>.
                It updates regularly as the data is changed. It shows content from more than 50 countries.&nbsp;
                 <Link to="https://reactjs.org">Reactjs</Link> is utilized for building UI/UX.<br />
                 This is a project made by an undergrad student as its summer project to showcase the learnings of the summer training.
                </div>
            </div>
        </div>
    )
}

export default About