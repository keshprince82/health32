import * as React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
  MailOutlined,
  GlobalOutlined,
  PhoneOutlined ,
  SettingOutlined,
  HeartFilled,
} from "@ant-design/icons";

const { Meta } = Card;
const UserCard = ({ user, handleEdit, handleFavourite ,handleDelete}) => {
  return (
    <>
      <Card
        style={{ margin: 15 }}
        cover={
          <img
            alt="example"
            width={200}
            height={200}
            src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user?.username}`}
          />
        }
        actions={[
          user?.favourite ?<HeartFilled style={{color:"red"}} key="like" onClick={() =>{handleFavourite(user)}}/> : <HeartOutlined style={{color:"red"}}  key="like" onClick={() =>{handleFavourite(user)}} />,
          <EditOutlined key="edit" onClick={()=>{handleEdit(user)}} />,
          <DeleteFilled key="delete" onClick={()=>{handleDelete(user)}} />,
        ]}
      >
        {/* <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title="Card title"
          description="This is the description"
        /> */}
        <h3>{user?.name}</h3>
    <p> <MailOutlined /> {user?.email}</p>
    <p><PhoneOutlined />{user?.phone}</p>
    <p> <GlobalOutlined />{user?.website}</p>
      </Card>
    </>
  );
};

export default UserCard;
