/*
https://ws3.sinaimg.cn/large/005BYqpgly1g25fe41f8vg308w08wahk.jpg
https://ws3.sinaimg.cn/large/005BYqpgly1g25frepif8g306y046ai6.jpg
https://ws3.sinaimg.cn/large/005BYqpgly1g25fryorujg30ci0irnpd.jpg
https://ws3.sinaimg.cn/large/005BYqpgly1g25fsc2epug30dc07iqn4.jpg

https://ws3.sinaimg.cn/large/005BYqpgly1g25fso8ny2g309e0cjtgg.jpg
https://ws3.sinaimg.cn/large/005BYqpgly1g25ft91i4ag305008we82.jpg
https://ws3.sinaimg.cn/large/005BYqpgly1g25fty0jaog30dc07i7wh.jpg
https://ws3.sinaimg.cn/large/005BYqpgly1g25fuku65gg30e80dchdu.jpg

https://ws3.sinaimg.cn/large/005BYqpgly1g25fvm2kagg30hs0a9hdw.jpg
https://ws3.sinaimg.cn/large/005BYqpgly1g25fw2obikg308w050wih.jpg
https://ws3.sinaimg.cn/large/005BYqpgly1g25fwl3dq0g30dc07ihdt.jpg
*/
var allPic = [
	{"name":"d1","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fe41f8vg308w08wahk.jpg"},
	{"name":"d2","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25frepif8g306y046ai6.jpg"},
	{"name":"d3","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fryorujg30ci0irnpd.jpg"},
	{"name":"d4","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fsc2epug30dc07iqn4.jpg"},
	{"name":"d5","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fso8ny2g309e0cjtgg.jpg"},
	{"name":"d6","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25ft91i4ag305008we82.jpg"},
	{"name":"d7","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fty0jaog30dc07i7wh.jpg"},
	{"name":"d8","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fuku65gg30e80dchdu.jpg"},
	{"name":"d9","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fvm2kagg30hs0a9hdw.jpg"},
	{"name":"d10","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fw2obikg308w050wih.jpg"},
	{"name":"d11","url":"https://ws3.sinaimg.cn/large/005BYqpgly1g25fwl3dq0g30dc07ihdt.jpg"},
];
var storage = window.localStorage;
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse) {
	if(message.msg == 'v2ex') {
		storage.setItem('toolstatus',message.value);
		sendResponse({farewell: "ok"});
	}else {

	}
});
function change(method) {
	if(method == 'moreRandom') {
		var pic = document.getElementsByClassName("avatar");
		for(var i=0;i<pic.length;i++) {
			var num = parseInt(Math.random()*allPic.length);
			pic[i].src = allPic[num].url;
		}
	}else if(method == 'gif') {
		var pic = document.getElementsByClassName("avatar");
		var num = parseInt(Math.random()*allPic.length);
		for(var i=0;i<pic.length;i++) {
			pic[i].src = allPic[num].url;
		}
	}else if(method == 'close') {
		
	} else {
		var pic = document.getElementsByClassName("avatar");
		for(var i=0;i<pic.length;i++) {
			pic[i].src = "https://ws3.sinaimg.cn/large/005BYqpgly1g25gyvkoorj309009a771.jpg";
		}
	}
}

if(storage.getItem("toolstatus") == 't1') {
	change("moreRandom");
}else if(storage.getItem("toolstatus") == 't2') {
	change("gif");
}else if(storage.getItem("toolstatus") == 't3') {
	change("else");
}else if(storage.getItem("toolstatus") == 't4') {
	change("close");
}else {
	change("moreRandom");
}





