'use strict';
/**
 * @param {Number} timeStamp eg:1551323702241
 * @param {String} formatter eg:yyyy-MM-dd  yyyy/MM/dd yyyy-M-d yyyy/M/d yyyy-MM-dd hh:mm:ss
 * */
function Timestamp2String(timeStamp,formatter){
    let date=new Date(timeStamp);
    let obj={
        "y+":date.getFullYear(),
        "M+":date.getMonth()+1,
        "d+":date.getDate(),
        "h+":date.getHours(),
        "m+":date.getMinutes(),
        "s+":date.getSeconds()
    };
    for(let item in obj){
        if(new RegExp("("+item+")").test(formatter)){
            formatter=formatter.replace(RegExp.$1,(RegExp.$1.length>1 ? handleDouble(obj[item]) : obj[item]))
        }
    }
    return formatter
}
/**
 * @param {Number,String} para
 * @return {String,Number}
 * */
function handleDouble(para) {
    return (""+para).length>1 ? ""+para : "0"+para
}

module.exports=Timestamp2String;
