# 日期指令的使用：

1、在页面 input 标签中插入指令名称 appDatePicker。
2、时间分为限制：minDate 和 maxDate，这两个参数可选可不选，以下是示例（分为限制在2017-11-01至2017-11-30）：

'<div class="form-group">
    <label>订单日期</label>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="开始时间" name="startTime" minDate="2017-11-01" appDatePicker [(ngModel)]="startTime" />
        <div class="input-group-addon">-</div>
        <input type="text" class="form-control" placeholder="结束时间" name="endTime" maxDate="2017-11-30" appDatePicker [(ngModel)]="endTime" />
    </div>
</div>'

3、绑定值：

    'export class BillsComponent implements OnInit {

        private startTime: string = "";//开始时间
        private endTime: string = "";//结束时间

        constructor() { }

        ngOnInit() {
        }
        //此为搜索按钮或其他操作...do samthing...
        private btnSearch(): void {
            alert("开始时间：" + this.startTime + "\n结束时间：" + this.endTime);
        }
    }'

4、此时间指令只支持年月日，不支持时分秒。

