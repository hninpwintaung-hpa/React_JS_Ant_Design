import { useTable } from "@refinedev/antd";
import { List, Table } from "antd";
import React from "react";

interface IFormValue {
    name : string,
    email : string,
    skill : string,
    id :number
}
function UserList(){
        const { tableProps } = useTable<IFormValue>();
    return(
        <List>
            User List
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="name" title = "Name" />
                <Table.Column dataIndex="email" title = "Email"/>
                <Table.Column dataIndex="skill" title="Skills"/>
            </Table>
        </List>
    )
}
export default UserList;