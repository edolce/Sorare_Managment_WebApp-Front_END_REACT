import {Component} from "react";
import BundleCardAuction from "../PAGE - bundlesAuctions/BundleCardAuction";
import BundleCardPersonal from "./BundleCardPersonal";

class PersonalPage extends Component{
    key=0

    constructor(props) {
        super(props);
        this.key=0
    }

    render() {
        return(
            <div className="personal-bundles-container">
                {
                    this.props.bundles?.map(
                        bundle => (
                            <BundleCardPersonal key={this.key++} data-key={this.key} bundle={bundle} openPopUp={() => this.props.openPopUp(bundle)}/>
                        ))
                }
            </div>
        )
    }


}


export default PersonalPage