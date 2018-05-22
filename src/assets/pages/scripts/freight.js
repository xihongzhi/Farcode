/// <reference path="index_interface.js" />
/// <reference path="../../global/plugins/template.js" />

var search_data = {
    currPage: 1
};
var list_price = [];
var new_price = [];
function search(page) {
    if (page) search_data.currPage = page;
    interfaces.searchFreight(search_data, function (res) {
        if (res) {
            list_price = res.data;
            clearHtml(template("odata", res));
            $("#test").bootstrapPaginator({
                currentPage: search_data.currPage,
                totalPages: res.total,
                onPageChanged: function (a, b, page) {
                    search(page);
                }
            });
        }
    });
}
function setData() {
    search_data.currPage = 1;
    search_data.tariff = $("#search_tariff").val();
    search_data.fare = $("#search_fare").val();
    search_data.s_con = $("#search_s_con").val();
    search_data.d_con = $("#search_d_con").val();
    search_data.pageCount = parseInt($("#table_length select").val());
    search();
}
function clearHtml(html) {
    $("#content").removeClass("hide");
    $("#_tbody").html(html);
}
function refresh() {
    $("#_tbody").html(template("odata", { data: list_price }));
}
function showNew() {
    $("#new_table").html(template("odata", { data: new_price }));
}
function getPrice(id) {
    for (var i = 0; i < list_price.length; i++) {
        if (list_price[i].id == id) return list_price[i];
    }
    return {};
}
$(function () {
    //搜索
    $("#btn_search").click(function () {
        setData();
    });
    $("#table_length select").change(function () {
        search_data.pageCount = parseInt($("#table_length select").val());
        search();
    });
    $("#product_list .ck_all").change(function () {
        if (this.checked) {
            $("#product_list .ck_item").each(function () { this.checked = true; });
        } else {
            $("#product_list .ck_item").each(function () { this.checked = false; });
        }
    });
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-center",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    //复制
    $("#btn_copy").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            refresh();
            var model = getPrice(id);
            $("#_tbody").append(template("tmp-row",model));
        } else {
            toastr.info("请选择一行运价");
        }
    });
    //添加
    $("#btn_add").click(function () {
        refresh();
        $("#_tbody").append(template("tmp-row", {}));
    });
    //取消,删除
    $("#btn_cancel").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            for (var i = 0; i < list_price.length; i++) {
                if (list_price[i].id == id) {
                    list_price[i].del = 1;
                    new_price.push(list_price[i]);
                }
            }
            refresh();
            showNew();
        } else {
            toastr.info("请选择一行运价");
        }
    });
    $("#btn_update").click(function () {
        var data = {
            id: "新增",
            s_addr: $("#new_row .s_addr").val(),
            d_addr: $("#new_row .d_addr").val(),
            s_con: $("#new_row .s_con").val(),
            d_con: $("#new_row .d_con").val(),
            hs: $("#new_row .hs").val(),
            tariff: $("#new_row .tariff").val(),
            fare: $("#new_row .fare").val(),
            ow_rt: $("#new_row .ow_rt").val(),
            routing: $("#new_row .routing").val(),
            fn: $("#new_row .fn").val(),
            coun: $("#new_row .coun").val(),
            price: $("#new_row .price").val(),
            s_time: $("#new_row .s_time").val(),
            e_time: $("#new_row .e_time").val(),
        }
        list_price.push(data);
        var data2 = {
            id: "",
            s_addr: $("#new_row .s_addr").val(),
            d_addr: $("#new_row .d_addr").val(),
            s_con: $("#new_row .s_con").val(),
            d_con: $("#new_row .d_con").val(),
            hs: $("#new_row .hs").val(),
            tariff: $("#new_row .tariff").val(),
            fare: $("#new_row .fare").val(),
            ow_rt: $("#new_row .ow_rt").val(),
            routing: $("#new_row .routing").val(),
            fn: $("#new_row .fn").val(),
            coun: $("#new_row .coun").val(),
            price: $("#new_row .price").val(),
            s_time: $("#new_row .s_time").val(),
            e_time: $("#new_row .e_time").val(),
        }
        new_price.push(data2);
        showNew();
        refresh();
    });
    //切换提交
    $("#btn_save").click(function () {
        $("#tab_2_2,#t2").addClass("active");
        $("#tab_2_2,#t2").addClass("in");
        $("#tab_2_1,#t1").removeClass("active");
        $("#tab_2_1,#t1").removeClass("in");
        showNew();
    });
    
    $("#btn_sub").click(function () {
        toastr.success("提交成功");
    });
});