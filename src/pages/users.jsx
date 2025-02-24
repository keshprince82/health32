import React from "react";
import UserCard from "../helperComponents/Card";
import { useEffect } from "react";
import { useState } from "react";

import { Button, Col, Form, Input, Row } from "antd";
import ModalPopUp from "../helperComponents/Modal";

const Users = () => {
  const [userData, setUserData] = useState();
  const [userInAction, setUserInAction] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (user) => {
    setUserInAction(user);
    setShowModal(true);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        // fetch(`https://avatars.dicebear.com/v2/avataaars/${users[0].username}.svg?options[mood][]=happy`)
        setUserData(users);
      });
  }, []);
  const onFinish = (values) => {
    setUserData(
      userData?.map((item) => {
        if (item.id == userInAction?.id) {
          item = { ...item, ...values };
        }
        return item;
      })
    );
    setShowModal(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleFavourite = (user) =>{
    if('favourite' in user){

        user ={ ... user, favourite:!user.favourite}
    }else{
        user ={...user,favourite:true}
    }

  setUserData(  userData?.map((item) => {
        if (item.id == user?.id) {
          item = { ...user };
        }
        return item;
      }))

  }

  const handleDelete = (user) =>{

  setUserData(  userData?.filter(item=>item.id != user.id))

  }
  return (
    <>
      <Row gutter={[10, 10]}>
        {userData?.map((user) => {
          return (
            <Col xl={6} lg={8} md={12} xs={24}>
              <UserCard user={user} handleEdit={handleEdit} handleFavourite={handleFavourite} handleDelete={handleDelete} />
            </Col>
          );
        })}
      </Row>

      <ModalPopUp
        open={showModal}
        handleCancel={()=>{setShowModal(false)}}
        
        title="Update user"
        footer={[
          <Button
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </Button>,
          <Button form="myForm" key="submit" htmlType="submit" type="primary">
            Ok
          </Button>,
        ]}
      >
        <Form
          id="myForm"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{
            name: userInAction ? userInAction.name : "",
            email: userInAction ? userInAction.email : "",
            phone: userInAction ? userInAction.phone : "",
            website: userInAction ? userInAction.website : "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: 'email',required: true, message:"Please input your email correctly" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: "Please input your website!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </ModalPopUp>

      {/* <UserCard
  
  
  /> */}
    </>
  );
};

export default Users;
