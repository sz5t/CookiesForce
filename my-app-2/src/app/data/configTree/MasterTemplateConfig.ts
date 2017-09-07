/**
 * Created by zhaoxinlei on 2017/8/11.
 */
export class MasterTemplateConfig {
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
        id: 'masterTemplateConfig',
        text: '模版布局',
        icon: 'fa fa-folder icon-state-warning',
        li_attr: '',
        a_attr: '',
        parent: '#',
        readonly: false,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        data:{
          totalArea: {}
        }
      },
      // totalAreaChildren
      {
        id: 'masterTemplateConfig_classType',
        text: '布局类型  <span class="badge badge-default">: Layout</span>',
        icon: 'fa fa-clone icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        data: {
          classType: 'Layout'
        }
      },
      {
        id: 'masterTemplateConfig_parent',
        text: '布局ID  <span class="badge badge-default">: ID</span>',
        icon: 'fa fa-paperclip icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        data: {
          parent: 'view_Name'
        }
      },
      {
        id: 'masterTemplateConfig_pattern',
        text: '布局模式  <span class="badge badge-default ">: 1C</span>',
        icon: 'fa fa-th icon-state-success',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        data: {
          pattern: '1C'
        }
      },
      // pageConfigs
      {
        id: 'masterTemplateConfig_1_pageConfigs',
        text: '页面配置',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        data: {
          pageConfigs: []
        }
      },
      {
        id: 'masterTemplateConfig_1_pageConfigs_1',
        text: '区域 1',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig_1_pageConfigs',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        data: {
          pageConfigsObj: {}
        }
      },
      // pageConfigsChildren
      {
        id: 'pageConfigs_1_classType',
        text: '布局类型  <span class="badge badge-default">: Cell</span>',
        icon: 'fa fa-copy',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig_1_pageConfigs_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        type: 'node',
        data: {
          classType: 'cell'
        }
      },
      {
        id: 'pageConfigs_1_id',
        text: '布局标志 <span class="badge badge-default">: a</span>',
        icon: 'fa fa-paperclip',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig_1_pageConfigs_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        type: 'node',
        data:{
          id: 'a'
        }
      },
      {
        id: 'pageConfigs_1_text',
        text: '标题',
        icon: 'fa fa-header',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig_1_pageConfigs_1',
        readonly: false,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'title',
        data:{
          text: '标题'
        }
      },
      {
        id: 'pageConfigs_1_header',
        text: '是否显示标题',
        icon: 'fa fa-ban',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig_1_pageConfigs_1',
        readonly: false,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'showTitle',
        data:{
          header: 'true'
        }
      },
      {
        id: 'pageConfig_1_pagingBarName',
        text: '分页对象 <span class="badge badge-default">: pagingBar_1</span>',
        icon: 'fa fa-flag',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig_1_pageConfigs_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        type: 'node',
        data:{
          pagingBarName: 'name_pagingbar' // auto generate
        }
      },
      // viewCfg
      {
        id: 'pageConfigs_1_viewCfg',
        text: '组件配置',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'masterTemplateConfig_1_pageConfigs_1',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        data:{
          viewCfg: {}
        }
      },
      // viewCfgChildren
      {
        id: 'viewCfg_1_classType',
        text: '组件名称 <span class="badge badge-default">: GridView</span>',
        icon: 'fa fa-cogs font-orange',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        type: 'node',
        data:{
          classType: 'Grid_View'
        }
      },
      {
        id: 'viewCfg_1_id',
        text: '配置标识 <span class="badge badge-default">: a</span>',
        icon: 'fa fa-paperclip font-orange',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        type: 'node',
        data:{
          id: 'a'
        }
      },
      {
        id: 'viewCfg_1_pagingBarName',
        text: '分页对象 <span class="badge badge-default">: pagingBar_1</span>',
        icon: 'fa fa-flag',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        },
        data:{
          pagingBarName: 'name_pagingbar'
        }
      },
      {
        id: 'viewCfg_1_toolbarsConfig',
        text: '工具栏设置',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'toolbarConfig',
        data: {
          toolbarsConfig: []
        }
      },
      // toolbarsConfig child
      {
        id: 'toolbarsConfig_1_refresh',
        text: '刷新',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_toolbarsConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'button',
        data: {
          id: 'refresh',
          type: 'button',
          img: 'fa fa-refresh',
          disImg: '',
          text: '刷新',
          htype: 'common',
          initState: true,
          events: {
            execution: {
              api: '',
              method: '',
              keyID: '',
              callback: ''
            }
          }
        }
      },
      {
        id: 'toolbarsConfig_1_new',
        text: '新增',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_toolbarsConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'button',
        data: {
          id: 'new',
          type: 'button',
          img: 'fa fa-plus',
          disImg: '',
          text: '添加',
          htype: 'window',
          initState: true,
          totalArea: {}
        }
      },
      {
        id: 'toolbarsConfig_1_delete',
        text: '删除',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_toolbarsConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'button',
        data: {
          id: 'refresh',
          type: 'button',
          img: 'fa fa-flash',
          disImg: '',
          text: '删除',
          htype: 'confirm',
          initState: true,
          events: {
            title: '确认提示',
            text: '是否要删除选中记录？',
            type: 'confirm-waning',
            execution: {
              api: '',
              method: '',
              keyID: '',
              callback: ''
            }
          }
        }
      },
      {
        id: 'toolbarsConfig_1_search',
        text: '查询',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_toolbarsConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'button',
        data: {
          id: 'search',
          type: 'button',
          img: 'fa fa-search',
          disImg: '',
          text: '查询',
          htype: 'window',
          initState: true,
          totalArea: {}
        }
      },
      {
        id: 'viewCfg_1_columnConfigs',
        text: '数据列',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'columnConfig',
        data: {
          columnConfigs: []
        }
      },
      // columnConfigs child
      {
        id: 'toolbarsConfig_1_col1',
        text: '数据列...',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_columnConfigs',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'field',
        data: {
          'field': 'column 2',
          'header': '数据列...',
          'colwidth': '100',
          'colalign': 'center',
          'coltype': 'ro',
          'colhide': 'false',
          'customSetting': [],
          'colsorting': 'server'
        }
      },
      {
        id: 'toolbarsConfig_1_col2',
        text: '数据列...',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_columnConfigs',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'field',
        data: {
          'field': 'column 3',
          'header': '数据列...',
          'colwidth': '100',
          'colalign': 'center',
          'coltype': 'ro',
          'colhide': 'false',
          'customSetting': [],
          'colsorting': 'server'
        }
      },
      {
        id: 'toolbarsConfig_1_col3',
        text: '数据列...',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_columnConfigs',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'field',
        data: {
          'field': '',
          'header': '数据列...',
          'colwidth': '100',
          'colalign': 'center',
          'coltype': 'ro',
          'colhide': 'false',
          'customSetting': [],
          'colsorting': 'server'
        }
      },
      {
        id: 'toolbarsConfig_1_col4',
        text: '数据列...',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_columnConfigs',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'field',
        data: {
          'field': '',
          'header': '数据列...',
          'colwidth': '100',
          'colalign': 'center',
          'coltype': 'ro',
          'colhide': 'false',
          'customSetting': [],
          'colsorting': 'server'
        }
      },
      {
        id: 'viewCfg_1_columnConfigClass',
        text: '数据源API',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'dataSourceAPI',
        data:{
          columnConfigClass: ''
        }
      },
      {
        id: 'viewCfg_1_sortConfig',
        text: '排序设置',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'sort',
        data:{
          sortConfig:{
            _sort: '',
            _order: 'asc'
          }
        }
      },
      // sortConfig child
      // {
      //   id: 'toolbarsConfig_1_sort1',
      //   text: '排序列',
      //   icon: '',
      //   li_attr: '',
      //   a_attr: '',
      //   parent: 'viewCfg_1_sortConfig',
      //   readonly: true,
      //   value: null,
      //   state: {
      //     opened: true,
      //     disabled: false,
      //     selected: false,
      //   },
      //   type: 'sort',
      //   data: {
      //     _sort: '',
      //   }
      // },
      // {
      //   id: 'toolbarsConfig_1_sort2',
      //   text: '排序方式',
      //   icon: '',
      //   li_attr: '',
      //   a_attr: '',
      //   parent: 'viewCfg_1_sortConfig',
      //   readonly: true,
      //   value: null,
      //   state: {
      //     opened: true,
      //     disabled: false,
      //     selected: false,
      //   },
      //   type: 'sort',
      //   data: {
      //     _order: ''
      //   }
      // },
      {
        id: 'viewCfg_1_columnConfigItem',
        text: '数据项API',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'dataSourceItemAPI',
        data: {
          columnConfigItem: ''
        }
      },
      {
        id: 'viewCfg_1_toolbarsStatusConfig',
        text: '按钮状态配置',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'toolbarStatusConfig'
      },
      {
        id: 'viewCfg_1_pagingSetting',
        text: '分页设置',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'pagingSetting',
        data:{
          pagingSetting: '100,10'
        }
      },
      {
        id: 'viewCfg_1_isEnablePaging',
        text: '是否分页',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'pageConfigs_1_viewCfg',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'isEnablePaging',
        data: {
          isEnablePaging: 'true'
        }
      }
    ];
  }

}
