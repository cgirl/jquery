$.zixueit={
	centerDiv:function(obj){
		obj.css({
			'top':($(window).height()-obj.height())/2,
			'left':($(window).width()-obj.width())/2,
			'position':'absolute'
		})
		
		//为了插件能进行链式操作，一定要记得返回这个对象
		return obj;
	}
}