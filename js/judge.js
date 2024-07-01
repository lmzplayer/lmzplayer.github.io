
function judge() {
    var Date;
    Date=document.getElementsByName("date")[0].value;
    if(Date=="")
    {
        alert("请填写生日后再提交!")
        return false;
    }
    if(Date!=20020331)
    {
        alert("请检查日期是否有误或者格式是否有误!")
        return false;
    }
    alert("Sabrina毕业快乐!")
    return true;
}

function play() {
    var mus=document.getElementById("bg");
    mus.play();
}