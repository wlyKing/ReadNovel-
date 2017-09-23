// pages/demo/detail/detail.js
var obj=require('../../../data/list.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  collected:true
  },
  onTap:function(){
     //获取数据
     var data = wx.getStorageSync("obj");
     //改变数据
     var id=this.data.pid;
     var bool = data[id];
      bool = !bool;
      data[id] = bool;
      //保存数据到缓存
      wx.setStorageSync("obj", data)
      
      this.setData({
        collected:bool
      });
       
      wx.showToast({
        title: bool?"收藏成功":"取消收藏",
        icon:"success",
        duration:1500
      }) 

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        // 获取被点击列表的id号

        var id=options.id
        // console.log(id)
        //动态获取列表项的数据
        this.setData({
          list:obj.list[id],
          pid:id
        })

        //json对象
        // var data={
        //   0:true,
        //   1:false,
        //   2:true
          
        // }
        // console.log(data);
        
        //获取数据

        var data=wx.getStorageInfoSync("obj");
        //修改数据
        // data[1]=true;
        //设置数据
        // wx.setStorageSync("obj", data);
       
       if(data){
         //当前小说收藏状态
           var bool=data[id];

         this.setData({
           collected:bool
         });    

       }else{
         var data={};
         data[id]=false;
         wx.setStorageSync("obj", data);
       }

       
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})