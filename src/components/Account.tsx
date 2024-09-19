import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";


export default function Account(props: {user: string, name: string}) {

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: 'Account',
          icon: <UserOutlined />,
        },
        {
          key: '2',
          label: 'Sign Out',
          icon: <LogoutOutlined />,
        },
    ]
    return(
        <Dropdown menu={{items}}>
        <div className="flex space-x-[12px]">
            <Avatar className="account-avatar text-[10px]" size={32}>VS</Avatar>
            <div className="space-x-[6px] flex items-center">
                <p className="account">{props.name}</p>
                <DownOutlined className="text-xs mt-1"/>
            </div>
        </div>
        </Dropdown>
    )
}