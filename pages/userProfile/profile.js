const app = getApp()
const userData = require('../../utils/userProfileData')

Page({
    data: {
        userData : {},
    },

    onLoad: function () {
        this.setData({
            userData : userData
        })
    }
})