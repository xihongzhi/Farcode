/// <reference path="../../global/plugins/bootstrap-paginator.min.js" />
/// <reference path="../../global/plugins/template.js" />
/// <reference path="product_interface.js" />
var search_data = {
    currPage: 1,//当前页
    pageCount: 20//每页个数
}
function setData() {
    search_data.currPage = 1;
    search_data.title = $("#title").val();
    search_data.type = $("#type").val();
    search_data.code = $("#code").val();
    search_data.start = $("#start").val();
    search_data.end = $("#end").val();
    search_data.state = $("#state").val();
    search_data.pageCount = parseInt($("#table_length select").val());
    search();
}

function search(page) {
    if (page) search_data.currPage = page;
    interfaces.querylist(search_data, function (res) {
        if (res) {
            clearHtml(template("tmp-list", res));
            $("#test").off().empty().bootstrapPaginator({
                currentPage: search_data.currPage,
                totalPages: res.total,
                onPageChanged: function (a, b, c) {
                    search(c);
                }
            });
        }
    });
}
function clearHtml(html) {
    $("#product_list").removeClass("hide");
    $("#product_list tbody").html(html);
}
$(function () {
    if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            rtl: App.isRTL(),
            autoclose: true,
            zIndexOffset: 9999,
            orientation:"bottom"
        });
    }
    $("#table_length select").change(function () {
        search_data.pageCount = parseInt($("#table_length select").val());
        search();
    });
    $("#btn_search").click(function () {
        setData();
    });
    $("#product_list .ck_all").change(function () {
        if (this.checked) {
            $("#product_list .ck_item").each(function () { this.checked = true;});
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
    $("#btn_see").on("click", function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            window.location.href = "product_price.html?id=" + id;
        } else {
            toastr.info("请选择一个产品");
        }
    });
    $("#btn_edit").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            window.location.href = "product_detail.html?id=" + id;
        } else {
            toastr.info("请选择一个产品");
        }
    });
    $("#btn_copy").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            window.location.href = "product_detail.html?cid=" + id;
        } else {
            toastr.info("请选择一个产品");
        }
    });
    $("#btn_add_price").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            window.location.href = "product_price.html?cid=" + id;
        } else {
            toastr.info("请选择一个产品");
        }
    });
    $("#btn_updata").click(function () {
        var ids = $(".ck_item:checked");
        if (ids&&ids.length>0) {
            interfaces.examine(ids, function () {
                toastr.info("提交成功");
            });
        } else {
            toastr.info("请选择一个产品");
        }
    });
});