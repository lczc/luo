/**
 * Created by Administrator on 2017/2/15.
 */

//封装scrollTop
function scroll(){
    if (document.body.scrollTop || document.body.scrollLeft)   //谷歌
    {
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
    else
    {
        //其它浏览器
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
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

/*可视区宽度*/
function client(){
    if (document.body.clientWidth)
    {
        return {
            width:document.body.clientWidth
        }
    }
    else
    {
        return {
            width:document.documentElement.clientWidth
        }
    }
}




//封装 animate 动画
function animate(obj,json)
{
    var timer=null,speed=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var off=true;
        var current=0;
        for( var attr in json)   // attr  属性     json[attr]  值
        {
            //console.log(attr);
            if ("opacity" == attr) {
                current = json[attr]; //取值
                //console.log(current);
                // console.log("alpha(opacity= "+ (current + speed) + ")")
            }
            else {
                current = parseInt(getStyle(obj, attr)); // 数值

            }


            speed = (json[attr] - current) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


            //首先我们要判断它是否兼容  if in

            if ("opacity" == attr)
            {

                if( "opacity" in obj.style)
                {
                    //  正常 浏览器  我们就  opacity:0.5;
                    obj.style.opacity = (current + speed ) / 100;
                }
                else
                {
                    //console.log(111)
                    //alert("不兼容");
                    //else     filter:Alpha(opacity=50)
                    obj.style.filter = "alpha(opacity= " + (current + speed) + ")";  //ie
                }
            }
            else if ("zIndex" == attr)
            {
                obj.style.zIndex=json[attr];
            }
            else {
                obj.style[attr] = current + speed + "px";
            }



            if (json[attr] !== current)
            {
                off=false;
            }



        }

        if (off)
        {
            clearInterval(obj.timer)
            if(fn)
            {
                fn()
            }
        }

    },40)
}


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