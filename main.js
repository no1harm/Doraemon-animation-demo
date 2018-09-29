!function(){
    let duration = 50
    $('.buttonList').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 80
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 0
                break
        }
    })
    function writeCode(prefix,code,fn){
        let domCode = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        domCode.innerHTML = prefix || ''
        let n = 0
        let timer = setTimeout(function run(){
            n = n+1
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css)
            domCode.scrollTop = domCode.scrollHeight
            styleTag.innerHTML = prefix + code.substring(0,n)
            if(n < code.length){
                timer = setTimeout(run,duration)
            }
        },duration)
    }
    
    let code = `
/* 先给 Pikachu 加上点背景 */
* {
    transition: all 1s;
}
.preview{
    display:flex;
    height: 100%;
    justify-content:center;
    align-items:center;
    background-color: #D4ECF9;
}
.wrapper{
    width:100%;
    height:300px;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .body-wrapper{
    width:240px;
    height:246px;
    position: relative;
  }
  .outer-face{
    width:230px;
    height:240px;
    background-color: #159EFF;
    position: absolute;
    left:50%;
    transform:translateX(-50%);
    border-radius:50% / 55%;
    border:5px solid #000000;
  }
  .inner-face{
    width:200px;
    height:210px;
    background-color: #fff;
    position: absolute;
    left:50%;
    transform:translateX(-50%);
    border-radius:50% / 55%;
    border:3px solid #000000;
    top:30px;
  }
  .eye{
    position: absolute;
    width:48px;
    height:48px;
    border:3px solid black;
    border-radius:50%;
    background-color: #fff;
    top:10px
  }
  .eye.left{
    left:50%;
    transform:translateX(-100%);
  }
  .eye.right{
    right:50%;
    transform:translateX(100%);
  }
  .eye.left::after{
    content:'';
    width:20px;
    height:20px;
    border:3px solid black;
    border-bottom:none;
    border-right:none;
    border-left:none;
    position: absolute;
    border-radius:50%;
    right:3px;
    top:10px;   
  }
  .eye.right::after{
    content:'';
    width:20px;
    height:20px;
    border:3px solid black;
    border-bottom:none;
    border-right:none;
    border-left:none;
    position: absolute;
    border-radius:50%;
    left:3px;
    top:10px;   
  }
  .nose{
    position: absolute;
    width:33px;
    height:33px;
    background-color: #FF0000;
    border-radius:50%;
    border:2px solid black;
    left:50%;
    transform:translateX(-50%);
    top:50px;
  }
  .nose::before{
    content:'';
    position: absolute;
    width:11px;
    height:11px;
    background-color: #fff;
    border-radius:50%;
    top:4px;
    left:4px;
  }
  .nose::after{
    content:'';
    position: absolute;
    width:1px;
    height:22px;
    border:1px solid black;
    left:50%;
    transform:translateX(-50%);
    bottom:-26px
  }
  .beard{  
    width:60px;
    height:0px;
    position: absolute;
    border-radius: 150%;
  }
  .beard.middle1{  
    width:60px;
    height:0px;
    border:1px solid black;
    position: absolute;
    top:90px;
    left:44px;
    border-radius: 150%;
  }
  .beard.middle2{  
    width:60px;
    height:0px;
    border:1px solid black;
    position: absolute;
    top:90px;
    right:44px;
    border-radius: 150%;
    
  }
  .beard.left-top{
    width:60px;
    height:0px;
    border:1px solid black;
    position: absolute;
    top:78px;
    left:44px;
    border-radius: 150%;
    transform:rotate(10deg)
  }
  .beard.right-top{
    width:60px;
    height:0px;
    border:1px solid black;
    position: absolute;
    top:78px;
    right:44px;
    border-radius: 150%;
    transform:rotate(-10deg)
  }
  .beard.left-down{
    width:60px;
    height:0px;
    border:1px solid black;
    position: absolute;
    top:104px;
    left:44px;
    border-radius: 150%;
    transform:rotate(-10deg);
    z-index:1;
  }
  .beard.right-down{
    width:60px;
    height:0px;
    border:1px solid black;
    position: absolute;
    top:104px;
    right:44px;
    border-radius: 150%;
    transform:rotate(10deg);
    z-index:1;
  }
  .upperLip{
    width:100px;
      height:20px;
      border:3px solid black;
      position: absolute;
      transform:rotate(-10deg);
      border-top: none;
      top:100px;
    background-color: #fff;
  }
  .upperLip.left{
      right:50%;
      border-top: none;
      border-right:none;
      border-bottom-left-radius:40px 25px;
  }
  .upperLip.right{
      transform:rotate(10deg);
      left:50%;
      border-top: none;
      border-left:none;
      border-bottom-right-radius:40px 25px;
  }
  .upperLip.left::after{
    content:'';
    position: absolute;
    background-color: #fff;
    width:38px;
    height:38px;
    border:3px solid black;
    border-radius: 38px 38px 0 ;
    border-right:none;
    top:-18px;
    left:-3px;
  }
  .upperLip.right::after{
    content:'';
    position: absolute;
    background-color: #fff;
    width:38px;
    height:38px;
    border:3px solid black;
    border-radius: 38px 38px 38px 0;
    border-left:none;
    top:-18px;
    right:-3px;
  }
  .mouth-wrapper{
    position: absolute;
    width:200px;
    height:130px;
    left:50%;
    transform:translateX(-50%);
    bottom:10px;
    overflow:hidden;
  }
  .mouth{
    width:180px;
    height:400px;
    background-color: #FF0000;
    border:2px solid black;
    position: absolute;
    bottom:20px;
    left:50%;
    transform:translateX(-50%);
    border-radius:120px/200px ;
  }
  .tongue-wrapper{
    position: absolute;
    width:70px;
    height:70px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    overflow:hidden;
  }
  .tongue{
    position: absolute;
    background-color: #FF6E37;
    width:70px;
    height:100px;
    border:1px solid black;
    left:50%;
    transform:translateX(-50%);
    border-radius:80px/100px;
    bottom:20px;
  }
  .tongue-up::before{
    content:'';
    position: absolute;
    width:35px;
    height:14px;
    border:1px solid black;
    left:50%;
    transform:translateX(-100%);
    top:152px;
    border-radius:35px 35px 0 0;
    border-bottom:none;
    background-color: #FF6E37;
  }
  .tongue-up::after{
    content:'';
    position: absolute;
    width:35px;
    height:14px;
    border:1px solid black;
    right:50%;
    transform:translateX(100%);
    top:152px;
    border-radius:35px 35px 0 0;
    border-bottom:none;
    background-color: #FF6E37;
  }
  .necklace{
    position: absolute;
    width:160px;
    height:20px;
    border:4px solid black;
    background-color: #FF0000;
    bottom:8px;
    left:50%;
    transform:translateX(-50%);
    border-radius:10px
  }
  .bell{
    width:26px;
    height:26px;
    position: absolute;
    border:2px solid black;
    left:50%;
    transform:translateX(-50%);
    bottom:-4px;
    border-radius:50%;
    background-color: #FFFF00;
  }
  .bell::before{
    content:'';
    position: absolute;
    width:22px;
    height:5px;
    background-color: #FFFF00;
    border:2px solid black;
    border-radius:8px;
    top:2px;
  }
  .bell::after{
    content:'';
    position: absolute;
    width:10px;
    height:10px;
    border:2px solid black;
    background-color: #808080;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    top:7px;
  }
  .line{
    position: absolute;
    width:0px;
    height:6px;
    border:1px solid black;
    bottom:-2px;
    left:50%;
    transform:translateX(-50%);
  }
`
    writeCode('',code)
}.call()
