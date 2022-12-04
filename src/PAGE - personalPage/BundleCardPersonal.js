import {Component} from "react";
import "./PersonalPage.css"
function FastCard(props){

    if (props.card.last_insertion_date===undefined) return (<></>)

    const colors = {
        SOLD: "#009C06",
        "NOT CONT": "#D88100",
        CONT: "#CD00B9",
        "NOT LISTED": "#DB0000",
    }

    //calcolo dello stato della carta
    let state

    if (props.card.is_sold) state = "SOLD"
    else if(!props.card.is_listed) state = "NOT LISTED"
    else if (props.card.is_contested) state = "CONT"
    else state = "NOT CONT"

    return(
        <div className="fast-card" style={{background: colors[state]}}>
            <span className="name">{props.card.player_name}</span>
            <span className="state">{state}</span>
            <span className="price">{props.card.listing_price/Math.pow(10,18)} ETH</span>
            <span className="date">{props.card.last_insertion_date.split('T')[0]}</span>
            <span className="contested-times">WIP</span>
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

class BundleCardPersonal extends Component{
    key=0

    constructor(props) {
        super(props);
        this.key=0
    }



    render() {

        let guadagniTotali = - this.props.bundle.buy_price

        this.props.bundle.cards.map( card => {
            if (card.is_sold) guadagniTotali+=card.listing_price
        })

        return(
            <div className="bundle">
                <div className="top-side">
                    <div className="emblem-container">
                        <img src={this.props.bundle.image_url} alt="emblem" className="emblem"/>
                    </div>
                    <div className="fast-cards-container" onClick={this.props.openPopUp}>
                        <div className="fast-card-header">
                            <span className="name">NOME</span>
                            <span className="state">STATO</span>
                            <span className="price">PREZZO</span>
                            <span className="date">DATA</span>
                            <span className="contested-times">N. CONT</span>
                        </div>
                        {
                            this.props.bundle.cards?.map(
                                card => (
                                    <FastCard key={this.key++} data-key={this.key} card={card}/>
                                ))
                        }
                    </div>
                </div>
                <div className="bottom-side">
                   <div className="left-side">
                       <div className="infos-container">
                           <Info key_="PREZZO ACQUISTO" value={this.props.bundle.buy_price/Math.pow(10,18)}/>
                           <div className="bar-y"/>
                           <Info key_="GUADAGNI TOTALI" value={guadagniTotali/Math.pow(10,18)}/>
                           <div className="bar-y"/>
                       </div>
                       <button className="buy-button">
                           WIP
                       </button>
                   </div>
                    <div className="bar-x"/>
                   <div className="right-side">
                       <div className="infos-container">
                           <Info key_="DATA ACQUISTO" value={this.props.bundle.buy_date!==undefined&&this.props.bundle.buy_date.split("T")[0]}/>
                           <div className="bar-y"/>
                           <Info key_="GUADAGNI PREVISTI" value="1 ETH"/>
                           <div className="bar-y"/>
                       </div>
                       <button className="fav-button">
                           WIP
                       </button>
                   </div>
                </div>
            </div>
        )
    }

}

export default BundleCardPersonal