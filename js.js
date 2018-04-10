function draw(cvs,callback){
    var cvs=document.querySelector(cvs),
        ctx=cvs.getContext("2d"),
        //开关
        flag=false;
     cvs.addEventListener('mousedown',function(e){
          //alert(11)
            var down={
            	x:e.clientX,
            	y:e.clientY
            }
            ctx.beginPath();
            ctx.lineWidth=document.querySelector('#brush').value;
            ctx.strokeStyle=document.querySelector('#col').value;
            ctx.lineCap="round";
            ctx.lineJoin="round";
            ctx.moveTo(down.x, down.y);
            flag=true;
     })
     cvs.addEventListener('mousemove',function(e){
       if(flag){
       	  var move={
       	  	x:e.clientX,
            y:e.clientY
       	  }
       	  ctx.lineTo(move.x,move.y);
       	  ctx.stroke()
       }
     })
     cvs.addEventListener('mouseup',function(){
     	flag=false;
     })

     callback && callback()
}