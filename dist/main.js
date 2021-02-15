!function(t){var e={};function i(a){if(e[a])return e[a].exports;var h=e[a]={i:a,l:!1,exports:{}};return t[a].call(h.exports,h,h.exports,i),h.l=!0,h.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var h in t)i.d(a,h,function(e){return t[e]}.bind(null,h));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e){var i=document.getElementById("game-canvas"),a=i.getContext("2d");i.width=window.innerWidth-20,i.height=window.innerHeight-20;t.exports={canvas:i,ctx:a,drawCanvas:function(){a.fillStyle="black",a.fillRect(0,0,window.innerWidth,window.innerHeight)}}},function(t,e,i){"use strict";i.r(e);var a=i(0),h=.975*a.canvas.width,n=(a.canvas.width-h)/2,s=.775*a.canvas.height;function r(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var c=new Image;c.src="src/sprites/Huntress/Sprites/Arrow/Move.png";var o=function(){function t(e,i,h,n,s,r,c,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.speed=h,this.width=n,this.height=s,this.frameX=r,this.sprite=c,this.angle=o,this.left=this.x,this.right=this.x+this.width*(.001*a.canvas.width),this.top=this.y,this.bot=this.y+this.height*(.001*a.canvas.height),this.hit=!1,this.counter=1,this.airToggle="off"}var e,i,h;return e=t,(i=[{key:"draw",value:function(){a.ctx.save(),a.ctx.translate(this.x,this.y),a.ctx.rotate(this.angle),a.ctx.translate(-this.x,-this.y),a.ctx.drawImage(c,this.width*this.frameX,0,this.width,this.height,this.x,this.y,this.width*(.001*a.canvas.width),this.height*(.00175*a.canvas.height)),a.ctx.restore(),this.counter++%10==0&&(this.airToggle="on"),"on"===this.airToggle&&(a.ctx.save(),a.ctx.translate(this.x,this.y),a.ctx.rotate(this.angle),a.ctx.translate(-this.x,-this.y),a.ctx.fillStyle="rgba(44, 130, 201,0.3)",a.ctx.fillRect(this.x-.1*a.canvas.width,this.y,this.width+.1*a.canvas.width,this.height+3),a.ctx.restore())}},{key:"update",value:function(){this.x>.0183*a.canvas.width&&this.x+this.width*(.001*a.canvas.width)<.995*a.canvas.width&&this.y+this.height*(.002*a.canvas.width)<.9671*a.canvas.height&&this.y-this.height*(.003*a.canvas.width)>.19*a.canvas.height&&!1===this.hit&&(this.draw(),this.x=this.x+this.speed.x,this.y=this.y+this.speed.y)}}])&&r(e.prototype,i),h&&r(e,h),t}(),d=[];function l(){d.forEach((function(t,e){t.update(),(t.x<.0182*a.canvas.width||t.x>.995*a.canvas.width-t.width*(.001*a.canvas.width)||t.y<.1932*a.canvas.height+t.height*(.003*a.canvas.width)||t.y>.9671*a.canvas.height-t.height*(.002*a.canvas.width)||!0===t.hit)&&setTimeout((function(){d.splice(e,1)}),0)})),k.counter+=1,k.counter%3==0&&(k.frameY<5?k.frameY++:k.frameY=0)}window.addEventListener("click",(function(t){var e=Math.atan2(t.clientY-(k.y+.19*a.canvas.height/2),t.clientX-(k.x+.2*a.canvas.height/2)),i={x:Math.cos(e)*(.02*a.canvas.height),y:Math.sin(e)*(.02*a.canvas.height)};d.push(new o(k.x+.2*a.canvas.height/2,k.y+.19*a.canvas.height/2.35,i,24,5,0,c,e)),k.frameY=0,k.shooting=!0,k.clickXPos=t.clientX}));var v=new Image;v.src="src/images/heart.png";var g={heartPos:[.69,.74,.79],heartCount:3,counter:0};function f(){g.heartPos.forEach((function(t,e){g.heartCount-e>0&&a.ctx.drawImage(v,a.canvas.width*t,.023*a.canvas.height,.1*a.canvas.width,.1*a.canvas.width)}))}function w(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var u=new Image;u.src="src/sprites/Slime/SlimeA.png";var p=function(){function t(e,i,h,n,s,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=Math.random()*(.96*a.canvas.width-.5*a.canvas.width)+.5*a.canvas.width,this.y=Math.random()*(.93*a.canvas.height-.45*a.canvas.height)+.45*a.canvas.height,this.scale=.05*a.canvas.height,this.centerPointX=this.x+this.scale/2,this.centerPointY=this.y+this.scale/2,this.speed=e,this.width=i,this.height=h,this.frameX=n,this.sprite=s,this.flip="right",this.counter=0,this.randomCounter=0,this.xSpeed=0,this.ySpeed=0,this.moving=!1,this.stop=10,this.xMove=0,this.yMove=0,this.randomFactor=r,this.left=this.x,this.right=this.x+this.scale,this.top=this.y,this.bot=this.y+this.scale}var e,i,h;return e=t,(i=[{key:"draw",value:function(){a.ctx.drawImage(this.sprite,this.width*this.frameX,0,this.width,this.height,this.x,this.y,this.scale,this.scale)}},{key:"update",value:function(){this.draw()}},{key:"handleSlimeAnimation",value:function(){this.counter+=1,this.counter%4==0&&(Math.abs(this.x-k.x)<200&&this.frameX<15||this.frameX<8?this.frameX++:8===this.frameX||15===this.frameX?this.frameX=0:this.frameX++)}},{key:"handleMovement",value:function(){this.randomCounter+=1,this.moving?(this.x+=this.xSpeed,this.centerPointX=this.x+this.scale/2,this.y+=this.ySpeed,this.centerPointY=this.y+this.scale/2,this.draw(),this.stop-=1,this.stop<=0&&(this.moving=!1,this.stop=10)):this.stop>0?(this.stop-=1,this.draw()):(Math.abs(k.x-this.x)<a.canvas.height/4&&Math.abs(k.y-this.y)<a.canvas.height/4?(this.xMove=k.centerPointX,this.yMove=k.centerPointY,Math.abs(k.x-this.x)<a.canvas.height/4?(this.xSpeed=(this.xMove-this.x)/30,this.ySpeed=(this.yMove-this.y)/30):(this.xSpeed=(this.xMove-this.x)/120,this.ySpeed=(this.yMove-this.y)/120)):(this.xMove=Math.random()*(.932*a.canvas.width-.02*a.canvas.width)+.02*a.canvas.width+.05*a.canvas.width,this.yMove=Math.random()*(.9*a.canvas.height-.5*a.canvas.height)+.45*a.canvas.height+.045*a.canvas.height,this.xSpeed=(this.xMove-this.x)/120,this.ySpeed=(this.yMove-this.y)/120),this.draw(),this.stop=30,this.moving=!0)}}])&&w(e.prototype,i),h&&w(e,h),t}(),x=[];!function(t){var e=Math.ceil(0),i=Math.floor(8);Math.floor(Math.random()*(i-e+1)+e);for(var h=1;h<=t;h++)x.push(new p(.013*a.canvas.height,15.99,16,Math.floor(Math.random()*(i-2-e+1)+e),u,h))}(5);var y=new Image;y.src="src/images/CrystalCaverns_Midground.png";var m=new Image;function X(t){a.ctx.drawImage(t,.005*a.canvas.height*M.frameX,0,M.width,M.height,.0123*a.canvas.width,.196*a.canvas.height,.976*a.canvas.width,.78*a.canvas.height)}m.src="src/images/CrystalCaverns_Foreground.png";var M={width:2625,height:1080,frameX:0},P=new Image,b={width:53,height:32,counter:1,frame:1,toggle:"off"};var S={width:5888,height:1080,location:.244*a.canvas.width*.42211};var k=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=.1*a.canvas.width,this.y=.6*a.canvas.height,this.width=100,this.height=100,this.scale=.2*a.canvas.height,this.centerPointX=this.x+this.scale/2,this.centerPointY=this.y+this.scale/2,this.actualScale=.2*a.canvas.height/100,this.frameX=0,this.frameY=0,this.speed=.005*a.canvas.height,this.moving=!1,this.flip="right",this.shooting=!1,this.counter=0,this.clickXPos=0},I=new Image;I.src="src/sprites/Huntress/Sprites/Character/Run.png";var C=new Image;function Y(t,e,i,h,n,s,r,c,o){"right"===k.flip?a.ctx.drawImage(t,e,i,h,n,s,r,c,o):"right"!=k.flip&&(a.ctx.save(),a.ctx.translate(k.x+.2*a.canvas.height,k.y),a.canvas.height,a.ctx.scale(-1,1),a.ctx.drawImage(t,e,i,h,n,0,0,c,o),a.ctx.restore())}function A(){k.counter%6==0&&(k.frameX<7?k.frameX++:k.frameX=0)}C.src="src/sprites/Huntress/Sprites/Character/Attack.png";var R={ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1,w:!1,a:!1,s:!1,d:!1};window.addEventListener("keydown",(function(t){t.preventDefault(),R[t.key]=!0,console.log(t.key)})),window.addEventListener("keyup",(function(t){t.preventDefault(),R[t.key]=!1})),window.onload=function(){setInterval((function(){a.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),Object(a.drawCanvas)(),function(){var t=.15*a.canvas.height;a.ctx.fillStyle="gray",a.ctx.fillRect(n,n,h,t);var e=h;a.ctx.fillStyle="gray",a.ctx.fillRect(n,2*n+t,e,s);var i,r,c,o;c=n+(r=(t-(i=.8*t))/2),o=n+r,[.25,.25,.075,.075,.2775].forEach((function(t){var e=h*t;a.ctx.fillStyle="black",a.ctx.fillRect(o,c,e,i),o+=n+e}))}(),f(),X(y),P.src="src/sprites/direction/AR100_nyknck/AR102_nyknck/AR102_0".concat(b.frame,".png"),"on"===b.toggle&&(a.ctx.drawImage(P,.9*a.canvas.width,.275*a.canvas.height,.0504*a.canvas.width,.0504*a.canvas.width*b.height/b.width),b.counter++%10==0&&b.frame++,6===b.frame&&(b.frame=1)),x.length<1&&0===M.frameX&&(b.toggle="on"),150===M.frameX&&(b.toggle="off"),a.ctx.drawImage(y,.0205*a.canvas.width,.03875*a.canvas.height,.244*a.canvas.width,.338*a.canvas.width*S.height/S.width),a.ctx.drawImage(m,.0205*a.canvas.width,.03875*a.canvas.height,.244*a.canvas.width,.338*a.canvas.width*S.height/S.width),a.ctx.fillStyle="white",a.ctx.fillRect(.0205*a.canvas.width+S.location,.03895*a.canvas.height,.001*a.canvas.width,.337*a.canvas.width*S.height/S.width),g.counter++,x.forEach((function(t,e){t.handleSlimeAnimation(),t.handleMovement(),d.forEach((function(i){Math.hypot(i.x-t.centerPointX,i.y-t.centerPointY)-t.scale/2<1&&(x.splice(e,1),i.hit=!0)})),Math.hypot(t.centerPointX-k.centerPointX,t.centerPointY-k.centerPointY)-t.scale/2-k.scale/2<1&&g.heartCount>0&&g.counter%60==0&&(g.heartCount-=1),console.log(k.centerPointX,k.centerPointY)})),k.shooting?(k.flip=k.clickXPos>k.x?"right":"left",Y(C,k.width*k.frameY,0,k.width,k.height,k.x,k.y,.2*a.canvas.height,.2*a.canvas.height),5===k.frameY&&(k.shooting=!1)):Y(I,k.width*k.frameX,0,k.width,k.height,k.x,k.y,.2*a.canvas.height,.2*a.canvas.height),(R.ArrowUp||R.w)&&k.y>.4*a.canvas.height&&(k.y-=k.speed,k.centerPointY-=k.speed,A()),(R.ArrowDown||R.s)&&k.y<a.canvas.height-n-75*k.actualScale&&(k.y+=k.speed,k.centerPointY+=k.speed,A()),(R.ArrowLeft||R.a)&&k.x>n-30*k.actualScale&&(k.x-=k.speed,k.centerPointX-=k.speed,k.flip="left",A()),(R.ArrowRight||R.d)&&k.x<a.canvas.width-n-70*k.actualScale&&(k.x+=k.speed,k.centerPointX+=k.speed,M.frameX<490&&x.length<1&&(M.frameX+=1,S.location+=M.frameX*a.canvas.width*.244*47736e-10),k.flip="right",A()),R[" "]&&("right"===k.flip?(k.x+=4*k.speed,k.centerPointX+=4*k.speed):(k.x-=4*k.speed,k.centerPointX-=4*k.speed)),l(),X(m)}),1e3/60)}}]);
//# sourceMappingURL=main.js.map