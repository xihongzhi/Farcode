        var nCopy = null;
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
        var TableDatatablesEditable = function() {
            var handleTable = function() {
                function restoreRow(oTable, nRow) {
                    var aData = oTable.fnGetData(nRow);
                    var jqTds = $('>td', nRow);
                    for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                        oTable.fnUpdate(aData[i], nRow, i, false);
                    }

                    oTable.fnDraw();
                }

                function editRow(oTable, nRow) {
                    var aData = oTable.fnGetData(nRow);
                    var jqTds = $('>td', nRow);
                    jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
                    jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
                    jqTds[2].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[2] + '">';
                    jqTds[3].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[3] + '">';
                    jqTds[4].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[4] + '">';
                    jqTds[5].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[5] + '">';
                    jqTds[6].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[6] + '">';
                    jqTds[7].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[7] + '">';
                    jqTds[8].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[8] + '">';
                    jqTds[9].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[9] + '">';
                    jqTds[10].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[10] + '">';
                    jqTds[11].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[11] + '">';
                    jqTds[12].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[12] + '">';
                    jqTds[13].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[13] + '">';
                    jqTds[14].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[14] + '">';
                    jqTds[15].innerHTML = '<a class="edit" href="">保存</a>';
                    jqTds[16].innerHTML = '<a class="cancel" href="">取消</a>';
                    jqTds[17].innerHTML = '<a class="copy" href="">复制</a>';
                }

                function saveRow(oTable, nRow) {
                    var jqInputs = $('input', nRow);
                    oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                    oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                    oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                    oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                    oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
                    oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
                    oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
                    oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
                    oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
                    oTable.fnUpdate(jqInputs[9].value, nRow, 9, false);
                    oTable.fnUpdate(jqInputs[10].value, nRow, 10, false);
                    oTable.fnUpdate(jqInputs[11].value, nRow, 11, false);
                    oTable.fnUpdate(jqInputs[12].value, nRow, 12, false);
                    oTable.fnUpdate(jqInputs[13].value, nRow, 13, false);
                    oTable.fnUpdate(jqInputs[13].value, nRow, 14, false);
                    oTable.fnUpdate('<a class="edit" href="">编辑</a>', nRow, 15, false);
                    oTable.fnUpdate('<a class="delete" href="">删除</a>', nRow, 16, false);
                    oTable.fnUpdate('<a class="copy" href="">复制</a>', nRow, 17, false);
                    oTable.fnDraw();
                }

                function cancelEditRow(oTable, nRow) {
                    var jqInputs = $('input', nRow);
                    oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                    oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                    oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                    oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                    oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
                    oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
                    oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
                    oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
                    oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
                    oTable.fnUpdate(jqInputs[9].value, nRow, 9, false);
                    oTable.fnUpdate(jqInputs[10].value, nRow, 10, false);
                    oTable.fnUpdate(jqInputs[11].value, nRow, 11, false);
                    oTable.fnUpdate(jqInputs[12].value, nRow, 12, false);
                    oTable.fnUpdate(jqInputs[13].value, nRow, 13, false);
                    oTable.fnUpdate(jqInputs[13].value, nRow, 14, false);
                    oTable.fnUpdate('<a class="edit" href="">编辑</a>', nRow, 15, false);
                    oTable.fnDraw();
                }

                var table = $('#sample_editable_1');

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
                        'orderable': true,
                        'targets': [0]
                    }, {
                        "searchable": true,
                        "targets": [0]
                    }],
                    "order": [
                            [0, "asc"]
                        ] // set first column as a default sort by asc
                });

                var tableWrapper = $("#sample_editable_1_wrapper");

                var nEditing = null;
                var nNew = false;

                $('#sample_editable_1_new').click(function(e) {
                    e.preventDefault();
                    if (nNew && nEditing) {
                        bootbox.confirm("需要保存吗？", function(result) {
                            if (result) {
                                saveRow(oTable, nEditing); // save
                                $(nEditing).find("td:first").html("Untitled");
                                nEditing = null;
                                nNew = false;
                            } else {
                                oTable.fnDeleteRow(nEditing); // cancel
                                nEditing = null;
                                nNew = false;
                                return;
                            }
                        })

                    }
                    var aiNew = oTable.fnAddData(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
                    var nRow = oTable.fnGetNodes(aiNew[0]);
                    editRow(oTable, nRow);
                    nEditing = nRow;
                    nNew = true;
                });

                table.on('click', '.delete', function(e) {
                    e.preventDefault();
                    var that = this;
                    bootbox.confirm("确定删除这条记录", function(result) {
                        if (result == false) {
                            return;
                        } else {
                            var nRow = $(that).parents('tr')[0];
                            var nRowW = $(that).parents('tr').css("width");
                            var nRowH = $(that).parents('tr').css("height");
                            var delLine = '<div style="position: relative; ">' +
                                '<div style="width: ' + nRowW + '; position: absolute; top: ' + 0 + ';border-bottom:solid 1px #000 ">' +
                                '</div>' +
                                '</div>';
                            $(that).parents('tr').find("td:first").append(delLine);
                        }
                    })
                });

                table.on('click', '.cancel', function(e) {
                    e.preventDefault();
                    if (nNew) {
                        oTable.fnDeleteRow(nEditing);
                        nEditing = null;
                        nNew = false;
                    } else {
                        restoreRow(oTable, nEditing);
                        nEditing = null;
                    }
                });

                $("#paste").on("click", function() {
                    if (nCopy == null) {
                        toastr.info("请先复制！");
                        return;
                    }

                    var aiNew = oTable.fnAddData([nCopy[0], nCopy[1], nCopy[2], nCopy[3], nCopy[4], nCopy[5], nCopy[6], nCopy[7], nCopy[8], nCopy[9], nCopy[10], nCopy[11], nCopy[12], nCopy[13], nCopy[14], '<a class="edit" href="">编辑</a>', '<a class="delete" href="">删除</a>', '<a class="copy" href="">复制</a>']);
                    var nRow = oTable.fnGetNodes(aiNew[0]);
                    editRow(oTable, nRow);
                    nEditing = nRow;
                    nNew = true;
                })

                table.on('click', '.copy', function(e) {
                    e.preventDefault();

                    // var nRow = $(this).parents('tr')[0].cloneNode(true);
                    var nRow = oTable.fnGetData($(this).parents('tr'));
                    nCopy = nRow;
                    toastr.info("复制成功！");

                });

                table.on('click', '.edit', function(e) {
                    e.preventDefault();
                    nNew = false;
                    /* Get the row as a parent of the link that was clicked on */
                    var nRow = $(this).parents('tr')[0];

                    if (nEditing !== null && nEditing != nRow) {
                        /* Currently editing - but not this row - restore the old before continuing to edit mode */
                        restoreRow(oTable, nEditing);
                        editRow(oTable, nRow);
                        nEditing = nRow;
                    } else if (nEditing == nRow && this.innerHTML == "保存") {
                        /* Editing this row and want to save it */
                        saveRow(oTable, nEditing);
                        console.log(nEditing)
                        nEditing = null;
                        toastr.info("更新成功！");
                    } else {
                        /* No edit in progress - let's start one */
                        editRow(oTable, nRow);
                        nEditing = nRow;
                    }
                });
            }
            return {
                //main function to initiate the module
                init: function() {
                    handleTable();
                }
            };
        }();