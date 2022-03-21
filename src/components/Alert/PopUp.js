import React from 'react';
import {Alert} from "antd";
function PopUp(props) {
    return (
        <Alert message={"Đức Anh đẹp trai"}
               type={"info"}
               description={"Đức ANh"}
               showIcon={true}
        >


        </Alert>
    );
}

export default PopUp;