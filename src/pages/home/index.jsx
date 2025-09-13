import React from 'react'
import { Styled } from './styled'

const Home = () => {


    return (
        <>
            <Styled.Wrapper>
                <fieldset>
                    <legend>QnA - last updated: Sep 14, 2025</legend>
                    <div>
                        QnA Handbook is my consolidated knowledge base-drawn from everything I've been through and studied:
                        <ul>
                            <li>classes, </li>
                            <li>side-projects, </li>
                            <li>production bugs, and </li>
                            <li>interviews</li>
                        </ul>
                        Each entry is a mini-note in QnA form:
                        <ul>
                            <li>clear question, </li>
                            <li>precise answer, </li>
                            <li>examples, </li>
                            <li>gotchas</li>
                        </ul>
                        Programs pair the problem, approach, code, complexity, and tests.
                    </div>
                    <p>
                        Mindset: clarity • correctness • consistency.
                    </p>
                </fieldset>
            </Styled.Wrapper>
        </>
    )
}

export default Home

