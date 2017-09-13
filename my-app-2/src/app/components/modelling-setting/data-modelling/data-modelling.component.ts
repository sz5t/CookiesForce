import { Component, OnInit } from '@angular/core';
import {NodeType} from "../../../data/configTree/NodeType";

declare let $: any;
@Component({
  selector: 'app-data-modelling',
  templateUrl: './data-modelling.component.html',
  styleUrls: ['./data-modelling.component.css']
})
export class DataModellingComponent implements OnInit {
  constructor() { }
  tableInit() {
    const bsTable = Object.create({});
    bsTable.init = function(){
      $('#databaseTables').bootstrapTable({
        // url: '/Home/GetDepartment',         //请求后台的URL（*）
        // method: 'get',                      //请求方式（*）
        toolbar: '#toolbar',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: 'asc',                   //排序方式
        queryParams: bsTable.queryParams,   //传递参数（*）
        sidePagination: 'server',           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        // height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: 'ID',                     //每一行的唯一标识，一般为主键列
        showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: true,                   //是否显示父子表
        columns: [{
          checkbox: true
        },
          {
            field: 'RtId',
            title: '命名空间',
            align: 'center'
          },{
          field: 'Name',
          title: '资源名称',
          align: 'center',
          editable: {
            type: 'text',
            title: 'Name'
          }
        }, {
          field: 'OwnerNameSpace',
          title: '命名空间',
          align: 'center'
        }, {
          field: 'OwnerAssembly',
          title: '程序集',
          align: 'center',
        }, {
          field: 'Enabled',
          title: '是否有效',
          align: 'center',
        }, {
          field: 'ShareScope',
          title: '共享范围',
          align: 'center',
        }, {
          field: 'BuildMode',
          title: '生成模式',
          align: 'center',
        }, {
          field: 'BuildState',
          title: '生成状态',
          align: 'center',
        }, {
          field: 'CreateTime',
          title: '创建时间',
          align: 'center',
        }],
        onEditableSave: function(field, row, oldValue, $sel){
          $('#databaseTables').bootstrapTable('resetView');
        },
        onExpandRow: function(index, row, $detail){
          bsTable.initSub(index, row, $detail);
        }
      });
    };
    bsTable.queryParams = function(params){
      // return {};
    };
    bsTable.initSub = function(index, row, $detail){
      const pId = row.RtId;
      const data = [
        { pid: 'res_1',
          data: [
            {PropertyId: 'p1', PropertyName: '角色ID', PropertyType: 'string', PropertyLength: '32', PropertyEnabled: true, PropertyDescription: '', CreateTime: ''},
            {PropertyId: 'p2', PropertyName: '角色名称', PropertyType: 'string', PropertyLength: '100', PropertyEnabled: true, PropertyDescription: '', CreateTime: ''},
            {PropertyId: 'p3', PropertyName: '角色描述', PropertyType: 'string', PropertyLength: '200', PropertyEnabled: true, PropertyDescription: '', CreateTime: ''}
          ]
        },
        { pid: 'res_2',
          data: [
            {PropertyId: 'p1', PropertyName: '组织机构ID', PropertyType: '', PropertyLength: '32', PropertyEnabled: true, PropertyDescription: '', CreateTime: ''},
            {PropertyId: 'p2', PropertyName: '组织机构名称', PropertyType: '', PropertyLength: '100', PropertyEnabled: true, PropertyDescription: '', CreateTime: ''},
            {PropertyId: 'p3', PropertyName: '组织机构描述', PropertyType: '', PropertyLength: '200', PropertyEnabled: true, PropertyDescription: '', CreateTime: ''}
          ]
        },
      ];
      const result = data.filter(x => x.pid === pId);
      if(result && result[0]){
        const sub_table = $detail.html('<table></table>').find('table');
        $(sub_table).bootstrapTable({
          // toolbar: '#toolbar',                //工具按钮用哪个容器
          striped: false,                      //是否显示行间隔色
          cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
          pagination: false,                   //是否显示分页（*）
          sortable: false,                     //是否启用排序
          sortOrder: 'asc',                   //排序方式
          // squeryParams: bsTable.queryParams,   //传递参数（*）
          // sidePagination: 'server',           //分页方式：client客户端分页，server服务端分页（*）
          pageNumber:1,                       //初始化加载第一页，默认第一页
          pageSize: 10,                       //每页的记录行数（*）
          pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
          // search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
          // strictSearch: true,
          // showColumns: true,                  //是否显示所有的列
          showRefresh: false,                  //是否显示刷新按钮
          minimumCountColumns: 2,             //最少允许的列数
          clickToSelect: true,                //是否启用点击选中行
          // height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
          uniqueId: 'ResId',                     //每一行的唯一标识，一般为主键列
          showToggle: false,                    //是否显示详细视图和列表视图的切换按钮
          cardView: false,                    //是否显示详细视图
          detailView: false,                   //是否显示父子表
          columns: [
            {
              field: 'PropertyId',
              title: '属性ID',
              align: 'center'
            },{
              field: 'PropertyName',
              title: '属性名称',
              align: 'center',
              editable: {
                type: 'text',
                title: 'Name'
              }
            }, {
              field: 'PropertyType',
              title: '数据类型',
              align: 'center'
            }, {
              field: 'PropertyLength',
              title: '属性长度',
              align: 'center',
            }, {
              field: 'PropertyEnabled',
              title: '是否有效',
              align: 'center',
            }, {
              field: 'PropertyDescription',
              title: '属性描述',
              align: 'center',
            }, {
              field: 'CreateTime',
              title: '创建时间',
              align: 'center',
            }],
        });
        $(sub_table).bootstrapTable('removeAll');
        $(sub_table).bootstrapTable('append', result[0].data);
      }
    };
    return bsTable;
  }
  toolbarInit() {
    const toolbars = Object.create({});
    toolbars.init = function(){
      //初始化页面上面的按钮事件
    };
    return toolbars;
  }
  ngOnInit() {
    const masterConfig = new ProjectNodeConfig();
    const _menu = $('#projectTree').jstree({
      'core': {
        'themes': {
          'responsive': true
        },
        'check_callback': true,
        'data': masterConfig.totalArea
      },
      'types': NodeType.nodeType,
      'plugins': ['types', 'wholerow', 'contextmenu'],
      contextmenu: {
        'items': function (node) {
          const type = this.get_type(node);
          const t_node = NodeType[type];
          createAction(t_node, type);
          return t_node;
        }
      }
    });
    const createAction = (t, n) => {
      switch (n) {
        // toolbar config
        case NodeType.NODE_TYPE.TOOLBAR_CONFIG:
          t[NodeType.NODE_TYPE.TOOLBAR_CONFIG_NEW].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            const newID = instance.create_node(node.id, NodeType.buttonNode, 'last', () => {
              instance.deselect_node(node.id);
            }, true);
            instance.select_node(newID);
            const nd = instance.get_node(newID);
            instance.edit(nd);
          };
          t[NodeType.NODE_TYPE.TOOLBAR_CONFIG_REFRESH].action = (data) => {
            alert('refresh button');
          };
          t[NodeType.NODE_TYPE.TOOLBAR_CONFIG_DELETE].action = (data) => {
            alert('delete all button');
          };
          break;
        // button
        case NodeType.NODE_TYPE.BUTTON :
          t[NodeType.NODE_TYPE.BUTTON_DELETE].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            instance.delete_node(node);
          };
          t[NodeType.NODE_TYPE.BUTTON_EDIT].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            alert(node);
          };
          break;
        // column config
        case NodeType.NODE_TYPE.COLUMN_CONFIG:
          t[NodeType.NODE_TYPE.COLUMN_CONFIG_NEW].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            const newID = instance.create_node(node.id, NodeType.fieldNode, 'last', () => {
              instance.deselect_node(node.id);
            }, true);
            instance.select_node(newID);
            const nd = instance.get_node(newID);
            instance.edit(nd);
          };
          t[NodeType.NODE_TYPE.COLUMN_CONFIG_REFRESH].action = (data) => {
            alert('refresh button');
          };
          t[NodeType.NODE_TYPE.COLUMN_CONFIG_DELETE].action = (data) => {
            alert('delete all button');
          };
          break;
        // field
        case NodeType.NODE_TYPE.FIELD:
          t[NodeType.NODE_TYPE.FIELD_DELETE].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            instance.delete_node(node);
          };
          t[NodeType.NODE_TYPE.FIELD_EDIT].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            alert(node);
          };
          break;
        // sort config
        case NodeType.NODE_TYPE.SORT_CONFIG:
          t[NodeType.NODE_TYPE.SORT_CONFIG_NEW].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            const newID = instance.create_node(node.id, NodeType.sortNode, 'last', () => {
              instance.deselect_node(node.id);
            }, true);
            instance.select_node(newID);
            const nd = instance.get_node(newID);
            instance.edit(nd);
          };
          t[NodeType.NODE_TYPE.SORT_CONFIG_REFRESH].action = (data) => {
            alert('refresh sort field');
          };
          t[NodeType.NODE_TYPE.SORT_CONFIG_DELETE].action = (data) => {
            alert('delete all sort field');
          };
          break;
        // sort
        case NodeType.NODE_TYPE.SORT:
          t[NodeType.NODE_TYPE.SORT_DELETE].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            instance.delete_node(node);
          };
          t[NodeType.NODE_TYPE.SORT_EDIT].action = (data) => {
            const node = _menu.jstree('get_node', data.reference[0]);
            alert(node);
          };
      }
    };
    const instance = $('#projectTree').jstree(true);

    const tbl = this.tableInit();
    tbl.init();
    const toolbar = this.toolbarInit();
    toolbar.init();
    $('#projectTree').on('select_node.jstree', (e, data) => {
      $('#databaseTables').bootstrapTable('removeAll');
      $('#databaseTables').bootstrapTable('append', data.node.data);
    });
  }
}

