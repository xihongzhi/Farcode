import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';
import { element } from 'protractor';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.scss']
})
export class EditroleComponent implements OnInit {
  selectAll:any;
  strTemp: string;
  response = [];
  data: any = {
    name: '',
    id: '',
    description: ''
  };
  loading: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService) {
    activatedRoute.queryParams.subscribe(
      queryParams => {
        if (queryParams.id) {
          debugger;
          this.strTemp = decodeURI(queryParams.id);
          this.data = JSON.parse(this.strTemp);
          this.getPermissions(this.data.id);
        }
        else {
          this.getPermissions('');
        }
      }
    )
  }
  ngOnInit() {

  }
  getPermissions(roleId: any): void {
    let url;
    if (roleId) {
      url = `fcmanager/permission/getPermissions?roleId=${roleId}`;
    } else {
      url = `fcmanager/permission/getPermissions`;
    }
    this._ajax.CoreGet(url, 2).subscribe(responses => {
      this.response = [];
      if (responses.code == "0") {
        responses.data.forEach(item => {
          item.selected = item.selected;
        });
        this.response = responses.data;
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
  all(m) {
    this.response.forEach(item => {
      if (!m) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      if (!item.parentId) {
        item.subList.forEach(element => {
          if (item.id == element.parentId) {
            element.selected = item.selected;
          }
        });
      }
    });
  }
  public SelectCheckbox(selected: boolean, item: any): void {
    if (!item.parentId) {
      item.selected = selected;
      item.subList.forEach(element => {
        if (item.id == element.parentId) {
          element.selected = selected;
        }
      });
    }
    else {
      item.selected = selected;
      this.response.forEach(element => {
        if (element.id == item.parentId) {
          element.selected = selected;
        }
      });
    }
  }
  btnBack(): void {
    this.router.navigate(['shared/role']);
  }
  btnSave(): void {
    let resultList = [];
    let parm = {
      role: {
        name: this.data.name,
        description: this.data.description,
        id:this.data.id
      }
    };
    this.response.forEach(element => {
      if (element.selected) {
        element.subList.forEach(item => {
          if (item.selected) {
            resultList.push(item);
          }
        });
      }
    });
    this.loading = true;
    this._ajax.CorePost("fcmanager/role/save", parm, 2).subscribe(responses => {
      if (responses.code == "0") {
        let dataList = [];
        resultList.forEach(item => {
          dataList.push(item.id);
          if (dataList.indexOf(item.parentId) != 1) {
            dataList.push(item.parentId);
          }
        });

        let parms = {
          roleId:responses.data.id,
          permissionIds: dataList
        }
        this._ajax.CorePost("fcmanager/permission/assignPermissions", parms, 2).subscribe(responses => {
          if (responses.code == "0") {
            this._elem.tip(`提交成功`);
          } else {
            this._elem.tip(`${responses.message}`);
          }
        });

      } else {
        this._elem.tip(`${responses.message}`);
      }
      this.loading = false;
    });

  }
}
