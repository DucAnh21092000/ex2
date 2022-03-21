import React from 'react';
import {Button, notification, Divider, Space} from "antd";


const Context = React.createContext({ name: 'Đức Anh' });


function Notification(props) {
    let typee
    const user = "Đức Anh";
    const message= "Success";
    console.log(1)
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement,message,typee) => {

        api.warning({
            message: `Notification ${message}`,
            description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
            placement,
        });
    };
    openNotification("topRight","Success","success")
}

export default Notification;