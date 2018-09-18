/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://xtest.xmanlegal.com';

var config = {
    'loading': '/lib/image-loading.png',
    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/webapp/login.php`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/webapp/user.php`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/webapp/tunnel.php`,

        // 上传图片接口
        uploadUrl: `${host}/webapp/upload.php`,

        mobileUrl: `${host}/webapp/mobile.php`
    }
};

module.exports = config;