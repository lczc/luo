function scroll(){
    if(document.body.scrollTop){
        return{
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
    else{
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }

}
function $(id){return document.getElementById(id)};