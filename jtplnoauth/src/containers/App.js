import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss'
import 'styles/app.scss';
import defaultTheme from './themes/defaultTheme';
import AppLocale from '../languageProvider';

import MainApp from 'app/index';

class App extends Component {

    render() {
        const {match, location, locale} = this.props;
        if (location.pathname === '/') {
            return ( <Redirect to={'/app/sample-page'}/> );
        }

        const currentAppLocale = AppLocale[locale.locale];
        return (
            <MuiThemeProvider theme={createMuiTheme(defaultTheme)}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <IntlProvider
                        locale={currentAppLocale.locale}
                        messages={currentAppLocale.messages}>
                        <div className="app-main">
                            <Route path={`${match.url}app`} component={MainApp}/>
                        </div>
                    </IntlProvider>
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({settings,}) => {
    const {sideNavColor, locale} = settings;
    return {sideNavColor, locale}
};

export default connect(mapStateToProps)(App);

