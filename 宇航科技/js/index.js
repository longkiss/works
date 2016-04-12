// JavaScript Document
function changepic(n){
	//建立一个数组
	var  picture =['banner.jpg','banners.jpg','bannerss.jpg'];
	 //获取到ID 
	 var a=document.getElementById('banner').src='images/' + picture[n];
	
	}
	
	
window.onload=function changeSelf(){
	var picture =['banner.jpg','banners.jpg','bannerss.jpg'];
	var a = document.getElementById('banner');
	var i =0;
	
	//etInterval(执行代码，时间) 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
	setInterval(function(){
		
		if(i===picture.length)i=0;
		a.src='images/' +  picture[i];
		i++;
		
		
		},2000);
}

