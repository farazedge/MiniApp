Page({
    data: {
        dataItems: {},
        nodes: `<div class="div_class">
                <h5>Clear Restrictions to Proceed</h5>
                <p class="p">
                    Please clear the following the restirction and/or unpayable tickets below to proceed.
                </p>
                </div>`
    },
    onLoad: function () {
        this.setData({
            dataItems: {
                headingText: 'Clear Restrictions to Proceed',
                subHeading: 'Please clear the following the restirction and/or unpayable tickets below to proceed.'
            }
        })
    }
})