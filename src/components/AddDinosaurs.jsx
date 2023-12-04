import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const environment = e.target.environment.value;
    const description = e.target.description.value;
    const newDinosaur = { name, environment, description };

    // console.log(newDinosaur)

    fetch(`${process.env.REACT_APP_API_URL}/dinosaurs/${environment}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDinosaur),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

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
        onSubmit={handleFormSubmit}
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
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

        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio.Button value="land">Land</Radio.Button>
            <Radio.Button value="sea">Sea</Radio.Button>
            <Radio.Button value="air">Air</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function AddDinosaurs() {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
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