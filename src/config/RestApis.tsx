const server_loadbalancer = 'http://34.163.188.223:9090';
const server_local = 'http://localhost:9090';

const server = server_loadbalancer;
const apis = {
    authService: server+'/user',
    followService: server+'/follow',
    postService: server+'/post',
    userService: server+'/user',
    commentService: server+'/comment',
    media: server+'/media'
}

export default apis;