import './Header.css';
import logoImage from './LOGO WHITE.png';



function Header(props){



    return(
        <div className="header">
            <div className="logo">
                <img src={logoImage} alt="LOGO"/>
            </div>
            <div className="menu">
                <div className="menu-sub">
                    {props.showAuctionsBundles &&
                        <>
                            <span className="bundle-auction-main">
                                BUNDLES AUCTIONS
                                <div className="line"></div>
                            </span>
                            <span className="personal-area-second" onClick={ () => props.changePage()}>
                                PERSONAL AREA
                            </span>
                            <div className="red-bundle triangle"></div>
                            <div className="black-bundle triangle"></div>
                            <div className="white-bundle triangle"></div>
                        </>}
                    {!props.showAuctionsBundles &&
                        <>
                            <span className="personal-area-main">
                                PERSONAL AREA
                                <div className="line"></div>
                            </span>
                            <span className="bundle-auction-second" onClick={ () => props.changePage()}>
                                BUNDLES AUCTIONS
                            </span>
                            <div className="red-personal triangle"></div>
                            <div className="black-personal triangle"></div>
                            <div className="white-personal triangle"></div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header