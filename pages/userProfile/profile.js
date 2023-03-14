const app = getApp()
const userData = require('../../utils/userProfileData')

Page({
    data: {
        userData : {},
        userInfo : {}
    },
    gotoNextPage : function () {
        wx.navigateTo({
            url : '../scrollComponent/scrollComponent' 
        })
    },
    onLoad: function () {
        this.setData({
            userData : userData
        })
    }
})