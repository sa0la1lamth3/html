
let timeSale = 7200;
let theEndTimeSale;

//hien thi so gio phut giay con lai
let startSale = function(time) {
    return time < 10 ? '0' + time : time;
};

//code thoi gian giam ve 0
theEndTimeSale = setInterval(function(){
    countDownSale(timeSale--);
}, 1000);

//khi so giay chay ve 0 truong trinh ket thuc
let countDownSale = function(second){
    if(second ==0 ){
        clearInterval(theEndTimeSale);
    }
    let hours = Math.floor(second / 3600);
    let minutes = Math.floor((second % 3600) / 60);
    let seconds = second - hours * 3600 - minutes * 60;


    $('#hour').text(startSale(hours));
    $('#minute').text(startSale(minutes));
    $('#second').text(startSale(seconds));
};




//code mua khoa hoc

let amountOfBought = 0;
let buyCourse = function(event) {
    event.target.style.display = "none";
    $('#amountofbought').text(++amountOfBought);

};

  
    


//code thong tin hoc sinh
let studentInfo = function(event) {
    let arrInfo = ['name', 'email', 'phone', 'age'];
    let info;
    let infoValue;
    for(i = 0; i < arrInfo.length; i++) {
        info = $('#' + arrInfo[i]);
        infoValue = info.val();
        if (!infoValue) {
            info.css('border-color', 'red');
        }

    }
}
//code style input
let studentInput = function(id) {
    info = $('#' + id);
    infoValue = info.val();
    if(!infoValue) {
        info.css('border-color','red');
    }else {
        info.css('border-color','#011098');
    }
}




// hoc sinh mua khoa hoc online
setTimeout(function() {
    $('#sectionBoughtName').css('bottom', '50px');
    $('#sectionBoughtName').css('opacity', '1');
}, 10000);

setTimeout(function() {
    $('#sectionBoughtName').css('bottom', '-100px');
    $('#sectionBoughtName').css('opacity', '0');

}, 15000);

