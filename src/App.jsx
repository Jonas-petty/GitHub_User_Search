import React, { useEffect, useState } from "react";
import Data from "./components/Data";
import "./style.css"

export default function App() {
    const [userName, setUserName] = useState("")
    const [search, setSearch] = useState(false)
    const [userData, setUserData] = useState(
        {
            avatarUrl: "",
            name: "",
            login: "",
            joined: "",
            bio: ""
        }
    )

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then(data => setUserData({
            avatarUrl: data.avatar_url,
            name: data.name,
            login: data.login,
            joined: data.created_at,
            bio: data.bio
        }))
    }, [search])

    function handleChange(event) {
        setUserName(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSearch(prevSearch => !prevSearch)
    }

    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <h1 className="navbar-title">Devfinder</h1>
                    <button className="toggle-mode">mode</button>
                </nav>
                <form className="search-form" onSubmit={handleSubmit}>
                    <img src="#" alt="search icon" />
                    <input type="text" 
                    placeholder="Search GitHub username_"
                    className="search-input"
                    onChange={handleChange}/>
                    <button className="search-button">Search</button>
                </form>
            </div>
            <Data 
                avatarUrl={userData.avatarUrl}
                name={userData.name}
                login={userData.login}
                joined={userData.joined}
                bio={userData.bio}
            />
        </>
    )
}