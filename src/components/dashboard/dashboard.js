import React from 'react'
import {View} from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BandConnector from '../tab/band_connector/bandConnector.js';
import Account from '../tab/account/account.js';
import ServerShare from '../tab/server_share/serverShare.js';
import styles from "./styles.js";

export default class Dashboard extends React.Component {

    state = {
        activeTab: 'share'
    }

    tabs = [
        {
            key: 'band',
            icon: 'watch',
            label: 'Band',
            barColor: '#040d14',
            pressColor: '#2979ff'
        },
        {
            key: 'account',
            icon: 'account',
            label: 'Account',
            barColor: '#040d14',
            pressColor: '#2979ff'
        },
        {
            key: 'share',
            icon: 'server',
            label: 'Data Share',
            barColor: '#040d14',
            pressColor: '#2979ff'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
    )
    
    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>            
                    { this.state.activeTab == 'band' && <BandConnector/> }
                    { this.state.activeTab == 'account' && <Account/> }
                    { this.state.activeTab == 'share' && <ServerShare/> }
                </View>
                <BottomNavigation
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    activeTab={this.state.activeTab}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View>
        );
    }
}