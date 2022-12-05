import {Component} from "react";
import PersonalCardPopUp from "./PersonalCardPopUp";
import "./PersonalPagePopUp.css";

class PersonalPagePopUp extends Component{
    key=0

    constructor(props) {
        super(props);
        this.key=0
    }


    render() {
        return(
            <>
                <div className="personal-page-popup-pseudo-container"/>
                <div className="personal-page-popup-container">
                    <div className="close-button" onClick={() => this.props.closePopUp()}>
                        CLOSE
                    </div>
                    {
                        this.props.bundle.cards?.map(
                            card => (
                            <PersonalCardPopUp key={this.key++} data-key={this.key} card={card}/>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default PersonalPagePopUp