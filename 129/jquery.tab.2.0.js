/*
官方提供的模板

(function($){
	$.fn.plugin = function(options){
		var defaults = {
			//各种参数，各种属性
		}
		
		var options = $.extend(defaults, options);
		
		this.each(function(){
			//实现功能代码
		})
	}
})(jQuery)*/

(function($){
	$.fn.biyj = function(options){
		var defaults = {
			//各种参数，各种属性
			currentClass:'current',
			tabNav:'.tabNav>li',
			tabContent:'.tabContent>div',
			eventType:'click'
		}
		
		var options = $.extend(defaults, options);
		
		this.each(function(){
			var _this = $(this);
			_this.find(options.tabNav).bind(options.eventType, function(){
				$(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
				var index = $(this).index();
				_this.find(options.tabContent).eq(index).show().siblings().hide();
			})
		})
		//为了链式操作，最好返回
		return this;
	}
})(jQuery);