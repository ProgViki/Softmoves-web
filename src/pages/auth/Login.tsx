import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const Login: React.FC = () => {
  // const navigate = useNavigate(); 


  const onFinish = (values: { email: string; password: string }) => {
    console.log('Success:', values);
    
  };


  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <div className="min-h-screen flex overflow-hidden">

      <div className="w-full flex flex-col bg-white relative overflow-hidden">
        <div className="absolute top-4 left-4">
          <img src="/src/assets/Logo.png" alt="Logo" className="h-12 w-25" />
        </div>
        <div className="mt-20 flex items-center justify-center">
          <div className="w-full max-w-md p-8 space-y-1">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Portal Login</h2>
              <p className="text-sm">Hi, Welcome back</p>
            </div>

            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
                style={{ marginBottom: '12px' }}
              >
                <Input placeholder="E.g sample@gmail.com" size="small" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                style={{ marginBottom: '12px' }}
              >
                <Input.Password placeholder="Enter your password" size="small" />
              </Form.Item>
              <div className='flex mb-[12px] w-full justify-between items-center'>
                <Checkbox>Remember Me</Checkbox>
                <a href='/forgot' className='text-blue-950 hover:text-blue-950 ml-2 font-semibold '>Forgot password?</a>
              </div>


              <Form.Item style={{ marginBottom: '12px' }}>
                <Button type="primary" htmlType="submit" size="small" className="w-full font-semibold bg-blue-950 hover:bg-blue-700">
                  Submit
                </Button>
              </Form.Item>
            </Form>

            {/* Additional Links and Info */}
            <div className="space-y-4 text-sm">
              <p className="text-center">
                Not registered yet
                <a href="/register" className="text-blue-950 ml-2 font-semibold">
                  Register Now <span></span>
                </a>
              </p>
              <p className="text-center text-gray-300">
                © 2024 All Rights Reserved Viki
              </p>
              <p className="text-gray-300 flex justify-center gap-6">
                <a href="#">Terms</a>
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Login;
