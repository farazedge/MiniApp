const app = getApp()
const userData = require('../../utils/userProfileData')

Page({
    data: {
        userData : {},
        userInfo : {}
    },

    onLoad: function () {
        this.setData({
            userData : userData
        })
        console.log('data', userData)
    }
})