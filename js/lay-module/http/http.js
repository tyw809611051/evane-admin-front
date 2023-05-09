layui.define(function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
    var obj = {
      api:"http://127.0.0.1:7680/"  //根据自己项目的端口而定
    }; 
    
    //输出test接口
    exports('http', obj);	//定义变量名来接收obj变量
  });   