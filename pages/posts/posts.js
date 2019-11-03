Page({
  data: {
    date: 'Nov 18 2020',
    title: '正是虾肥蟹壮时'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content1 = {
      date: "Nov 18 2019",
      title: "正是虾肥蟹壮时",
      img: {
        post_img: "/images/post/crab.png",
        author_img: '/images/avatar/1.png'
      },
      content: '菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满',
      view_num: '112',
      collect_num: '96',
    }
    this.setData(post_content1)
    console.log('onLoad')
  },

  onReady: function (options) {
    console.log('onReady')
  },

  onShow: function (options) {
    console.log('onShow')
  },

  onHide: function (options) {
    console.log('onHide')
  },

  onUnload: function (options) {
    console.log('onunLoad')
  },

  onShareAppMessage: function () {
    console.log("share")
  },

  onReachBottom: function () {
    console.log('reach')
  }
})