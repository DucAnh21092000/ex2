import React, {useEffect} from 'react';
import {Form, Input, Checkbox, Button, notification} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import Footer from "../../components/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {createUser, getUsers} from "../../redux/services/apis";
import checkExistEmail from "../../resouces/js/checkExistEmail";
import {getUser} from "../../redux/actions/get_user";
import checkExistAccount from "../../resouces/js/checkExitAccount";
import DrawerComponent from "../../components/Drawer/DrawerComponent";
const Context = React.createContext({ name: 'Đức Anh' });

function Login(props) {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const dispatch = useDispatch();
    const data = useSelector(state => state.getAllUsers)
    useEffect( ()=> {
        dispatch(getUser())
    },[])
    const openNotification = (placement,message,type,username) => {
        if(type === 'success'){
            api.success({
                message: `Login ${message}`,
                description: <Context.Consumer>{({ name }) => `Hello `+ username +` !`}</Context.Consumer>,
                placement,
            });
        }
        else if(type === 'error'){
            api.error({
                message: `Login ${message}`,
                description: <Context.Consumer>{({ name }) => `Đăng nhập thất bại!`}</Context.Consumer>,
                placement,
            });
        }
    };
    const onFinish = (values) => {
        getUsers()
            .then( rs => {
                let result = checkExistAccount(values,rs.data)
                if(result.state){
                    openNotification('topRight',"Success",'success',result.username)
                }
                else {
                    openNotification('topRight',"Failed",'error')
                }
            })
    };

    useEffect( () => {
        document.title= `Trang Login`
    },[])

    return (
        <React.Fragment >
            <div className={"body d-flex justify-content-center"}>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}

                >
                    <h1 className={"text-center text-white text-uppercase"}> Classy login form</h1>
                    <Form.Item
                        className={"input-width"}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                            {
                                type:"email",
                                message:"The input is not valid E-mail!"
                            }
                        ]}

                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />}  placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item
                        className={"input-width"}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },

                        ]}

                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className={"text-white"}>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot text-white" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button mb-3">
                            Log in
                        </Button>
                        Or <a href="/create">register now!</a>
                    </Form.Item>
                </Form>
            </div>
            {contextHolder}
            <div className={"drawer"}>
                <DrawerComponent data={data.users}  name={"Show Users"}></DrawerComponent>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Login;