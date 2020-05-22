var data="";
console.log("attached");
document.addEventListener("click",function(e){
 data= data +""+ e.target;
    console.log("click "+ e.target.tagName);
    console.log(e.target.className);
    console.log(data);
    console.log(e.target.id);
    },true);
document.addEventListener("focusout",function(e){
    data= data +""+ e.target;
    console.log("focousout "+ e.target.tagName);
    console.log(e.target.className);
    console.log(data);
    console.log(e.target.id);
    },true);
//if(textbox.tagName && textbox.tagName.toLowerCase() == "input" && textbox.type.toLowerCase() == "text")
//document.addEventListener("focusout",e=> console.log(e.target.value));


/* document.addEventListener("click",function(e){

    console.log(e.target.className);
    console.log(e.target.tagName);
    console.log(e.target.id);
    },true);
*/

/*
//method 1
Object.keys(window).forEach(key => {
    if (/^on(key|mouse)/.test(key)) {
        window.addEventListener(key.slice(2), event => {
            console.log(event);
        });
    }
});

//method 2
['click','mouseover'].forEach(function(ev) {
    el.addEventListener(ev, function() {
        console.log('event:', ev)
    })
})

//method 3
function getEventsList($obj) {
    var ev = new Array(),
        events = $obj.data('events'),
        i;
    for(i in events) { ev.push(i); }
    return ev.join(' ');
}

//method 4
$obj.on(getEventsList($obj), function(e) {
    console.log(e);
});

*/