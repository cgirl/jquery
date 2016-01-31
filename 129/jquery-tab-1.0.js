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
			evenRowClass:'evenRow',
			oddRowClass:'oddRow',
			currentRowClass:'currentRow',
			eventType:'mouseover',
			eventType2:'mouseout'
		}
		
		var options = $.extend(defaults, options);
		
		this.each(function(){
			//实现功能代码
			//优化1，$(this)进行缓存
			_this = $(this);
			//偶数行颜色设置
			_this.find('tr:even').addClass(options.evenRowClass);
			//奇数行颜色设置
			_this.find('tr:odd').addClass(options.oddRowClass);
			//
			/*优化2：一般不用如下的方法，而用bind会更加灵活
			_this.find('tr').mouseover(function(){
				$(this).addClass(options.currentRowClass);
			}).mouseout(function(){
				$(this).removeClass(options.currentRowClass);
			})*/
			_this.find('tr').bind(options.eventType,function(){
				$(this).addClass(options.currentRowClass);
			});
			_this.find('tr').bind(options.eventType2,function(){
				$(this).removeClass(options.currentRowClass);
			});
		})
	}
})(jQuery);