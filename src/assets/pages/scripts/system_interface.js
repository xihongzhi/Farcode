//接口层
var roles = [
    { id: 1, title: "流程测试", des: "流程测试" },
    { id: 2, title: "国际业务", des: "国际业务" },
    { id: 3, title: "营销委", des: "营销委" },
    { id: 4, title: "收益部经理", des: "收益部经理" },
    { id: 5, title: "航线管理区经理", des: "航线管理区经理" },
    { id: 6, title: "运价管理组", des: "运价管理组" },
    { id: 7, title: "航线管理员", des: "航线管理员" },
    { id: 8, title: "营业部", des: "营业部" },
    { id: 9, title: "系统管理员", des: "系统管理员" },
];
var datas = [
    { id: 1, title: "国际业务", gang: "国际业务", des: "" },
    { id: 2, title: "大阪支店业务员", gang: "营业部业务员", des: "" },
    { id: 3, title: "台北营业部业务员", gang: "营业部业务员", des: "" },
    { id: 4, title: "南昌营业部", gang: "营业部业务员", des: "" },
    { id: 5, title: "全国营业部", gang: "营业部业务员", des: "" },
    { id: 6, title: "电子商务销售服务中心", gang: "营业部业务员", des: "" },
    { id: 7, title: "系统管理员", gang: "系统管理员", des: "系统管理员" },
    { id: 8, title: "呼和浩特营业部业务员", gang: "营业部业务员", des: "呼和浩特营业部业务员" },
    { id: 9, title: "郑州营业部业务员", gang: "营业部业务员", des: "郑州营业部业务员" },
];
var users = [
    { id: 1, user: "liuwh", name: "张三", role: "收益部经理", data: "国际业务", trx: "liuwh", tell: "", phone: "", state: "启用" },
    { id: 2, user: "ngt", name: "王四", role: "系统管理员", data: "系统管理员", trx: "ngt", tell: "", phone: "", state: "启用" },
    { id: 3, user: "liwei2", name: "赵四", role: "航线管理员", data: "航线管理员", trx: "liwei2", tell: "", phone: "", state: "启用" },
    { id: 4, user: "liushy", name: "李二", role: "航线管理员", data: "航线管理员", trx: "liushy", tell: "", phone: "", state: "启用" },
    { id: 5, user: "lius3", name: "刘一", role: "航线管理员", data: "航线管理员", trx: "lius3", tell: "", phone: "", state: "停用" },
    { id: 6, user: "zhangn", name: "周五", role: "营业部", data: "长春营业部人员", trx: "zhangn", tell: "", phone: "", state: "启用" },
    { id: 7, user: "lishengzhang", name: "郑六", role: "营业部", data: "贵阳营业部人员", trx: "lishengzhang", tell: "", phone: "", state: "启用" },
    { id: 8, user: "zhujx2", name: "王十", role: "营业部", data: "温州营业部人员", trx: "zhujx2", tell: "", phone: "", state: "启用" },
];
var interfaces = {
    //搜索角色
    searchRole: function (data, fn) {
        console.log(data);
        var res = [];
        var len = data.currPage * data.pageCount;
        if (data.pageCount == -1) len = roles.length;
        for (var i = 0; i < len; i++) {
            if (roles[i]) res[i] = roles[i];
        }
        fn({ data: res, total: 1 });
    },
    //搜索数据
    searchData: function (data, fn) {
        console.log(data);
        var res = [];
        var len = data.currPage * data.pageCount
        if (data.pageCount == -1) len = datas.length;
        for (var i = 0; i < len; i++) {
            if (datas[i]) res[i] = datas[i];
        }
        fn({ data: res, total: 1 });
    },
    //删除角色
    delRole: function (id, fn) {
        fn({ code: 1 });
    },
    //获取角色
    getRole: function (id, fn) {
        id = parseInt(id);
        if (isNaN(id)) id = 1;
        id--;
        fn(roles[id]);
    },
    //获取未分配权限
    getJurisdiction: function (d, fn) {
        var data = [
                    { id: 1, name: "运价查询" },
                    { id: 2, name: "运价添加" },
                    { id: 3, name: "运价变价" },
                    { id: 4, name: "产品查询" },
                    { id: 5, name: "产品添加" },
                    { id: 6, name: "产品编辑" },
                    { id: 7, name: "产品查询运价" },
                    { id: 8, name: "系统管理" },
                    { id: 9, name: "审批管理" },
        ];
        fn(data);
    },
    //获取已分配权限
    getRoleJurisdiction: function (d, fn) {
        var data = [
                    {
                        "name": "审批管理", id: 7
                    },
                    {
                        "name": "发布管理", id: 8
                    },
                    {
                        "name": "数据导出", id: 9
                    }
        ]
        fn(data);
    },
    //获取数据角色
    getData: function (id, fn) {
        id = parseInt(id);
        if (isNaN(id)) id = 1;
        id--;
        fn(datas[id]);
    },
    //获取未分配权限
    getDataJurisdictionAll: function (d, fn) {
        var data = [
            { id: 1, name: "济南营业厅", open: true, icon: "fa fa-search" },
			{ id: 2, name: "厦门营业厅", open: true },
            { id: 3, name: "南京营业厅", open: true },
            { id: 4, name: "上海营业厅", open: true },
            { id: 5, name: "深圳营业厅", open: true }
        ];
        fn(data);
    },
    //获取已分配权限
    getDataJurisdiction: function (d, fn) {
        var data = [
                   { id: 7, name: "广州营业厅", open: true }
        ]
        fn(data);
    },
    //搜索用户
    searchUser: function (data, fn) {
        console.log(data);
        var res = [];
        for (var i = 0; i < users.length; i++) {
            var tt = users[i];
            if (data.id) {
                if (data.id != tt.id) continue;
            }
            if (data.name) {
                if (tt.name.indexOf(data.name) < 0) continue;
            }
            if (data.user) {
                if (tt.user.indexOf(data.user) < 0) continue;
            }
            if (data.role) {
                if (data.role != tt.role) continue;
            }
            if (data.state) {
                if (data.state != tt.state) continue;
            }
            if(tt)res.push(tt);
        }
        var len = data.currPage * data.pageCount
        if (data.pageCount == -1) len = res.length;
        if (res.length > len) {
            res.length = len;
        }
        fn({ data: res, total: 1 });
    },
    //设置状态
    setUserState: function (d, fn) {
        fn({ code: 1 });
    },
    //删除用户
    delUser: function (d, fn) {
        fn({ code: 1 });
    },
    //获取用户信息
    getUser: function (d, fn) {
        fn(users[1]);
    },
}