import React from 'react';
import {useState} from "react";


//styles
import "./Home.scss"

//assets
import logo from "../assets/logo.svg"

interface Props {

}

const Home: React.FC<Props> = () => {

    const [title, setTitle] = useState("React juhuuu");
    const [count, setCount] = useState(1);

    return (
        <div className="home">
            <img className="logo" src={logo} alt="react logo" />

            <h1 onClick={() => {
                setCount( prevCount => prevCount + 1);
                setTitle("React juhuu" + "!".repeat(count))
            }}>{ title }</h1>

            <p>
                Hot singles in your area. <br />
                Hotter react in your&nbsp;
                <a
                    href="https://reactjs.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    documentation
                </a>
                .
            </p>
        </div>
    );
};

export default Home;
