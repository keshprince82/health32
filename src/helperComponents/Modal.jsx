import { Button, Modal } from "antd";
import React, { Component } from "react";
const ModalPopUp = ({ handleCancel, handleOk, open, title, children, footer }) => {
  return (
    <Modal
      title={title}
      open={open}
      // onOk={handleOk}
      footer={footer}
      onCancel={handleCancel}
    >
      {children}
      {/* <p>{modalText}</p> */}
    </Modal>
  );
};

export default ModalPopUp;
