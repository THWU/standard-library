function right(str, num) {
    return str.substring(str.length - num, str.length)
}

function left(str, num) {
    return str.substring(0, num)
}

function leftField(str, delimit) {
    var returnValue = str;
    var indexNumber = str.indexOf(delimit);
    if (indexNumber >= 0) {
        returnValue = str.substring(0, str.indexOf(delimit))
    }
    return returnValue;
}

function rightField(str, delimit) {
    var returnValue = str;
    var indexNumber = str.indexOf(delimit);
    if (indexNumber >= 0){
        returnValue = str.substring(indexNumber + delimit.length, str.length)
    }
    return returnValue;
}

function getThisFullDateTime() {
	
	var dt = new Date();
	var year = dt.getFullYear();
	var month = "00" + (dt.getMonth() + 1);
	month = right(month, 2);
	var day = "00" + dt.getDate();
	day = right(day, 2);
	var hour = "00" + dt.getHours();
	hour = right(hour, 2);
	var minute = "00" + dt.getMinutes();
	minute = right(minute, 2);
	var second = "00" + dt.getSeconds();
	second = right(second, 2);
	
	var fullDateTime = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second
	return fullDateTime;
}

//  位元組單位轉換
function formatBytes(bytes, decimals) {
   if (bytes == 0) return '0 Byte';
   var k = 1024;
   var dm = decimals + 1 || 3;
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   var i = Math.floor(Math.log(bytes) / Math.log(k));
   return (bytes / Math.pow(k, i)).toPrecision(dm) + ' ' + sizes[i];
}

//  倒轉字串
function reverse(s){
    return s.split("").reverse().join("");
}

function selectTextAtInput(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNode(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

//  取得差距工作天
function getWorkingDays(startDate, endDate){
    var result = 0;

    var currentDate = new Date(startDate.getTime());
    while (currentDate <= endDate)  {  

        var weekDay = currentDate.getDay();
        if (weekDay != 0 && weekDay != 6) {
            result++;
        }

        currentDate.setDate(currentDate.getDate()+1); 
    }

    return result;
}

//  增加工作天
function addWorkDay(startDate, days) {
    var currentDate = new Date(startDate.getTime());
    while (days > 0) {
        
        currentDate.setDate(currentDate.getDate() + 1);
        var weekDay = currentDate.getDay();
        if (weekDay != 0 && weekDay != 6) {
             days --;
        }
    }
    return currentDate;
}