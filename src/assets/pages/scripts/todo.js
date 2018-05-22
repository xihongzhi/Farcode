/// <reference path="system_interface.js" />
/// <reference path="../../global/plugins/template.js" />
var search_data = {
    currPage:1
};

var types = ["公布","销售","中转","其他"];
template.helper("setType", function (d) {
    return types[d];
});

function setData() {
    search_data.currPage = 1;
    search_data.code = $("#search_code").val();
    search_data.name = $("#search_name").val();
    search_data.type = $("#search_type").val();
    search_data.part = $("#search_part").val();
    search_data.pageCount = parseInt($("#table_length select").val());
    search();
}

function search(page) {
    if (page) search_data.currPage = page;
    interfaces.searchTodo(search_data, function (res) {
        if (res) {
            clearHtml(template("tmp-list", res));
            $("#test").bootstrapPaginator({
                currentPage: search_data.currPage,
                totalPages: res.total,
                onPageChanged: function (a,b, page) {
                    search(page);
                }
            });
        }
    });
}
function clearHtml(html) {
    $("#product_list").removeClass("hide");
    $("#list").html(html);
}

$(function () {
    $("#btn_search").click(function () {
        setData();
    });
    $("#product_list .ck_all").change(function () {
        if (this.checked) {
            $("#product_list .ck_item").each(function () { this.checked = true; });
        } else {
            $("#product_list .ck_item").each(function () { this.checked = false; });
        }
    });
    $("#table_length select").change(function () {
        search_data.pageCount = parseInt($("#table_length select").val());
        search();
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
    $("#btn_see").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            window.location.href = "task_detail.html?id=" + id;
        } else {
            toastr.info("请选择一个任务");
        }
    });
    
});