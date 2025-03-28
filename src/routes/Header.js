import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


function Header({userInfo, setUserInfo }) {
    return (
        <div>
        <div className="header__div">
            <div className="header__div__content">
                <div className="header__div__name">
                    <div className="header__div__name__text">
                <div>채널 추천기</div></div>
                </div>
            </div>
        </div>
        <div className="divSpace"></div>
        </div>
    );
}

export default Header;