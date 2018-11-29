import React from 'react'
import axios from "axios";

// Courtesy of https://feathericons.com/
const Icon = () => <i className='icon fa fa-plug'/>;

class HelloWorldPlugin {
    initialize(registry, store) {
        registry.registerChannelHeaderButtonAction(
            // icon - JSX element to use as the button's icon
            <Icon />,
            // action - a function called when the button is clicked, passed the channel and channel member as arguments
            // null,
            () => {
                axios.get(`http://172.18.50.67:8065/plugins/com.mattermost.server-dbconnection`)
                    .then(res => {
                        const response = res.data;
                        alert("Risposta" + response)
                    })
            },
            // dropdown_text - string or JSX element shown for the dropdown button description
            "Hello World",
        );
    }
}

window.registerPlugin('com.mattermost.webapp-hello-world-dbConnection', new HelloWorldPlugin());
