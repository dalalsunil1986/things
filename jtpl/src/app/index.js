import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import {isIOS, isMobile} from 'react-device-detect';

import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';
import asyncComponent from '../util/asyncComponent';


class App extends React.Component {

    render() {
        const {match, drawerType} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';
        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            $('#body').addClass('ios-mobile-view-height')
        }
        else if ($('#body').hasClass('ios-mobile-view-height')) {
            $('#body').removeClass('ios-mobile-view-height')
        }
        return (
            <div className={`app-container ${drawerStyle}`}>
                <Sidebar/>
                <div className="app-main-container">
                    <div className="app-header">
                        <Header/>
                    </div>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Route path={`${match.url}/sample-page`}
                                   component={asyncComponent(() => import('./routes/SamplePage'))}/>
                        </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {drawerType} = settings;
    return {drawerType}
};
export default connect(mapStateToProps)(App);