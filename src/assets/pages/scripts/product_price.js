/// <reference path="../../global/plugins/utils.js" />
/// <reference path="../../global/plugins/template.js" />
/// <reference path="../../global/plugins/jquery.min.js" />

$(function () {
    var param = utils.getRequest();
    var priceList = [];
    var modifyList = [];
    if (!param.id && !param.cid) return;
    function clearHtml() {
        $("#tables").html(template("tmp-list", { data: priceList }));

        //if (priceList.length == 0) {
        //    $("#tables").html('<tr><td colspan="12"><div>暂无记录</div></td></tr>');
        //} else {
        //    $("#tables").html(template("tmp-list", { data: priceList }));
        //}
    }
    $("#product_list .ck_all").change(function () {
        if (this.checked) {
            $("#product_list .ck_item").each(function () { this.checked = true; });
        } else {
            $("#product_list .ck_item").each(function () { this.checked = false; });
        }
    });
    if (param.id) {
        interfaces.getProduct(param.id, function (res) {
            $("#title").val(res.title);
            $("#start").val(res.start);
            $("#end").val(res.end);
            $("#code").val(res.code);
            $("#type").val(res.type);
        });
        interfaces.getPrice(param.id, function (res) {
            if (res) {
                priceList = res;
                clearHtml();
            }
        });
    }
    if (param.cid) {
        interfaces.getProduct(param.cid, function (res) {
            $("#title").val(res.title);
            $("#start").val(res.start);
            $("#end").val(res.end);
            $("#code").val(res.code);
            $("#type").val(res.type);
        });
        
    }
    //修改产品信息
    $("#btn_edit").click(function () {
        window.location.href = "product_detail.html?id="+param.id;
    });
    //提交审批
    $("#btn_sp").click(function () {
        toastr.info("提交成功");
    });
    function save() {
        var data = {
            id: $("#new_row .rowid").val() || "<span class='color-red'>新增</span>",
            from: $("#new_row .from").val(),
            to: $("#new_row .to").val(),
            or: $("#new_row .or").val(),
            cang: $("#new_row .cang").val(),
            stay: $("#new_row .stay").val(),
            fare: $("#new_row .fare").val(),
            path: $("#new_row .path").val(),
            currency: $("#new_row .currency").val(),
            price: $("#new_row .price").val(),
            ei: $("#new_row .ei").val(),
        }
        console.log(data);
        modifyList.push(data);
        priceList.push(data);
        clearHtml();
    }
    //保存
    $("#btn_save").click(function () {
        save();
        interfaces.addPrice(modifyList, function (res) {
            toastr.info("保存成功");
        });
    });
    //复制
    $("#btn_copy").click(function () {
        var item = $("#tables .ck_item:checked").eq(0);
        if (!item || item.length == 0) {
            toastr.error("请选择一个运价");
            return;
        }
        var id = item.data("id");
        id = parseInt(id);
        if (isNaN(id)) return;
        var data = priceList[id];
        console.log(data);
        clearHtml();
        $("#tables").append(template("tmp-row", data));
    });
    //增加
    $("#btn_add").click(function () {
        clearHtml();
        $("#tables").append(template("tmp-row", {}));
    });
    //取消
    $("#btn_cancel").click(function () {
        var item = $("#tables .ck_item:checked").eq(0);
        if (!item || item.length == 0) {
            toastr.error("请选择一个运价");
            return;
        }
        var id = item.data("id");
        id = parseInt(id);
        if (isNaN(id)) return;
        var data = priceList[id];
        if (data) data.del = 1;
        clearHtml();
    });
    //编辑
    $("#btn_row").click(function () {
        var item = $("#tables .ck_item:checked").eq(0);
        if (!item || item.length == 0) {
            toastr.error("请选择一个运价");
            return;
        }
        var id = item.data("id");
        id = parseInt(id);
        if (isNaN(id)) return;
        var data = priceList[id];
        clearHtml();
        $("#tables").append(template("tmp-row", data));
        priceList.splice(id, 1);
    });
});