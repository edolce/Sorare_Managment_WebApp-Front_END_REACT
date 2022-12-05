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


function SoldCard(props) {
    return(
        <div className="infos">
            <div className="earning-infos sub-i">
                <span className="sub-h">SOLD</span>
                <div className="line"/>
                <div className="sub-infos">
                    <Info key_={"PREZZO VENDITA"} value={"10 ETH"}/>
                    <Info key_={"DATA VENDITA"} value={"21-11-2000"}/>
                    <Info key_={"PERCENTUALE DI PROFIT"} value={"10%"}/>
                </div>
            </div>
        </div>
    )
}


function NotContestedCard(props) {
    return(
        <div className="infos">
            <div className="earning-infos sub-i">
                <span className="sub-h">NOT CONTESTED</span>
                <div className="line"/>
                <div className="sub-infos">
                    <Info key_={"PREZZO AUCTION"} value={"10 ETH"}/>
                    <Info key_={"DATA INSERZIONE"} value={"21-11-2000"}/>
                    <Info key_={"CONTESTED TIMES"} value={"12"}/>
                </div>
            </div>
        </div>
    )
}


function ContestedCard(props) {
    return(
        <div className="infos">
            <div className="basic-infos sub-i">
                <span className="sub-h">CONTESTED</span>
                <div className="line"/>
                <div className="sub-infos">
                    <Info key_={"PREZZO AUCTION"} value={"10 ETH"}/>
                    <Info key_={"DATA INSERZIONE"} value={"21-11-2000"}/>
                    <Info key_={"CONTESTED TIMES"} value={"12"}/>
                </div>
            </div>
            <div className="contesting-cards-infos sub-i">
                <span className="sub-h">CONTESTED</span>
                <div className="line"/>
                <div className="sub-infos">
                    <Info key_={"WIP"} value={"WIP"}/>
                    <Info key_={"WIP"} value={"WIP"}/>
                    <Info key_={"WIP"} value={"WIP"}/>
                    <Info key_={"WIP"} value={"WIP"}/>
                    <Info key_={"WIP"} value={"WIP"}/>
                </div>
            </div>
        </div>
    )
}
function NotListedCard(props) {
    return(
        <div className="infos">
            <div className="earning-infos sub-i">
                <span className="sub-h">NOT SOLD</span>
                <div className="line"/>
                <div className="sub-infos">
                    <Info key_={"FLOOR PRICE"} value={"10 ETH"}/>
                    <Info key_={"LAST SOLD PRICE"} value={"12 ETH"}/>
                    <Info key_={"LAST SOLD DATE"} value={"21-11-2000"}/>
                    <Info key_={"MEDIA PREZZO 3G"} value={"12 ETH"}/>
                    <Info key_={"CONTESTED TIMES"} value={"10"}/>
                </div>
            </div>
            <span className="sell-h">
                METTI IN VENDITA
            </span>
            <input className="input-eth" type="eth-quantity"/>
            <button>
                SELL
            </button>

        </div>
    )
}

class AuctionCardPopUp extends Component{

    constructor(props) {
        super(props);
    }


    colors = {
        SOLD: "#004f04",
        "NOT CONT": "#7a4900",
        CONT: "#6e005f",
        "NOT LISTED": "#830000",
    }

    infos = {
        SOLD: <SoldCard/>,
        "NOT CONT": <NotContestedCard/>,
        CONT: <ContestedCard/>,
        "NOT LISTED": <NotListedCard/>
    }

    render() {

        //calcolo dello stato della carta
        let state

        if (this.props.card.is_sold) state = "SOLD"
        else if(!this.props.card.is_listed) state = "NOT LISTED"
        else if (this.props.card.is_contested) state = "CONT"
        else state = "NOT CONT"

        return(
            <div className="card-container">
                <div className="header">
                    DANILO POCO COGLIONE
                </div>
                <div className="player-image" style={{background: this.colors[state]}}>
                    <img src={this.props.card.player_image} alt="player-image"/>
                </div>
                {this.infos[state]}
            </div>
        )
    }

}

export default AuctionCardPopUp