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
          name="name"
          label="Dinosaur Name"
          rules={[
            {
              required: true,
              message: 'Please enter a dinosaur name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Environment" name='environment' required>
          <Radio.Group name='environment' className='environment-type'>
            <Radio.Button value="land">Land</Radio.Button>
            <Radio.Button value="sea">Sea</Radio.Button>
            <Radio.Button value="air">Air</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Diet" name='diet' required>
          <Radio.Group name='diet' className='diet-type'>
            <Radio.Button value="carnivore">Carnivore</Radio.Button>
            <Radio.Button value="herbivore">Herbivore</Radio.Button>
            <Radio.Button value="omnivore">Omnivore</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="imageUrl"
          label="Add Image Url"
          rules={[
            {
              required: true,
              message: 'Please enter the dinosaur picture!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Description" required>
          <Input.TextArea placeholder='A brief description of your dinosaur!' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function AddDinosaurs({open, setOpen}) {


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
    
  };

  return (
    <div className='button-container'>
      <Button className='addDinoButton'
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