import request from '@/plugins/request';
export const Login = (pdata)=> {
    return request({url:"/login",method:'post',data:pdata});
};
