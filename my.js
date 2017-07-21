/**
 * Created by Administrator on 2017/2/15.
 */

//封装scrollTop
function scroll(){
    if (document.body.scrollTop || document.body.scrollLeft||document.body.scrollWidth )   //谷歌
    {
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft,
            width:document.body.scrollWidth
        }
    }
    else
    {
        //其它浏览器
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft,
            width:document.documentElement.scrollWidth
        }
    }
}

function client(){
    if(document.body.clientWidth||document.body.clientHeight) {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
    else {
            return{
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight
            }
        }
    }


//封装ID
function $(id){ return document.getElementById(id)}


//封装显示 隐藏
function show(obj) {
    obj.style.display="block";
}
function hide(obj) {
    obj.style.display="none";
}


//获取属性值如：left,top,right,A
function getStyle(obj,attr){
    if (obj.currentStyle) //ie7 8
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr]
    }
}