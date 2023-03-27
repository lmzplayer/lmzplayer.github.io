var pre_hour;
var pre_second;
var pre_minute;
var now_hour;
var now_second;
var now_minute;
function get_time(){
	var date=new Date();
	pre_hour=date.getHours();
	pre_minute=date.getMinutes();
	pre_second=date.getSeconds();
	var hour=date.getHours();
    var s="现在是";
    var ss="距离考研还有";
    var sss="天，加油！";

    const setTime = new Date("2023/12/23 00:00:00");
    const restSec = setTime.getTime() - date.getTime();
    const leftday = parseInt(restSec / (60*60*24*1000));

	if(hour<=12)
	{
		var s1="Good morning!";
		window.alert(s+date+"\n"+s1+"\n"+ss+leftday+sss)
	}
	else if(hour<=18)
	{
		var s2="Good afternoon!";
		window.alert(s+date+"\n"+s2+"\n"+ss+leftday+sss)
	}
	else if(hour>18)
	{
		var s3="Good evening!";
		window.alert(s+date+"\n"+s3+"\n"+ss+leftday+sss)
	}
}