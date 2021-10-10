let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/*你好,我是milkboy
*接下来我就要给你演示我的前端功底了
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    height:200px;
    width:200px;
}
/* 接下来我要把div变成一个八卦图
 * 注意看好了哈
 * 首先，我要把div编程一个圆
 **/
 #div1{
     border-radius:50%;
     box-shadow:0 0 3px rgba(0,0,0,0.5);
     border:none;
 }
 /* 八卦是阴阳两极
  * 接下来我要开始表演了
  **/
 #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
 /* 加两个神秘小球
 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,253,253,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
console.log(string.length)
let n=-1

let string2=""
let step=()=>{
    n+=1
    if(string[n]==='\n'){
        string2+="<br>"
    }else if(string[n]===' '){
        string2+="&nbsp;"
    }else{
        string2+=string[n]
    }
    setTimeout(()=>{   
        console.log(n)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n<string.length){
            html.innerHTML=string2
            style.innerHTML=string.substring(0,n)
            console.log(html.innerHTML)
        }else{
            return
        }
        step()
    },50) 
}
step()
// let style=document.querySelector("style")

// setTimeout(()=>{
//     style.innerHTML=`
//         body{
//             color:red
//         }
//     `
// },200)