Page({
  data:{
    percent:0,
    poster:'/media/my.jpg',
    src:'/media/star.mp3',
    name:'夜空中最亮的星',
    action:null,
    author:'乐乐',
    percentHidden:false

  },
  audioPlay: function () {
   this.setData({
     action: {
       method: 'play'
     }
   })
 },
  audioPause: function () {
   this.setData({
     action: {
       method: 'pause'
     }
   })
 },
  onLoad:function(options){

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
      this.setData({
          percent:0
      });
      var timer = setInterval(function(){
          this.setData({
              percent:++this.data.percent
          });
          if(this.data.percent ==100){
              console.log(100);
              this.setData({
                action: {
                  method: 'play'
              },percentHidden:true
              })
              clearInterval(timer);
          }
      }.bind(this),50);
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
