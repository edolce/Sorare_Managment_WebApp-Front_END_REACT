import {Component} from "react";

function Info(props) {
    return(
        <div className="info">
            <span className="key">
                {props.key_}
            </span>
            <span className="value">
                {props.value}
            </span>
        </div>
    );
}

class AuctionCardPopUp extends Component{

    render() {
        return(
            <div className="card-container">
                <div className="header">
                    DANILO COGLIONE
                </div>
                <div className="player-image">
                    <img src="https://assets.sorare.com/seasonpicture/0a0d2948-19d9-4fc8-8a03-0e734816d9bd/picture/squared-fd2e5d1bb8a73e7e41132b7202c6d112" alt="player-image"/>
                </div>
                <div className="infos">
                    <div className="earning-infos sub-i">
                        <span className="sub-h">INFO GUADAGNI</span>
                        <div className="line"></div>
                        <div className="sub-infos">
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                        </div>
                    </div>
                    <div className="sales-infos sub-i">
                        <span className="sub-h">INFO VENDITE</span>
                        <div className="line"></div>
                        <div className="sub-infos">
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                        </div>
                    </div>
                    <div className="risk-info sub-i">
                        <div className="line"></div>
                        <div className="sub-infos">
                            <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AuctionCardPopUp