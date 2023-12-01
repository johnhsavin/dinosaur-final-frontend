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
          modifier: 'public',
        }}
      >
        <Form.Item
          name="title"
          label="Dinosaur Name"
          rules={[
            {
              required: true,
              message: 'Please input the namde of the dinosaur!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="Land">Land</Radio>
            <Radio value="Sea">Sea</Radio>
            <Radio value="Air">Air</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AddDinosaurs = () => {
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
        New Discovery from add dinos
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
export default AddDinosaurs;