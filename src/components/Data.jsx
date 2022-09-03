import React, { forwardRef } from "react";
import mapIcon from "../assets/map-icon.svg"
import darkMapIcon from "../assets/dark-map-icon.svg"
import linkIcon from "../assets/link-icon.svg"
import darkLinkIcon from "../assets/dark-link-icon.svg"
import companyIcon from "../assets/company-icon.svg"
import darkCompanyIcon from "../assets/dark-company-icon.svg"
import twitterIcon from "../assets/twitter-icon.svg"
import darkTwitterIcon from "../assets/dark-twitter-icon.svg"
import userIcon from "../assets/user-icon.svg"

export default function Data(props) {
    const date = new Date(props.joined)
    const options ={ year: 'numeric', month: 'short', day: 'numeric'}

    return (
        <main>
            <div className={`user-profile ${props.isDark ? "dark" : ""}`}>
                <div className="profile">
                    <img src={props.avatarUrl ? props.avatarUrl : userIcon} alt="user image" />
                    <div className="profile-info">
                        <h2 className={`user-name${props.name ? "" : " no_contact"}`}>
                            {props.name ? props.name : "Nome indisponível"}
                        </h2>
                        <a 
                        href={`https://github.com/${props.login}`} 
                        target="_blank" 
                        className="user-link">@{props.login}</a>
                        <p className={`join-date${props.joined ? "" : " no_contact"}`}>
                            {props.joined ? `Entrou em ${date.toLocaleDateString('pt-Br', options)}` : "Indisponível"}</p>
                    </div>
                </div>
                    <p className={`user-desc${props.bio ? "" : " no_contact"}`}>
                        {props.bio ? props.bio : "Bio Indisponível"}
                    </p>
                    <div className="user-stats">
                        <div>
                            <h2>Repositórios</h2>
                            <h3>{props.repos ? props.repos : 0}</h3>
                        </div>
                        <div>
                            <h2>Seguidores</h2>
                            <h3>{props.followers ? props.followers : 0}</h3>
                        </div>
                        <div>
                            <h2>Seguindo</h2>
                            <h3>{props.following ? props.following : 0}</h3>
                        </div>
                    </div>
                    <div className="contacts">
                        
                        <a href="#" className={props.location ? "" : "no_contact"}>
                            <img src={props.isDark ? darkMapIcon : mapIcon} alt="map icon" />
                            {props.location ? props.location : "Indisponível"}
                        </a>

                        <a href="#" className={props.twitterUsername ? "" : "no_contact"}>
                            <img src={props.isDark ? darkTwitterIcon : twitterIcon} alt="twitter icon" />
                            {props.twitterUsername ? props.twitterUsername : "Indisponível"}
                        </a>

                        <a href="#" className={props.blog ? "" : "no_contact"}>
                            <img src={props.isDark ? darkLinkIcon : linkIcon} alt="lik icon" />
                            {props.blog ? props.blog : "Indisponível"}
                        </a>

                        <a href="#" className={props.company ? "" : "no_contact"}>
                            <img src={props.isDark ? darkCompanyIcon : companyIcon} alt="company icon" />
                            {props.company ? props.company : "Indisponível"}
                        </a>
                    </div>
            </div>
        </main>
    )
}