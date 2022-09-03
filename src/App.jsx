import React, { useEffect, useState } from "react";
import searchIcon from "./assets/search-icon.svg"
import sunIcon from "./assets/sun-icon.svg"
import moonIcon from "./assets/moon-icon.svg"
import Data from "./components/Data";
import "./style.css"

export default function App() {
    const [darkMode, setDarkMode] = useState(false)
    const [userName, setUserName] = useState("")
    const [search, setSearch] = useState(false)
    const [userData, setUserData] = useState(
        {
            avatarUrl: "",
            name: "",
            login: "",
            joined: "",
            bio: "",
            location: "",
            twitterUsername: "",
            company: "",
            blog: "",
            followers: 0,
            following: 0,
            repos: 0
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
            bio: data.bio,
            location: data.location,
            twitterUsername: data.twitter_username,
            company: data.company,
            blog: data.blog,
            followers: data.followers,
            following: data.following,
            repos: data.public_repos
        }))
    }, [search])

    function handleChange(event) {
        setUserName(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSearch(prevSearch => !prevSearch)
    }

    function toggleMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
        console.log(darkMode)
    }

    return (
        <div className={`container ${darkMode ? "dark" : ""}`}>
            <div className={`header`}>
                <nav className="navbar">
                    <h1 className="navbar-title">Devfinder</h1>
                    <button 
                    className="toggle-mode"
                    onClick={toggleMode}>
                        {darkMode ? "DARK" : "LIGHT"}
                        <img src={darkMode ? moonIcon : sunIcon} alt="" />
                    </button>
                </nav>
                <form className="search-form" onSubmit={handleSubmit}>
                    <img src={searchIcon} alt="search icon" />
                    <input type="text" 
                    placeholder="Pesquisar nome de usuário..."
                    className="search-input"
                    onChange={handleChange}/>
                    <button className="search-button">Pesquisar</button>
                </form>
            </div>
            <Data 
                name={userData.name}
                login={userData.login}
                joined={userData.joined}
                bio={userData.bio}
                avatarUrl={userData.avatarUrl}
                followers={userData.followers}
                following={userData.following}
                repos={userData.repos}
                location={userData.location}
                twitterUsername={userData.twitterUsername}
                company={userData.company}
                blog={userData.blog}
                isDark={darkMode}
            />
        </div>
    )
}