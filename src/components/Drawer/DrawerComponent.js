import React, {useEffect} from 'react';
import {useState} from "react";
import {Drawer, Button} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import TableComponent from "../Table/TableComponent";
import {useDispatch} from "react-redux";
import {getUser} from "../../redux/actions/get_user";
import {getUsers} from "../../redux/services/apis";

function DrawerComponent(props) {
    const [state,setState] =useState({ visible: false, childrenDrawer: false }) ;
    let data = props.data
    const showDrawer = () => {
        setState({
            visible: true,
        });
    };

    const onClose = () => {
        setState({
            visible: false,
        });
    };
    return (

        <React.Fragment>
            <Button type="primary" onClick={() =>showDrawer()}>
                { props.name}
            </Button>
            <Drawer
                title="List Users"
                width={520}
                closable={true}
                onClose={()=>onClose()}
                visible={state.visible}
                closeIcon={<CloseOutlined />}
                forceRender={true}
            >
                <TableComponent data={data.data} ></TableComponent>

            </Drawer>
        </React.Fragment>
    );
}

export default DrawerComponent;