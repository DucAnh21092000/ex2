import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
    },
    {
        title: 'Password',
        dataIndex: 'password',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
    },
];


function TableComponent(props) {
    const data = props.data
    console.log(data)
    return (
        <div>
            <h4>Small size table</h4>
            <Table columns={columns} dataSource={data} size="small" />
        </div>
    );
}

export default TableComponent;