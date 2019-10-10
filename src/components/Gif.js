import React from 'react';

var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var styles = {
    minHeight: '310px',
    margin: '0.5em'
};


export default class Gif extends React.Component {

    get getUrl() {
        return this.props.sourceUrl || GIPHY_LOADING_URL;
    }

    render() {
        var url = this.props.loading ? GIPHY_LOADING_URL: this.props.url;

        return (
            <div style={styles}>
                <a href={this.getUrl()} title='view this on book store' target='new'>
                    <img id='gif' src={url} className="image" alt="gif loader"/>
                </a>
            </div>
        );
    };
};