/// <reference path="system_interface.js" />
/// <reference path="../../global/plugins/utils.js" />

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
    var params = utils.getRequest();
    if (params.id) {
        $("#btn_reset").show().click(function () {
            toastr.success("重置成功");
        });
        interfaces.getUser(params.id, function (res) {
            if (!res) return;
            $("#info .id").val(res.id);
            $("#info .name").val(res.name);
            $("#info .data").val(res.data);
            $("#info .email").val(res.email);
            $("#info .role").val(res.role);
            $("#info .tell").val(res.tell);
            $("#info .phone").val(res.phone);
            $("#info .user").val(res.user);
            $("#info .rtx").val(res.rtx);

        });
    }
    $("#btn_save").click(function () {
        toastr.info("保存成功");
        setTimeout(function () {
            window.location.href = "user.html";
        }, 500);
    });
});