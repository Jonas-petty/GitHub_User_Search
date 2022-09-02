import React from "react";

export default function Data(props) {
    return (
        <main>
            <div className="user-profile">
                <div className="profile">
                    <img src={props.avatarUrl} alt="user image" />
                    <div className="profile-info">
                        <h2 className="user-name">{props.name}</h2>
                        <a href="#" className="user-link">@{props.login}</a>
                        <p className="join-date">{props.joined}</p>
                    </div>
                </div>
                    <p className="user-desc">
                        {props.bio}
                    </p>
                    <div className="user-stats">
                        <div>
                            <h2>Repos</h2>
                            <h3>8</h3>
                        </div>
                        <div>
                            <h2>Followers</h2>
                            <h3>3938</h3>
                        </div>
                        <div>
                            <h2>Following</h2>
                            <h3>9</h3>
                        </div>
                    </div>
                    <div className="contacts">
                    </div>
            </div>
        </main>
    )
}