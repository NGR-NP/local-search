// function checkvalue(val)
// {
//     if(val==="others")
//        document.getElementById('color').style.display='block';
//     else
//        document.getElementById('color').style.display='none'; 
// }
//  this js is for other option if visitor select other it will give option to write text 

function CheckClassification(val){
    var element=document.getElementById('otherclassification');
    if(val=='Others')
    element.style.display='block';
    else  
    element.style.display='none';
}
// otherjobtitle
function checkjobtitle(val){
    var element=document.getElementById('otherjobtitle');
    if(val=='Others')
    element.style.display='block';
    else
    element.style.display='none';
}