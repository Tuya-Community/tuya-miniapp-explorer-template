Page({
    data: {
        arr: [{
                value: i18n.t('selecttext_3'),
                placement: 'top',
            },
            {
                value: i18n.t('selecttext_4'),
                placement: 'right',
            },
            {
                value: i18n.t('selecttext_5'),
                placement: 'left',
            },
            {
                value: i18n.t('selecttext_6'),
                placement: 'bottom',
            },
        ],
        copyContent: '',
    },

    handleTap(e) {
        this.setData({ evt: e })
    },

    getCopyContent() {
        let self = this
        ty.getClipboardData({
            success(res) {
                console.log('copy content', res)
                self.setData({
                    copyContent: res.data,
                })
            },
        })
    },
})