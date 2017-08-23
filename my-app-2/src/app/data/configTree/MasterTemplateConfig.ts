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

  constructor(){
    this.totalArea = [
      {
        id: 'masterTemplateConfig', text: '模版布局', icon: 'fa fa-folder icon-state-warning', li_attr: '', a_attr: '', parent: '#', readonly: false, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }
      },
      // totalAreaChildren
      {
        id: 'masterTemplateConfig_classType', text: '布局类型  <span class="badge badge-default">: Layout</span>', icon: 'fa fa-clone icon-state-success', li_attr: '', a_attr: '', parent: 'masterTemplateConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }
      },
      {
        id: 'masterTemplateConfig_parent', text: '布局ID  <span class="badge badge-default">: ID</span>', icon: 'fa fa-paperclip icon-state-success', li_attr: '', a_attr: '', parent: 'masterTemplateConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }
      },
      {
        id: 'masterTemplateConfig_pattern', text: '布局模式  <span class="badge badge-default ">: 1C</span>', icon: 'fa fa-th icon-state-success', li_attr: '', a_attr: '', parent: 'masterTemplateConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }
      },
      // pageConfigs
      {
        id: 'masterTemplateConfig_1_pageConfigs', text: '页面配置', icon: '', li_attr: '', a_attr: '', parent: 'masterTemplateConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }
      },
      // pageConfigsChildren
      {
        id: 'pageConfigs_1_classType', text: '布局类型  <span class="badge badge-default">: Cell</span>', icon: 'fa fa-copy', li_attr: '', a_attr: '', parent: 'masterTemplateConfig_1_pageConfigs', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, 'type': 'node'
      },
      {
        id: 'pageConfigs_1_id', text: '布局标志 <span class="badge badge-default">: a</span>', icon: 'fa fa-paperclip', li_attr: '', a_attr: '', parent: 'masterTemplateConfig_1_pageConfigs', readonly: true, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }, 'type': 'node'
      },
      {
        id: 'pageConfigs_1_text', text: '标题', icon: 'fa fa-header', li_attr: '', a_attr: '', parent: 'masterTemplateConfig_1_pageConfigs', readonly: false, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, 'type': 'node'
      },
      {
        id: 'pageConfigs_1_header', text: '是否显示标题', icon: 'fa fa-ban', li_attr: '', a_attr: '', parent: 'masterTemplateConfig_1_pageConfigs', readonly: false, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, 'type': 'node'
      },
      {
        id: 'pageConfig_1_pagingBarName', text: '分页对象 <span class="badge badge-default">: pagingBar_1</span>', icon: 'fa fa-flag', li_attr: '', a_attr: '', parent: 'masterTemplateConfig_1_pageConfigs', readonly: true, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }, 'type': 'node'
      },
      // viewCfg
      {
        id: 'pageConfigs_1_viewCfg', text: '页面配置', icon: '', li_attr: '', a_attr: '', parent: 'masterTemplateConfig_1_pageConfigs', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }
      },
      // viewCfgChildren
      {
        id: 'viewCfg_1_classType', text: '组件名称 <span class="badge badge-default">: GridView</span>', icon: 'fa fa-cogs font-orange', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }, 'type': 'node'
      },
      {
        id: 'viewCfg_1_id', text: '配置标识 <span class="badge badge-default">: a</span>', icon: 'fa fa-paperclip font-orange', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }, 'type': 'node'
      },
      {
        id: 'viewCfg_1_pagingBarName', text: '分页对象 <span class="badge badge-default">: pagingBar_1</span>', icon: 'fa fa-flag', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: true,
          selected: false,
        }
      },
      {
        id: 'viewCfg_1_toolbarsConfig', text: '工具栏设置', icon: '', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'toolbarConfig'
      },
      // toolbarsConfig child
      {
        id: 'toolbarsConfig_1_new', text: '新增', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_toolbarsConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'button'
      },
      {
        id: 'toolbarsConfig_1_edit', text: '修改', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_toolbarsConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'button'
      },
      {
        id: 'toolbarsConfig_1_delete', text: '删除', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_toolbarsConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'button'
      },
      {
        id: 'toolbarsConfig_1_search', text: '查询', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_toolbarsConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'button'
      },
      {
        id: 'viewCfg_1_columnConfigs', text: '数据列', icon: '', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'columnConfig'
      },
      // columnConfigs child
      {
        id: 'toolbarsConfig_1_col1', text: '数据列...', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_columnConfigs', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'field'
      },
      {
        id: 'toolbarsConfig_1_col2', text: '数据列...', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_columnConfigs', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'field'
      },
      {
        id: 'toolbarsConfig_1_col3', text: '数据列...', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_columnConfigs', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'field'
      },
      {
        id: 'toolbarsConfig_1_col4', text: '数据列...', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_columnConfigs', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'field'
      },
      {
        id: 'viewCfg_1_columnConfigClass', text: '数据源API', icon: '', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, 'type': 'dataSourceAPI'
      },
      {
        id: 'viewCfg_1_sortConfig', text: '排序设置', icon: '', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'sortConfig'
      },
      // sortConfig child
      {
        id: 'toolbarsConfig_1_sort1', text: '名称', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_sortConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'sort'
      },
      {
        id: 'toolbarsConfig_1_sort2', text: '日期', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_sortConfig', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'sort'
      },
      {
        id: 'viewCfg_1_columnConfigItem', text: '数据项API', icon: '', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, 'type': 'dataSourceItemAPI'
      },
      {
        id: 'viewCfg_1_toolbarsStatusConfig', text: '按钮状态配置', icon: '', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, type: 'toolbarStatusConfig'
      },
      {
        id: 'viewCfg_1_pagingSetting', text: '分页设置', icon: '', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, 'type': 'pagingSetting'
      },
      {
        id: 'viewCfg_1_isEnablePaging', text: '是否分页', icon: '', li_attr: '', a_attr: '', parent: 'pageConfigs_1_viewCfg', readonly: true, value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        }, 'type': 'isEnablePaging'
      }
    ];
  }

}
