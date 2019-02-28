'use strict';
/**
 * @param {Number} timestamp eg:1551323702241
 * @param {String} formatter eg:yyyy-MM-dd  yyyy/MM/dd yyyy-M-d yyyy/M/d yyyy-MM-dd hh:mm:ss
 * */
function Timestamp2String(timestamp,formatter) {
  let year=new Date(timestamp).getFullYear();
  let month=new Date(timestamp).getMonth()+1;
  let day=new Date(timestamp).getDate();
  let hour=new Date(timestamp).getHours();
  let minutes=new Date(timestamp).getMinutes();
  let seconds=new Date(timestamp).getSeconds();

  let monthFormatter=formatter.match(/[M]{1,2}/g);
  let dateFormatter=formatter.match(/[d]{1,2}/g);
  let hourFormatter=formatter.match(/[h]{1,2}/g);
  let minutesFormatter=formatter.match(/[m]{1,2}/g);
  let secondsFormatter=formatter.match(/[s]{1,2}/g);

  if(monthFormatter && monthFormatter.join("").length===2){
    month=handleDouble(month)
  }
  if(dateFormatter && dateFormatter.join("").length===2){
    day=handleDouble(day)
  }
  if(hourFormatter && hourFormatter.join("").length===2){
    hour=handleDouble(hour)
  }
  if(minutesFormatter && minutesFormatter.join("").length===2){
    minutes=handleDouble(minutes)
  }
  if(secondsFormatter && secondsFormatter.join("").length===2){
    seconds=handleDouble(seconds)
  }
  let format=formatter;
  while(/[A-z]+/.test(format)){
    if(format.match(/(y){1,4}/g)){
      format=format.replace((format.match(/(y){1,4}/g)).join(""),year);
    }
    if(format.match(/(M){1,2}/g)){
      format=format.replace((format.match(/(M){1,2}/g)).join(""),month);
    }
    if(format.match(/(d){1,2}/g)){
      format=format.replace((format.match(/(d){1,2}/g)).join(""),day);
    }
    if(format.match(/(h){1,2}/g)){
      format=format.replace((format.match(/(h){1,2}/g)).join(""),hour);
    }
    if(format.match(/(m){1,2}/g)){
      format=format.replace((format.match(/(m){1,2}/g)).join(""),minutes);
    }
    if(format.match(/(s){1,2}/g)){
      format=format.replace((format.match(/(s){1,2}/g)).join(""),seconds);
    }
  }
  return format
}

/**
 * @param {Number,String} para
 * @return {String,Number}
 * */
function handleDouble(para) {
  return (""+para).length>1 ? ""+para : "0"+para
}

module.exports=Timestamp2String;