/**
 * Created by zhaoxinlei on 2017/8/11.
 */
class ProjectNodeConfig {
  get totalArea(): any[] {
    return this._totalArea;
  }

  set totalArea(value: any[]) {
    this._totalArea = value;
  }

  private _totalArea: any[];

  constructor() {
    this.totalArea = [
      {
        id: 'custom_1',
        text: '【客户】陕西华建工程有限公司',
        icon: 'fa fa-folder icon-state-warning',
        li_attr: '',
        a_attr: '',
        parent: '#',
        readonly: false,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data:{

        }
      },
      {
        id: 'custom_2',
        text: '【客户】西安科斯特工业有限公司',
        icon: 'fa fa-folder icon-state-warning',
        li_attr: '',
        a_attr: '',
        parent: '#',
        readonly: false,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data:{
        }
      },
      {
        id: 'custom_3',
        text: '【客户】西安盖特信息技术有限公司',
        icon: 'fa fa-folder icon-state-warning',
        li_attr: '',
        a_attr: '',
        parent: '#',
        readonly: false,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data:{

        }
      },
      // custom1
      {
        id: 'cus1_1',
        text: '【项目】华建MIS',
        icon: 'fa fa-clone icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'custom_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: {

        }
      },
      {
        id: 'cus1_2',
        text: '【模块】权限管理',
        icon: 'fa fa-paperclip icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'cus1_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: [
          {RtId: 'res_1', Name: 'Role', OwnerNameSpace: 'Permission', OwnerAssembly: 'Permission', Enabled: true, BuildMode: '自动', BuildState: '编译成功', ShareScope: '全部', CreateTime: '2017-08-22:12:23:34'},
          {RtId: 'res_2', Name: 'Org', OwnerNameSpace: 'Permission', OwnerAssembly: 'Permission', Enabled: true, BuildMode: '自动', BuildState: '编译成功', ShareScope: '全部', CreateTime: '2017-08-22:12:23:34'},
          {RtId: 'res_3', Name: 'UserRole', OwnerNameSpace: 'Permission', OwnerAssembly: 'Permission', Enabled: true, BuildMode: '自动', BuildState: '编译成功', ShareScope: '全部', CreateTime: '2017-08-22:12:23:34'},
          {RtId: 'res_4', Name: 'UserOrg', OwnerNameSpace: 'Permission', OwnerAssembly: 'Permission', Enabled: true, BuildMode: '自动', BuildState: '编译成功', ShareScope: '全部', CreateTime: '2017-08-22:12:23:34'},
          {RtId: 'res_5', Name: 'Group', OwnerNameSpace: 'Permission', OwnerAssembly: 'Permission', Enabled: true, BuildMode: '自动', BuildState: '编译成功', ShareScope: '全部', CreateTime: '2017-08-22:12:23:34'},
          {RtId: 'res_6', Name: 'RoleGroup', OwnerNameSpace: 'Permission', OwnerAssembly: 'Permission', Enabled: true, BuildMode: '自动', BuildState: '编译成功', ShareScope: '全部', CreateTime: '2017-08-22:12:23:34'},
        ]
      },
      {
        id: 'cus1_3',
        text: '【模块】数据字典',
        icon: 'fa fa-paperclip icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'cus1_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: [
          {RtId: 'res_7', Name: 'DataDictionaryKey', OwnerNameSpace: 'Permission', OwnerAssembly: 'Permission', Enabled: true, BuildMode: '自动', BuildState: '编译成功', ShareScope: '全部', CreateTime: '2017-08-22:12:23:34'},
          {RtId: 'res_8', Name: 'DataDictionaryValue', OwnerNameSpace: 'Permission', OwnerAssembly: 'Permission', Enabled: true, BuildMode: '自动', BuildState: '编译成功', ShareScope: '全部', CreateTime: '2017-08-22:12:23:34'},
        ]
      },
      // custom2
      {
        id: 'cus21',
        text: '【项目】质量检测信息平台',
        icon: 'fa fa-clone icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'custom_2',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: {
        }
      },
      {
        id: 'cus22',
        text: '【数据预警】',
        icon: 'fa fa-paperclip icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'cus21',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: {
        }
      },
      {
        id: 'cus23',
        text: '【质量评估】',
        icon: 'fa fa-th icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'cus21',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: {
        }
      },
      // custom3
      {
        id: 'cus3_1',
        text: ' 【项目】合集物流储运管理',
        icon: 'fa fa-clone icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'custom_3',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: {
        }
      },
      {
        id: 'cus3_2',
        text: '【车辆派遣管理】',
        icon: 'fa fa-paperclip icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'cus3_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: {
        }
      },
      {
        id: 'cus3_3',
        text: '【货物分发】',
        icon: 'fa fa-th icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'cus3_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        data: {
        }
      }
    ];
  }

}
