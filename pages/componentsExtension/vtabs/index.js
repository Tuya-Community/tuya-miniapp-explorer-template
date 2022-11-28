Page({
    data: {
        vtabs: [],
        activeTab: 0,
    },

    onLoad() {
        const titles = [
            'title1',
            'title2',
            'title3',
            'title4',
            'title5',
            'title6',
            'title7',
            'title8',
            'title9',
            'title10',
            'title11',
            'title12',
            'title13',
            'title14',
            'title15',
            'title16',
            'title17',
            'title18',
            'title19',
            'title20',
            'title21',
            'title22',
            'title23',
            'title24',
        ]
        const vtabs = titles.map((item) => ({ title: item }))
        this.setData({ vtabs })
    },

    onTabCLick(e) {
        const index = e.detail.index
        console.log('tabClick', index)
    },

    onChange(e) {
        const index = e.detail.index
        console.log('change', index)
    },
})