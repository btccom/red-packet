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

window.addEventListener("DOMContentLoaded", function (){
    var eles=$(document).find('[data-local]');
    for(var e in eles){
        if(eles.hasOwnProperty(e)){
            var ele=eles.eq(e)[0];
            if(ele){
                var rel=ele.dataset.local;
                if(rel=='placeholder'){
                    ele.placeholder=local[rel];
                }
                else if($(ele).is('input')){
                    ele.value= local[rel];
                }
                else{
                    ele.textContent=local[rel];
                }
            }
        }
    }
})

scan.onclick=function () {
    $(setp1).hide();
    $(setp2).show();
}

write.onclick=function () {
    $(setp2).hide();
    $(setp3).show();
}

get_bch.onclick=function () {
    $(setp3).hide();
    $(setp4).show();
}