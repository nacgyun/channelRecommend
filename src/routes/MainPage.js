import '../App.css';
import './MainPage.css'
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import dance_gif from "../images/beupsaram_dance.gif"

function MainPage() {
    const [btnState, setBtnState] = useState(false);
    const [channel, setChannel] = useState({name:'', number:''});
    const changeBtnSate = () => {
        
    }
    const setRandomChannel = () => {
        let num1 = Math.floor(Math.random() *6)
        setChannel(channelConverter(num1))
    };
    const channelConverter = (num) => {
        const channelList = ["벨 마이어 공국", "지벤 황국", "마계", "바하이트", "백해", "중천"];
        let channelNum;
        if(num == 0) {
            channelNum = Math.floor(Math.random() *18) + 1
        } else if (num == 1) {
            channelNum = Math.floor(Math.random() *12) + 1
        }else if (num == 2) {
            channelNum = Math.floor(Math.random() *10) + 1
        }else if (num == 3) {
            channelNum = Math.floor(Math.random() *12) + 1
        }else if (num == 4) {
            channelNum = Math.floor(Math.random() *18) + 1
        }else if (num == 5) {
            channelNum = Math.floor(Math.random() *50) + 40
        }
        console.log(channelList[num], channelNum)
        return {name : channelList[num], number : channelNum}
    }
    return (
        <div className="App"> 
        <div className='MainPage_container'>
            <div className='MainPage_conatainer_mainIMG'>
                <img src={dance_gif} alt="븝느적" width='15%'/>
            </div>
            <div className='MainPage_container_Roll'>
                <button className='MainPage_container_Roll_btn' onClick={setRandomChannel}>
                채널 추천!
                </button>
                <div className='MainPage_container_Roll_result'>{channel.name} {channel.number}</div>
            </div>
        </div>
        </div>
    );
}

export default MainPage;
