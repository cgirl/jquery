//插件1.直接给jquery添加全局函数
jQuery.myAlert1 = function(str){
	alert(str);
}
jQuery.myAlert2 = function(str){
	alert(str);
}

//插件2.用extend方法
jQuery.extend({
	myAlert3:function(str){
		alert(str);
	},
	myAlert4:function(str){
		alert(str);
	},
})

//插件3.使用命名空间
jQuery.zixueit={
	myAlert1:function(str){
		alert(str);
	}
}