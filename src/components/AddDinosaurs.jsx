import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title="Add a new dinosaur"
      okText="New Discovery"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            // post
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Unsuccessful dig:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          environment: 'habitat',
        }}
      >
        <Form.Item
          name="title"
          label="Dinosaur Name"
          rules={[
            {
              required: true,
              message: 'Please enter the dinosaur name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="environment" className="radio-buttons">
          <Radio.Group>
            <Radio.Button value="land">Land</Radio.Button>
            <Radio.Button value="sea">Sea</Radio.Button>
            <Radio.Button value="air">Air</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default function AddDinosaurs() {
  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);

    fetch(`${process.env.REACT_APP_API_URL}/dinosaurs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));

    setOpen(false);
    window.location.reload()
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        New Dinosaur Discovery
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};