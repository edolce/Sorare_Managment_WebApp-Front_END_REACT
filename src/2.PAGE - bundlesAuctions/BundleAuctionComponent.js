import {Component} from "react";
import "./BundlesAuctionsPage.css"
function FastCard(props){
    return(
        <div className="fast-card">
            <span className="name">{props.card.displayName}</span>
            <span className="risk">{props.card.risk} %</span>
            <span className="floor">{props.priceData.best_market_price} ETH</span>
            <span className="average">{props.priceData["3_days"]} ETH</span>
            <span className="last">{props.card.lastSold} ETH</span>
        </div>
    )
}

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

class BundleAuctionComponent extends Component{
    key=0

    constructor(props) {
        super(props);
        this.key=0
        console.log(this.props.playersPriceData)
    }

    render() {
        return(
            <div className="bundle">
                <div className="top-side">
                    <div className="emblem-container">
                        <img src={this.props.bundle.emblem} alt="emblem" className="emblem"/>
                    </div>
                    <div className="fast-cards-container" onClick={this.props.openPopUp}>
                        {
                            this.props.bundle.cards?.map(
                                card => (
                                    <FastCard key={this.key++} data-key={this.key} card={card} priceData={this.props.playersPriceData[card.displayName]}/>
                                ))
                        }
                    </div>
                </div>
                <div className="bottom-side">
                   <div className="left-side">
                       <div className="infos-container">
                           <Info key_="PREZZO ATTUALE" value={this.props.bundle.currentPrice/Math.pow(10,18) + " ETH"}/>
                           <div className="bar-y"/>
                           <Info key_="SOMMA FLOOR 3G" value="14 ETH"/>
                           <div className="bar-y"/>
                           <Info key_="RISCHIO VENDITA" value="10 %"/>
                           <div className="bar-y"/>
                       </div>
                       <button className="buy-button">
                           COMPRA
                       </button>
                   </div>
                    <div className="bar-x"/>
                   <div className="right-side">
                       <div className="infos-container">
                           <Info key_="MINIMA PUNTATA" value={this.props.bundle.minNextBid/Math.pow(10,18) + " ETH"}/>
                           <div className="bar-y"/>
                           <Info key_="GUADAGNO FLOOR" value="1 ETH"/>
                           <div className="bar-y"/>
                           <Info key_="TEMPO RIMANENTE" value="1 ETH"/>
                           <div className="bar-y"/>
                       </div>
                       <button className="fav-button">
                           AGGIUNGI AI PREFERITI
                       </button>
                   </div>
                </div>
            </div>
        )
    }
}

export default BundleAuctionComponent