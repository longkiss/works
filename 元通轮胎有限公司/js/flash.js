// JavaScript Document
function changePic(n){
	var pictrues = ['banner.gif','banner1.jpg','banner2.jpg','banner3.jpg'];
	var a = document.getElementById('banners');
	a.src='images/index/' +  pictrues[n];

}

window.onload=function changeSelf(){
	var pictrues = ['banner.gif','banner1.jpg','banner2.jpg','banner3.jpg'];
	var a = document.getElementById('banners');
	var i =0;
	
	//etInterval(执行代码，时间) 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
	 setInterval(function(){
		
		if(i===pictrues.length)i=0;
		a.src='images/index/' +  pictrues[i];
		i++;
		
		
		
		},1000);
}