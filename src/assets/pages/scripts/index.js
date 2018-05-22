var resData = [
    { "id": "1", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "BOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000012300.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "2", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "COW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000023000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "3", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "DOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000016000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "4", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "GOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000004400.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "5", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "HOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000010900.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "6", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "KOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000008400.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "7", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "LOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000007100.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "8", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "MOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000011500.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "9", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "QOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000005200.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "10", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "UOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4N", "coun": "THB", "price": "000000800.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "11", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "VOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4N", "coun": "THB", "price": "000001600.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "12", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "YOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000016000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "13", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "BRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000019000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "14", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "CRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000035600.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "15", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "DRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000026000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "16", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "GRT3M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000006600.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "17", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "HRT6M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000016000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "18", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "KRT6M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000013000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "19", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "LRT3M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000011000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "20", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "MRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000017500.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "21", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "QRT3M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000008000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "22", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "URT1M16B", "ow_rt": "2", "routing": "0001", "fn": "4N", "coun": "THB", "price": "000001100.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "23", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "VRT1M16B", "ow_rt": "2", "routing": "0001", "fn": "4N", "coun": "THB", "price": "000002200.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "24", "hs": "SC", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "YRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000026000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" }
]
var index = {
    init: function() {
        // this._get_oData();
        this._search();
    },
    _search: function() {
        var that = this;
        $("#btn_search").on("click", function() {
            $("#content").show();
            $("#_tbody").empty();
            that._show_oData();
        })
    },
    _get_oData: function() {
        var that = this;
        var search = {
            hc: $("#hc").val() || "",
            tariff: $("#tariff").val() || "",
            fare: $("#fare").val() || "",
            s_addr: $("#s_addr").val() || "",
            d_addr: $("#d_addr").val() || "",
            g_and_b: $("#g_and_b").val() || "",
            ow_rt: $("#ow_rt").val() || "",
            num: $("#num").val() || "",
            rule: $("#rule").val() || "",
            footnote: $("#footnote").val() || ""
        }
        $.ajax({
            url: "",
            type: "GET",
            data: search,
            success: function(odata) {
                that._show_oData(odata.result);
            }
        })
    },
    _show_oData: function(odata) {
        odata = resData;
        var oDataTpl = laytpl($("#odata").html());
        for (var i = 0; i < odata.length; i++) {
            oDataTpl.render(odata[i], function(html) {
                $("#_tbody").append(html);
            })
        }
        TableDatatablesEditable.init();
        this._xiugai();
    },
    _eTableInit: function() {
        var table = $('#sample_editable_2');
        var oTable = table.dataTable({
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5,

            "language": {
                "emptyTable": "没有记录",
                "info": "当前第 1 页 共 _MAX_ 条记录",
                "infoEmpty": "没有记录",
                "infoFiltered": "(当前第 1 页 共 _MAX_ 条记录)",
                "lengthMenu": "每页显示 _MENU_ 记录",
                "search": "查找: ",
                "zeroRecords": "没有记录",
            },
            "columnDefs": [{ // set default column settings
                'targets': [0]
            }, {
                "targets": [0],
            }],
            "order": [
                [0, "asc"]
            ]
        });
    },
    _xiugai: function() {
        var that = this;
        $("#xiugai").on("click", function() {
            that._eTableInit();
        })
        that._shenpi();
    },
    _shenpi: function() {
        $("#xiugai").on("click", function() {
            bootbox.confirm("确定提交吗？", function(result) {
                if (result == false) {
                    return;
                } else {
                    $("#t1").removeClass("active");
                    $("#t2").addClass("active");
                    $("#tab_2_1").removeClass("in").removeClass("active");
                    $("#tab_2_2").addClass("in").addClass("active");
                    toastr.info("提交成功！");
                }
            })
        })

    }
}
index.init();