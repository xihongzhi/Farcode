//接口层
//待办任务
var task_todo = [
    { id: 1, code: "SC17S08", name: "山航全国经济南/青岛中转至新德里运价（散客）", type: "公布", part1: "收益管理部", start: "2017/2/1", end: "2017/12/31", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 2, code: "SC17S09", name: "山航全国经济南/青岛中转至新德里运价（散客）", type: "中转", part1: "收益管理部", start: "2017/2/2", end: "2017/12/31", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 3, code: "SC17S10", name: "山航全国经济南中转至东京运价（散客）", type: "中转", part1: "收益管理部", start: "2017/2/3", end: "2017/12/31", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 4, code: "TAO1728", name: "山航青岛-大阪、东京代码共享航班销售价格", type: "销售", part1: "营销委", start: "2017/2/1", end: "2017/12/31", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 5, code: "ICN1706", name: "首尔至山东销售运价20170326-20171231", type: "销售", part1: "营销委", start: "2017/3/26", end: "2017/10/28", fan: "全球GDS", part: "首尔", time: "2017/1/17" },
    { id: 6, code: "ICN1703", name: "首尔-济南VU舱促销运价20170326-20171028", type: "促销", part1: "营销委", start: "2017/3/26", end: "2017/10/28", fan: "全球GDS", part: "首尔", time: "2017/1/17" },
    { id: 7, code: "ICN1704", name: "首尔-青岛VU舱促销运价20170326-20171028", type: "促销", part1: "营销委", start: "2017/3/26", end: "2017/10/28", fan: "全球GDS", part: "首尔", time: "2017/1/17" },
    { id: 8, code: "ICN1705", name: "首尔-烟台VU舱促销运价20170326-20171028", type: "促销", part1: "营销委", start: "2017/3/26", end: "2017/10/28", fan: "全球GDS", part: "首尔", time: "2017/1/17" },
    { id: 9, code: "SC17S12", name: "山航全国经山东中转至首尔运价20170326-20171028", type: "中转", part1: "收益管理部", start: "2017/3/26", end: "2017/10/28", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 10, code: "SC17S11", name: "山航全国经济南、重庆中转至暹粒、金边、清迈20170326-20171028", type: "中转", part1: "收益管理部", start: "2017/3/26", end: "2017/10/28", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 11, code: "SC17S13", name: "山航全国经山东中转至曼谷运价20170326-20171028(除外0711-0826,1001-1007)", type: "中转", part1: "收益管理部", start: "2017/3/26", end: "2017/10/28", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 12, code: "SC17S16", name: "山航全国经山东中转至大阪运价2017.03.26-2017.10.28", type: "中转", part1: "收益管理部", start: "2017/3/26", end: "2017/10/28", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 13, code: "SC17S14", name: "山航全国经烟台中转至台北运价20170326-20171028（除外0711-0826）", type: "中转", part1: "收益管理部", start: "2017/3/26", end: "2017/10/28", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 14, code: "SC17S15", name: "山航全国经济南、青岛中转至台北运价20170326-20171028（除外0711-0826）", type: "中转", part1: "收益管理部", start: "2017/3/26", end: "2017/10/28", fan: "中国大陆", part: "济南", time: "2017/1/17" },
    { id: 15, code: "BKK1720", name: "曼谷-山东航线销售价格2017.03.01-2017.12.31", type: "销售", part1: "营销委", start: "2017/3/1", end: "2017/10/28", fan: "全球GDS", part: "曼谷", time: "2017/1/17" },
    { id: 16, code: "SC17S26", name: "暑运山航全国经济南、重庆中转至暹粒、金边、清迈2017.0711-2017.0826、1001-1007", type: "中转", part1: "收益管理部", start: "2017/7/11", end: "2017/10/28", fan: "全球GDS", part: "济南", time: "2017/1/17" },
    { id: 17, code: "SC17S27", name: "暑运山航全国经山东中转至曼谷运价2017.0711-2017.0826、1001-1007", type: "中转", part1: "收益管理部", start: "2017/7/11", end: "2017/10/28", fan: "全球GDS", part: "济南", time: "2017/1/17" },
    { id: 18, code: "TAO1737", name: "青岛-大阪预售D 舱20170227-20171231", type: "促销", part1: "收益管理部", start: "2017/2/7", end: "2017/12/31", fan: "全球GDS", part: "青岛", time: "2017/1/17" },
    { id: 19, code: "TEL17121", name: "青岛-大阪预售D 舱20170227-20171231", type: "促销", part1: "营销委", start: "2017/2/7", end: "2017/12/31", fan: "直销", part: "青岛", time: "2017/1/17" },
    { id: 20, code: "SC17S25", name: "山航全国经山东中转至首尔运价07月11日-08月26日,10月01日-10月07日", type: "中转", part1: "营销委", start: "2017/7/11", end: "2017/10/7", fan: "中国大陆", part: "济南", time: "2017/1/17" },
];
var task_com = [
    { id: 1, code: "SC17S08", name: "山航全国经济南/青岛中转至新德里运价（散客）", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 2, code: "SC17S09", name: "山航全国经济南/青岛中转至新德里运价（散客）", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 3, code: "SC17S10", name: "山航全国经济南中转至东京运价（散客）", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 4, code: "TAO1728", name: "山航青岛-大阪、东京代码共享航班销售价格", type: "销售", part1: "营销委", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 5, code: "ICN1706", name: "首尔至山东销售运价20170326-20171231", type: "销售", part1: "营销委", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 6, code: "ICN1703", name: "首尔-济南VU舱促销运价20170326-20171028", type: "促销", part1: "营销委", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 7, code: "ICN1704", name: "首尔-青岛VU舱促销运价20170326-20171028", type: "促销", part1: "营销委", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 8, code: "ICN1705", name: "首尔-烟台VU舱促销运价20170326-20171028", type: "促销", part1: "营销委", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 9, code: "SC17S12", name: "山航全国经山东中转至首尔运价20170326-20171028", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 10, code: "SC17S11", name: "山航全国经济南、重庆中转至暹粒、金边、清迈20170326-20171028", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 11, code: "SC17S13", name: "山航全国经山东中转至曼谷运价20170326-20171028(除外0711-0826,1001-1007)", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 12, code: "SC17S16", name: "山航全国经山东中转至大阪运价2017.03.26-2017.10.28", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 13, code: "SC17S14", name: "山航全国经烟台中转至台北运价20170326-20171028（除外0711-0826）", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 14, code: "SC17S15", name: "山航全国经济南、青岛中转至台北运价20170326-20171028（除外0711-0826） ", type: "中转", part1: "收益管理部", oper: "通过", start: "2017/1/17", end: "2017/1/20" },
    { id: 15, code: "BKK1720", name: "曼谷-山东航线销售价格2017.03.01-2017.12.31", type: "销售", part1: "营销委", oper: "拒绝", start: "2017/1/17", end: "2017/1/20" },
    { id: 16, code: "SC17S26", name: "暑运山航全国经济南、重庆中转至暹粒、金边、清迈2017.0711-2017.0826、1001-1007", type: "中转", part1: "收益管理部", oper: "拒绝", start: "2017/1/17", end: "2017/1/20" },
    { id: 17, code: "SC17S27", name: "暑运山航全国经山东中转至曼谷运价2017.0711-2017.0826、1001-1007", type: "中转", part1: "收益管理部", oper: "拒绝", start: "2017/1/17", end: "2017/1/20" },
    { id: 18, code: "TAO1737", name: "青岛-大阪预售D 舱20170227-20171231", type: "促销", part1: "收益管理部", oper: "拒绝", start: "2017/1/17", end: "2017/1/20" },
    { id: 19, code: "TEL17121", name: "青岛-大阪预售D 舱20170227-20171231", type: "促销", part1: "营销委", oper: "拒绝", start: "2017/1/17", end: "2017/1/20" },
    { id: 20, code: "SC17S25", name: "山航全国经山东中转至首尔运价07月11日-08月26日,10月01日-10月07日", type: "中转", part1: "营销委", oper: "拒绝", start: "2017/1/17", end: "2017/1/20" }
];
var interfaces = {
    //查询待办任务
    searchTodo: function (data, fn) {
        var res = {
            data: [],
            total: 1
        }
        console.log(data);
        for (var i = 0; i < task_todo.length; i++) {
            var tt = task_todo[i];
            if (data.name) {
                if (tt.name.indexOf(data.name) < 0) continue;
            }
            if (data.type) {
                if (data.type != tt.type) continue;
            }
            if (data.code) {
                if (tt.code.indexOf(data.code) < 0) continue;
            }
            if (data.part1) {
                if (data.part1 != tt.part1) continue;
            }
            if (tt) res.data.push(tt);
        }
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
        console.log(res);
        fn(res);
    },
    //查询已办任务
    searchCompleted: function (data, fn) {
        var res = {
            data: [],
            total: 1
        }
        console.log(data);
        for (var i = 0; i < task_com.length; i++) {
            var tt = task_com[i];
            if (data.name) {
                if (tt.name.indexOf(data.name) < 0) continue;
            }
            if (data.type) {
                if (data.type != tt.type) continue;
            }
            if (data.part1) {
                if (data.part1 != tt.part1) continue;
            }
            if (data.oper) {
                if (data.oper != tt.oper) continue;
            }
            if (tt) res.data.push(tt);
        }
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
        console.log(res);
        fn(res);
    },

}