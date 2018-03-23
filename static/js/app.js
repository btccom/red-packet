var setp1=document.querySelector('.step1');
var setp2=document.querySelector('.step2');
var setp3=document.querySelector('.step3');
var setp4=document.querySelector('.step4');
var scan=document.querySelector('.scan');
var write=document.querySelector('.write');
var get_bch=document.querySelector('.get_bch');

var packet_hash=document.querySelector('.packet_hash');
var packet_address=document.querySelector('.packet_address');
var packet_amount=document.querySelector('.packet_amount');

var address=document.querySelector('.address');
var hashrate=document.querySelector('.hashrate');
var error=document.querySelector('.error');
var error_info=document.querySelector('.error-info');



scan.onclick=function () {
    wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果

            $.post('https://welfaredev.btc.com/api/test/amount',{private_key:result})
                .then(data=>{
                    packet_hash.textContent=result;
                    $(setp1).hide();
                    $(setp2).show();
                })
        }
    });
}

write.onclick=function () {
    $(setp2).hide();
    $(setp3).show();
}

get_bch.onclick=function () {
    $(setp3).hide();
    $(setp4).show();
}