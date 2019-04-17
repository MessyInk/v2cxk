var n = parseInt(Math.random()*2);
var picUrl;
if(n == 1) {
	picUrl = "images/d1.gif";
}else {
	picUrl = "images/bg.jpg";
}
$.vegas('slideshow', {
backgrounds: [
{ src: picUrl, fade: 1000, delay: 9000 },
]
});

var storage = window.localStorage;
if(storage.getItem("status") == 't1') {
	$("#t").get(0).selectedIndex = 0;
}else if(storage.getItem("status") == 't2') {
	$("#t").get(0).selectedIndex = 1;
}else if(storage.getItem("status") == 't3') {
	$("#t").get(0).selectedIndex = 2;
}else if(storage.getItem("status") == 't4') {
	$("#t").get(0).selectedIndex = 3;
}else {
	$("#t").get(0).selectedIndex = 0;
}
$("#t").change(function(){
	storage.setItem("status",$("#t").val());
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id,{msg:'v2ex', value:$("#t").val()}, function(response){});
	});
});
	



