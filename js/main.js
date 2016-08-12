//var obj = {};
//obj.prop1 = 3;
//console.log(obj);
//
//function log(arg){
//        console.log(arg);
//        }        
//console.dir(log);
//
//var ary = [];
//ary.prop1 = 3;
//console.dir(ary);

//var obj = {};
//obj.name = 'Joe';
//
//for(var i = 0; i < 5; i++){
//        obj['prop' + i] = i;
//}
//console.log(obj);

//function fakeAjax(cb){
//       setTimeout(function(){
//        cb('ajax data');
//        }, 1000);
//}
//
//console.log('start');
//fakeAjax(function(data){
//        console.log('ajax returned: ' + data);
//        });
//console.log('end');

function fakeAjax(cb){
       setTimeout(function(){
        cb('ajax data');
        }, 1000);
}

console.log('start');
        fakeAjax(processData);
console.log('end');

function processData(data){
        console.log('I have processed the data: ' + data);
}



