/// <reference path="task_interface.js" />
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
    $("#btn_sure").click(function () {
        if ($("#txt").val()=="") {
            toastr.error("请填写审批意见"); return;
        }
        window.location.href = "completed.html";
    });
    $("#btn_back").click(function () {
        if ($("#txt").val() == "") {
            toastr.error("请填写审批意见"); return;
        }
        window.location.href = "todo.html";
    });
});