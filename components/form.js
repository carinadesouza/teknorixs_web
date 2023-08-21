import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import Styles from "../styles/Home.module.css"
const CustomForm = () => {
    const [form] = Form.useForm(); // Uncomment this line
  
    useEffect(() => {
      form.validateFields(); // Validate fields at the beginning
    }, [form]); // Add form as a dependency
  
    const onFinish = (values) => {
      console.log('Finish:', values);
    };

  return (
    <div className={Styles.formStyle}> 
      <div className={Styles.formContainer}>
      <h1>Want to Learn More?</h1> 
      <p>Share your contact details and one of our Product Specialists will get in touch with you.</p>
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              
              message: 'Please input your username!',
            },
          ]}
        >
          <Input 
          type="text"  />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
             
              message: 'Please input your password!',
            },
          ]}
        >
          <Input
           
            type="password"
          
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
             
            >
             Contact us
            </Button>
          )}
        </Form.Item>
      </Form> 
      </div>
    </div>
  );
};

export default CustomForm;
