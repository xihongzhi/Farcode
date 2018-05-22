/// <reference path="../../global/plugins/bootstrap-paginator.min.js" />
/// <reference path="../../global/plugins/template.js" />
/// <reference path="product_interface.js" />

function setModel(id) {
    interfaces.getProduct(id, function (res) {
        if (res) {
            $("#title").val(res.title);
            $("#type").val(res.type);
            $("#code").val(res.code);
            $("#isCheck")[0].checked = res.isCheck;
            $("#range").val(res.range);
            $("#start").val(res.start);
            $("#end").val(res.end);

            if (res.travel[0]) {
                $("#begin .mt-repeater-item").eq(0).find(".date_start").val(res.travel[0].date_start);
                $("#begin .mt-repeater-item").eq(0).find(".date_end").val(res.travel[0].date_end);
            }
            for (var i = 1; i < res.travel.length; i++) {
                var temp = res.travel[i];
                $("#begin .group").append(template("tmp-begin", temp));
            }
            if (res.except[0]) {
                $("#except .mt-repeater-item").eq(0).find(".date_start").val(res.travel[0].date_start);
                $("#except .mt-repeater-item").eq(0).find(".date_end").val(res.travel[0].date_end);
            }
            for (var i = 1; i < res.except.length; i++) {
                var temp = res.except[i];
                $("#except .group").append(template("tmp-except", temp));
            }
            if (res.od[0]) {
                $("#od .mt-repeater-item").eq(0).find(".country1").val(res.od[0].country1);
                $("#od .mt-repeater-item").eq(0).find(".loc1").val(res.od[0].loc1);
                $("#od .mt-repeater-item").eq(0).find(".country2").val(res.od[0].country2);
                $("#od .mt-repeater-item").eq(0).find(".loc2").val(res.od[0].loc2);
            }
            for (var i = 1; i < res.od.length; i++) {
                var temp = res.od[i];
                $("#od .group").append(template("tmp-od", temp));
            }
            $('.date-picker').datepicker({
                rtl: App.isRTL(),
                format: "yyyy-m-d",
                orientation: "auto",
                autoclose: true,
                zIndexOffset: 9999,
            });
            $("#fenxi").val(res.fenxi);
            $("#tiaozheng").val(res.tiaozheng);
            $("#xiaoshou").val(res.xiaoshou);
            $("#jingzheng").val(res.jingzheng);
            $("#yuqi").val(res.yuqi);

        }
    });
}
$(function () {
    var params = utils.getRequest();

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
    $("#begin .mt-repeater-add").click(function () {
        $("#begin .group").append(template("tmp-begin", {}));
        $('.date-picker').datepicker({
            rtl: App.isRTL(),
            format: "yyyy-m-d",
            orientation: "auto",
            autoclose: true,
            zIndexOffset: 9999,
        });
    });
    $("#begin").on("click", ".btn_del", function () {
        $(this).parent().parent().remove();
    });
    $("#except .mt-repeater-add").click(function () {
        $("#except .group").append(template("tmp-except", {}));
        $('.date-picker').datepicker({
            rtl: App.isRTL(),
            format: "yyyy-m-d",
            orientation: "auto",
            autoclose: true, zIndexOffset: 9999,
        });
    });
    $("#except").on("click", ".btn_del", function () {
        $(this).parent().parent().remove();
    });
    $("#od .mt-repeater-add").click(function () {
        $("#od .group").append(template("tmp-od", {}));
    });
    $("#od").on("click", ".btn_del", function () {
        $(this).parent().parent().remove();
    });

    if (params.id) { setModel(params.id); }
    if (params.cid) { setModel(params.cid); }
    if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            rtl: App.isRTL(),
            format: "yyyy-m-d",
            orientation: "left",
            autoclose: true,
            zIndexOffset: 9999,
            orientation: "bottom"
        });
    }
    $("#btn_save").click(function () {
        var data = {
            id:params.id||0,
            title: $("#title").val(),
            type: $("#type").val(),
            code: $("#code").val(),
            isCheck: $("#isCheck")[0].checked,
            range: $("#range").val(),
            start: $("#start").val(),
            end: $("#end").val(),
            travel: [],
            except: [],
            od: [],
            fenxi: $("#fenxi").val(),
            tiaozheng: $("#tiaozheng").val(),
            xiaoshou: $("#xiaoshou").val(),
            jingzheng: $("#jingzheng").val(),
            yuqi: $("#yuqi").val(),
        }
        if (!data.title) {
            toastr.error("请填写产品名称");
            return;
        }
        if (!data.code) {
            toastr.error("请填写产品编号");
            return;
        }
        if (!data.start) {
            toastr.error("请填写生效日期");
            return;
        }
        if (!data.end) {
            toastr.error("请填写失效日期");
            return;
        }
        $("#begin .mt-repeater-item").each(function () {
            var temp = {
                date_start: $(this).find(".date_start").val(),
                date_end: $(this).find(".date_end").val()
            }
            data.travel.push(temp);
        });
        if (data.travel.length == 0 || !data.travel[0].date_start || !data.travel[0].date_end) {
            toastr.error("至少要有一个旅行日期");
            return;
        }
        $("#except .mt-repeater-item").each(function () {
            var temp = {
                date_start: $(this).find(".date_start").val(),
                date_end: $(this).find(".date_end").val()
            }
            data.except.push(temp);
        });
        
        $("#od .mt-repeater-item").each(function () {
            var temp = {
                country1: $(this).find(".country1").val(),
                loc1: $(this).find(".loc1").val(),
                country2: $(this).find(".country2").val(),
                loc2: $(this).find(".loc2").val(),
            }
            data.od.push(temp);
        });
        if (data.travel.length == 0 || !data.od[0].loc1 || !data.od[0].loc2) {
            toastr.error("至少要有一个OD");
            return;
        }
        interfaces.saveProduct(data, function (res) {
            if (res) {
                toastr.info("保存成功");
                setTimeout(function () {
                    if (params.id) {
                        window.location.href = "product_price.html?id=" + params.id;
                    } else {
                        window.location.href = "product_price.html?id=100";
                    }
                }, 500);
            }
        });
    });
});