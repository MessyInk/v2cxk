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
if(storage.getItem("toolTo") != null) {findYou()}
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
$("html").dblclick(function(){$('html,body').animate({scrollTop: '0px'}, 800);});

$(".reply_content").click(function(){
	var textEx = /@<a href="\/member\/.+">.+<\/a>/;
	var result = textEx.exec($(this).html());
	if(result != null) {
		dontYou();
		var str1 = result[0].split("</a>"); 
		var str2 = "";
		for(var i = 0;i<str1.length;i++) {
			if(str1[i] !="") {
				if(str2 == "") {
					str2 = str1[i].split("@<a href=\"/member/")[1].split("\">")[1];  //     \">
				} else {
					str2 = str2 + "@" + str1[i].split("@<a href=\"/member/")[1].split("\">")[1];
				}
			}
		}
		storage.setItem("toolTo",str2);
		
		findYou();
	} else {
	console.log("no match");
	}
});

function findYou(){
	if(storage.getItem("toolTo") != null ){
	$("a").each(function(){
	var text = storage.getItem("toolTo").split("@");
	for(var i = 0;i<text.length;i++) {
		if($(this).text()==text[i]) {
				$(this).css("color","red");
			}
		}
	});
}
}
function dontYou(){
	if(storage.getItem("toolTo") != null ){
	$("a").each(function(){
	var text = storage.getItem("toolTo").split("@");
	for(var i = 0;i<text.length;i++) {
		if($(this).text()==text[i]) {
				$(this).css("color","gray");
			}
		}
	});
}
}






