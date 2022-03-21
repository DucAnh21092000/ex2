import React, {useEffect, useState} from 'react';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    notification,
} from 'antd';
import Footer from "../../components/footer/Footer";
import {createUser, getUsers} from "../../redux/services/apis";
import {useDispatch, useSelector} from "react-redux";
import checkExistEmail from "../../resouces/js/checkExistEmail";
import DrawerComponent from "../../components/Drawer/DrawerComponent";
import {getUser} from "../../redux/actions/get_user";

const Context = React.createContext({ name: 'Đức Anh' });
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 5,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 5,
        },
    },
};

    function Create(props) {
        const [form] = Form.useForm();
        const [api, contextHolder] = notification.useNotification();
        const dispatch = useDispatch();
        const data = useSelector(state => state.getAllUsers)

        useEffect( ()=> {
            dispatch(getUser())
        },[])
        const openNotification = (placement,message,type) => {
            if(type === 'success'){
                api.success({
                    message: `Notification ${message}`,
                    description: <Context.Consumer>{({ name }) => `Tạo tài khoản thành công!`}</Context.Consumer>,
                    placement,
                });
            }
            else if(type === 'error'){
                api.error({
                    message: `Notification ${message}`,
                    description: <Context.Consumer>{({ name }) => `Tạo tài khoản thất bại!`}</Context.Consumer>,
                    placement,
                });
            }
            else if(type === 'warm'){
                api.warning({
                    message: `Notification ${message}`,
                    description: <Context.Consumer>{({ name }) => `Email đã tồn tại!`}</Context.Consumer>,
                    placement,
                });
            }
        };
        const onFinish = (values) => {
            getUsers()
                .then( rs => {
                    let result = checkExistEmail(values,rs.data)
                    if(result){
                        openNotification('topRight',"Warmning",'warm')
                    }
                    else {
                        createUser(values)
                            .then(rs => {
                                if(rs.statusText === "Created"){
                                    openNotification('topRight',"Success",'success')
                                    dispatch(getUser())
                                }
                            })

                            .catch(errors => {
                                let rs = errors.toJSON()
                                if(rs.name === "Error"){
                                    openNotification('topRight',"Error",'error')
                                }
                            })

                    }
                })
        };

    return (
       <div className={"body d-flex justify-content-center"}>

           <Form
               {...formItemLayout}
               form={form}
               name="register"
               onFinish={onFinish}
               size={"middle"}
               scrollToFirstError
               layout={"horizontal"}
               className={"w-50 d-flex justify-content-center flex-column"}
               labelAlign={"left"}
           >
               <h1 className={"text-center text-white"}> Sign Up Today!</h1>
               <Form.Item
                   name="email"
                   label="E-mail"
                   rules={[
                       {
                           type: 'email',
                           message: 'The input is not valid E-mail!',
                       },
                       {
                           required: true,
                           message: 'Please input your E-mail!',
                       },
                   ]}
                   className={""}
               >
                   <Input />
               </Form.Item>

               <Form.Item
                   name="password"
                   label="Password"
                   rules={[
                       {
                           required: true,
                           message: 'Please input your password!'
                       },
                   ]}
                   hasFeedback
               >
                   <Input.Password />
               </Form.Item>

               <Form.Item
                   name="confirm"
                   label="Confirm Password"
                   dependencies={['password']}
                   hasFeedback
                   tooltip={"Confirm your password! "}
                   rules={[
                       {
                           required: true,
                           message: 'Please confirm your password!',
                       },
                       ({ getFieldValue }) => ({
                           validator(_, value) {
                               if (!value || getFieldValue('password') === value) {
                                   return Promise.resolve();
                               }

                               return Promise.reject(new Error('The two passwords that you entered do not match!'));
                           },
                       }),
                   ]}
               >
                   <Input.Password  />
               </Form.Item>

               <Form.Item
                   name="username"
                   label="Username"
                   tooltip="What do you want others to call you?"
                   rules={[
                       {
                           required: true,
                           message: 'Please input your Username!',
                           whitespace: true,
                       },
                   ]}
               >
                   <Input  />
               </Form.Item>

               <Form.Item
                   name="gender"
                   label="Gender"
                   rules={[
                       {
                           required: true,
                           message: 'Please select gender!',
                       },
                   ]}
               >
                   <Select placeholder="select your gender">
                       <Option value="male">Male</Option>
                       <Option value="female">Female</Option>
                       <Option value="other">Other</Option>
                   </Select>
               </Form.Item>


               <Form.Item
                   name="agreement"
                   valuePropName="checked"
                   rules={[
                       {
                           validator: (_, value) =>
                               value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                       },
                   ]}
                   {...tailFormItemLayout}
               >
                   <Checkbox>
                       I have read the <a href="">agreement</a>
                   </Checkbox>
               </Form.Item>
               <Form.Item {...tailFormItemLayout}>
                   <Button type="primary" htmlType="submit">
                       Register
                   </Button>
               </Form.Item>
               <Footer></Footer>
               {contextHolder}

           </Form>
           <div className={"drawer"}>
               <DrawerComponent data={data.users}  name={"Show Users"}></DrawerComponent>
           </div>

       </div>
    );
}

export default Create;