import request from '@/plugins/request';
export const AddWidget = (pdata)=> {
    return request({url:"/addWidget",method:'post',data:pdata});
};

export const List = ()=> {
    return request({url:"/list",method:'post',data:{}});
};

export const UpdateWidget = (pdata)=> {
    return request({url:"/updateWidget",method:'post',data:pdata});
};