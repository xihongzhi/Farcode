//接口层
var products = [
    { id: 1, code: "SC17S08", title: "山航全国经济南/青岛中转至新德里运价（散客）", type: "中转", start: "2017/2/1", end: "2017/12/31", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 2, code: "SC17S09", title: "山航全国经济南/青岛中转至新德里运价（散客）", type: "中转", start: "2017/2/2", end: "2017/12/31", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 3, code: "SC17S10", title: "山航全国经济南中转至东京运价（散客）", type: "中转", start: "2017/2/3", end: "2017/12/31", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 4, code: "TAO1728", title: "山航青岛-大阪、东京代码共享航班销售价格", type: "销售", start: "2017/2/1", end: "2017/12/31", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 5, code: "ICN1706", title: "首尔至山东销售运价20170326-20171231", type: "销售", start: "2017/3/26", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 6, code: "ICN1703", title: "首尔-济南VU舱促销运价20170326-20171028", type: "促销", start: "2017/3/26", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 7, code: "ICN1704", title: "首尔-青岛VU舱促销运价20170326-20171028", type: "促销", start: "2017/3/26", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 8, code: "ICN1705", title: "首尔-烟台VU舱促销运价20170326-20171028", type: "促销", start: "2017/3/26", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 9, code: "SC17S12", title: "山航全国经山东中转至首尔运价20170326-20171028", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 10, code: "SC17S11", title: "山航全国经济南、重庆中转至暹粒、金边、清迈20170326-20171028", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 11, code: "SC17S13", title: "山航全国经山东中转至曼谷运价20170326-20171028(除外0711-0826,1001-1007)", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 12, code: "SC17S16", title: "山航全国经山东中转至大阪运价2017.03.26-2017.10.28", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 13, code: "SC17S14", title: "山航全国经烟台中转至台北运价20170326-20171028（除外0711-0826）", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 14, code: "SC17S15", title: "山航全国经济南、青岛中转至台北运价20170326-20171028（除外0711-0826）", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 15, code: "BKK1720", title: "曼谷-山东航线销售价格2017.03.01-2017.12.31", type: "销售", start: "2017/3/1", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 16, code: "SC17S26", title: "暑运山航全国经济南、重庆中转至暹粒、金边、清迈2017.0711-2017.0826、1001-1007", type: "中转", start: "2017/7/11", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 17, code: "SC17S27", title: "暑运山航全国经山东中转至曼谷运价2017.0711-2017.0826、1001-1007", type: "中转", start: "2017/7/11", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 18, code: "TAO1737", title: "青岛-大阪预售D 舱20170227-20171231", type: "促销", start: "2017/2/7", end: "2017/12/31", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 19, code: "TEL17121", title: "青岛-大阪预售D 舱20170227-20171231", type: "促销", start: "2017/2/7", end: "2017/12/31", range: "直销", state: "已发布", createDate: "2017/1/17" },
    { id: 20, code: "SC17S25", title: "山航全国经山东中转至首尔运价07月11日-08月26日,10月01日-10月07日", type: "中转", start: "2017/7/11", end: "2017/10/7", range: "中国大陆", state: "已发布", createDate: "2017/1/17" }
];
var prices = [
    { id: 1, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "B", stay: "N/A", or: "1", fare: "BOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 2, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "C", stay: "N/A", or: "1", fare: "COW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 3, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "D", stay: "N/A", or: "1", fare: "DOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 4, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "E", stay: "N/A", or: "1", fare: "GOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 5, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "G", stay: "12M", or: "1", fare: "HOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 6, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "M", stay: "N/A", or: "1", fare: "KOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 7, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "T", stay: "N/A", or: "1", fare: "LOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 8, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "Y", stay: "N/A", or: "1", fare: "MOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 9, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "U", stay: "N/A", or: "1", fare: "QOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 10, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "R", stay: "N/A", or: "1", fare: "UOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 11, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "E", stay: "N/A", or: "1", fare: "VOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 12, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "H", stay: "1M", or: "1", fare: "YOW16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 13, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "F", stay: "3M", or: "1", fare: "BRT1Y16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 14, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "V", stay: "3M", or: "1", fare: "CRT1Y16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 15, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "Z", stay: "3M", or: "2", fare: "DRT1Y16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 16, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "E", stay: "1M", or: "2", fare: "GRT3M16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 17, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "A", stay: "1M", or: "2", fare: "HRT6M16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 18, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "B", stay: "12M", or: "2", fare: "KRT6M16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 19, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "T", stay: "6M", or: "2", fare: "LRT3M16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 20, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "Y", stay: "3M", or: "2", fare: "MRT1Y16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 21, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "U", stay: "3M", or: "2", fare: "QRT3M16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 22, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "I", stay: "6M", or: "2", fare: "URT1M16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 23, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "D", stay: "3M", or: "2", fare: "VRT1M16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" },
    { id: 24, hs: "SC", triff: "TPFG", from: "BKK", to: "KMG", cang: "B", stay: "1M", or: "2", fare: "YRT1Y16B", path: "0001", currency: "THB", price: "000012300.00", ei: "NON-END/NON-RER/NON-REF" }
];
var interfaces = {
    //查询产品
    querylist: function (data, fn) {
        var res = {
            data: [],
            total: 4
        }
        console.log(data);
        for (var i = 0; i < products.length; i++) {
            var tt = products[i];
            if (data.title) {
                if (tt.title.indexOf(data.title) < 0) continue;
            }
            if (data.type) {
                if (data.type != tt.type) continue;
            }
            if (data.code) {
                if (tt.code.indexOf(data.code) < 0) continue;
            }
            if (data.start) {
                if (data.start != tt.start) continue;
            }
            if (data.end) {
                if (data.end != tt.end) continue;
            }
            if (data.state) {
                if (data.state != tt.state) continue;
            }
            if (tt) res.data.push(tt);
        }
        console.log(res);
        if (data.pageCount != -1 && res.data.length > data.pageCount) {
            res.total = res.data.length / data.pageCount;
            if (res.data.length % data.pageCount > 0) {
                res.total++;
            }
            for (var i = 0; i < data.pageCount; i++) {
                res.data[i] = res.data[(data.currPage - 1) * data.pageCount + i];
            }
            res.data.length = data.pageCount;
            for (var i = res.data.length; i > 0; i--) {
                if (!res.data[i]) {
                    res.data.length = i;
                }
            }
        }
        fn(res);
    },
    //产品提交审核
    examine: function (data, fn) {
        console.log(data);
        fn();
    },
    //保存产品信息
    saveProduct: function (data, fn) {
        console.log(data);
        fn({ code: 1, id: 1 });
    },
    //获取产品的详情
    getProduct: function (id, fn) {
        var data = {
            title: "曼谷昆明航线销售运价",
            code: "BKK1703",
            end: "2017-3-30",
            except: [
                {
                    date_end: "2017-3-23",
                    date_start: "2017-3-23"
                },
                {
                    date_end: "2017-3-23",
                    date_start: "2017-3-23"
                }
            ],
            fenxi: "首尔-济南旅客以济南组织的团队和首尔回程散客为主。我公司在韩国竞争力不如大韩航空，主要是依靠济南出港的回程旅客为主要客源支撑。",
            isCheck: true,
            jingzheng: '山航在首尔-济南航线上主要竞争者是大韩航空。韩国出发的韩国旅客绝大多数会选择大韩航空，进行访问、商务和旅行。大韩航空的旅客相对高端。大韩航空的夏秋促销运价为25万韩币，比我公司的V舱促销高4万韩币。由于旅客构成不同和旅客偏好不同，大韩航空的价格对我公司渠道影响较小。',
            od: [
                {
                    country1: "1",
                    country2: "1",
                    loc1: "BKK",
                    loc2: "KMG"
                }
            ],
            range: "2",
            start: "2017-3-8",
            tiaozheng: '换季产品',
            travel: [
                {
                    date_end: "2017-3-25",
                    date_start: "2017-3-17"
                },
                {
                    date_end: "2017-3-25",
                    date_start: "2017-3-17"
                }
            ],
            type: "1",
            xiaoshou: "21万、18万的散客促销价格是我公司夏秋一直沿用的价格。",
            yuqi: "本份产品预计可以保持首尔-济南的旅客流量稳定。"
        }
        setTimeout(function () {
            fn(data);
        }, 1000);
    },
    //获取运价
    getPrice: function (id, fn) {
        var result = [];
        if (id > 20) {
            fn([]);
        } else {
            fn(prices);
        }
    },
    //添加运价
    addPrice: function (d, fn) {
        d.id = (Math.random() * 999) >> 0;
        fn(d);
    },
}