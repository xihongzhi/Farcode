/// <reference path="system_interface.js" />
/// <reference path="../../global/plugins/utils.js" />

var role1 = [], role2 = [];

function beforeClick(treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("tree1");
    zTree.checkNode(treeNode, !treeNode.checked, null, true);
    return false;
}
function beforeClick2(treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("tree2");
    zTree.checkNode(treeNode, !treeNode.checked, null, true);
    return false;
}
function initzTree1() {
    var setting = {
        view: {
            showIcon: false,
        },
        check: {
            enable: true,
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            beforeClick: beforeClick,
        }
    };

    $.fn.zTree.init($("#tree1"), setting, role1);
}
function initzTree2() {
    var setting = {
        view: {
            showIcon: false
        },
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            beforeClick: beforeClick2,
        }
    };

    $.fn.zTree.init($("#tree2"), setting, role2);
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
    var params = utils.getRequest();
    interfaces.getJurisdiction(params.id, function (res) {
        if (res) {
            role1 = res;
            initzTree1();
        }
    });
    if (params.id) {
        interfaces.getRoleJurisdiction(params.id, function (res) {
            if (res) {
                role2 = res;
                initzTree2();
            }
        });
        interfaces.getRole(params.id, function (res) {
            if (res) {
                $("#search_name").val(res.title);
                $("#search_des").val(res.title);
            }
        });
    } else {
        initzTree2();
    }
    $("#sel_all").click(function () {
        var fl = this.checked;
        var treeObj = $.fn.zTree.getZTreeObj("tree1");
        treeObj.checkAllNodes(fl);
    });
    $("#can_all").click(function () {
        var fl = this.checked;
        var treeObj = $.fn.zTree.getZTreeObj("tree2");
        treeObj.checkAllNodes(fl);
    });
    $("#btn_add").click(function () {
        var treeObj = $.fn.zTree.getZTreeObj("tree1");
        var nodes = treeObj.getCheckedNodes(true);
        if (nodes.length == 0) {
            toastr.info("请选择一个权限");
        } else {
            var tt = $.fn.zTree.getZTreeObj("tree2");
            tt.addNodes(null, nodes);
            tt.checkAllNodes(false);
            for (var i = 0, l = nodes.length; i < l; i++) {
                treeObj.removeNode(nodes[i]);
            }
        }
    });
    $("#btn_cancel").click(function () {
        var treeObj = $.fn.zTree.getZTreeObj("tree2");
        var nodes = treeObj.getCheckedNodes(true);
        console.log(nodes)
        toastr.info("操作成功");
        if (nodes.length == 0) {
            toastr.info("请选择一个权限");
        } else {
            var tt = $.fn.zTree.getZTreeObj("tree1");
            tt.addNodes(null, nodes);
            tt.checkAllNodes(false);
            for (var i = 0, l = nodes.length; i < l; i++) {
                treeObj.removeNode(nodes[i]);
            }
        }
    });
    
    $("#btn_save_back").click(function () {
        toastr.success("保存成功");
        setTimeout(function () {
            window.location.href = "role.html";
        }, 500);
    });
});