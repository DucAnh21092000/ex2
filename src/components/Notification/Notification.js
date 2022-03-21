import React from 'react';
import {Button, notification, Divider, Space} from "antd";
import { RadiusUprightOutlined} from "@ant-design/icons";

const Context = React.createContext({ name: 'Đức Anh' });


function Notification(props) {
    let typee
    const user = "Đức Anh"; 
    const message= "Success";
    console.log(1)
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement,message,typee) => {

        api[typee]({
            message: `Notification ${message}`,
            description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
            placement,
        });
    };

    return (
        <Context.Provider value={{ name: 'Đức Anh' }}>
            {contextHolder}
            <Space>
                <Button type="primary" onClick={() => openNotification('topRight',message,typee="error")}>

                   Success
                </Button>
            </Space>
            <Divider />

        </Context.Provider>
    );
}

export default Notification;