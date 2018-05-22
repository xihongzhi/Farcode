/// <reference path="system_interface.js" />
/// <reference path="../../global/plugins/template.js" />
var search_data = {
    currPage: 1,
    pageCount:5
};

var role = ["全部", "航线管理员", "收益部经理"];
template.helper("setRole", function (d) {
    return role[d];
});
template.helper("setState", function (d) {
    return d == 0 ? "启用" : "停用";
});
function setData() {
    search_data.currPage = 1;
    search_data.id = $("#search_id").val();
    search_data.name = $("#search_name").val();
    search_data.user = $("#search_user").val();
    search_data.role = $("#search_role").val();
    search_data.state = $("#search_state").val();
    search_data.pageCount = parseInt($("#table_length select").val());
    search();
}

function search(page) {
    if (page) search_data.currPage = page;
    interfaces.searchUser(search_data, function (res) {
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
    $("#table_length select").change(function () {
        search_data.pageCount = parseInt($("#table_length select").val());
        search();
    });
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
    $("#btn_open").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            interfaces.setUserState({ id: id, state: 0 }, function () {
                toastr.info("操作成功");
                search();
            });
        } else {
            toastr.info("请选择一个角色");
        }
    });
    $("#btn_close").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            interfaces.setUserState({ id: id, state: 1 }, function () {
                toastr.info("操作成功");
                search();
            });
        } else {
            toastr.info("请选择一个角色");
        }
    });
    $("#btn_del").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (!id) {
            toastr.info("请选择一个用户");
            return;
        }
        bootbox.confirm("确定要删除吗？", function (result) {
            if (result) {
                interfaces.delUser(id, function () {
                    toastr.success("删除成功");
                    search();
                });
            }
        })
    });
});