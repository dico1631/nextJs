import React from "react";

export default function handler(request , response){
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    var day = currentTime.getDate();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // 현재 시간을 문자열로 포맷팅
    var currentTimeString = year + "-" + addZero(month) + "-" + addZero(day) + " " + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    


    return response.status(200).json(currentTimeString);
}

function addZero(num) {
    return (num < 10 ? '0' : '') + num;
}