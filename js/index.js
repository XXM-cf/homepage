var pageList = $('#page_list');
var psList = $('#ps_list');
var picList = $("pic_list")
var jsList = $("js_list")
var activeList = $("active_list")

// 静态页面的数据

var pageDate = [{
        img_src: './img/page/sheji.png',
        title: '设计图还原',
        down_src: ' http://owicnt566.bkt.clouddn.com/%E8%AE%BE%E8%AE%A1%E5%9B%BE%E8%BF%98%E5%8E%9F.rar',
        dome_src: 'http://owi4meals.bkt.clouddn.com/gongcheng/index.html',
        num: '查看：50次',
        date: '2017/08/23',
        flag: '',
    },
    {
        img_src: './img/page/lanyue.png',
        title: '揽阅官网',
        down_src: ' http://owicnt566.bkt.clouddn.com/%E6%8F%BD%E9%98%85.rar',
        dome_src: 'http://owi4meals.bkt.clouddn.com/lanyue/index.html',
        num: '查看：36次',
        date: '2017/07/23',
        flag: '',
    },
    {
        img_src: './img/page/baiduyun.png',
        title: '百度网盘注册页面',
        down_src: 'http://owicnt566.bkt.clouddn.com/%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98.rar',
        dome_src: 'http://owi4meals.bkt.clouddn.com/baiduyun/index.html',
        num: '查看：40次',
        date: '2017/08/20',
        flag: '',
    },
    {
        img_src: './img/page/wangyiyun.png',
        title: '网易云阅读官网',
        down_src: 'http://owicnt566.bkt.clouddn.com/%E7%BD%91%E6%98%93%E4%BA%91%E9%98%85%E8%AF%BB.rar',
        dome_src: 'http://owi4meals.bkt.clouddn.com/wangyiyun/index.html',
        num: '查看：20次',
        date: '2017/08/28',
        flag: '',
    },
    {
        img_src: './img/page/xiaomi.png',
        title: '小米官网',
        down_src: 'http://owicnt566.bkt.clouddn.com/xiaomi.rar',
        dome_src: 'https://xxm-cf.github.io/xiaomi/',
        num: '查看：50次',
        date: '2017/08/23',
        flag: '',
    },
    {
        img_src: './img/page/kuwo.png',
        title: '酷我音乐',
        down_src: 'http://owicnt566.bkt.clouddn.com/kuwo.rar',
        dome_src: 'http://owi4meals.bkt.clouddn.com/kuwo/kuwo.html',
        num: '查看：30次',
        date: '2017/08/16',
        flag: '',
    },
];

var newLi = ''
var isflag = 0; //用来判断是否为第一个li 是的话去掉margin_left;
for (var i = 0; i < pageDate.length; i++) {
    if (isflag % 4 == 0) {
        pageDate[i].flag = 'flag';
    }
    newLi += `
    <li class="` + pageDate[i].flag + `">
    <div class="page">
        <div class="pic">
            <img src="` + pageDate[i].img_src + `" alt="">
        </div>
        <p class="title">` + pageDate[i].title + `</p>
        <div class="dis">
            <p class="title2">` + pageDate[i].title + `</p>
            <a href="` + pageDate[i].dome_src + `" class="down" target="_blank">在线演示</a>
            <a href="` + pageDate[i].down_src + `"class="dome" target="_blank">源码下载</a>
            <span class="num">` + pageDate[i].num + `</span>
            <span class="date">` + pageDate[i].date + `</span>
        </div>
    </div>
</li>
    `
    isflag++;
}
pageList.append(newLi) //插入节点