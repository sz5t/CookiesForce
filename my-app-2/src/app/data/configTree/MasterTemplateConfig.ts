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
        data: {
        properties:[{text: '模版布局', name: 'totalArea', value: {}, desc: ''}]
      }
      },
      // totalAreaChildren
      {
        id: 'masterTemplateConfig_classType',
        text: '布局类型',
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
        data: {properties:[{ text: '布局类型', name: 'classType', value: 'Layout', desc: ''}]}
      },
      {
        id: 'masterTemplateConfig_parent',
        text: '布局ID',
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
        data: {properties: [{ text: '布局类型', name: 'parent', value: 'view_Name', desc: ''}]}
      },
      {
        id: 'masterTemplateConfig_pattern',
        text: '布局模式',
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
        data: {properties: [{ text: '布局模式', name: 'pattern', value: '1C', desc: ''}]}
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
        data: {properties: [{ text: '页面配置', name: 'pageConfigs', value: [], desc: ''}]}
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
        data: {properties: [{ text: '区域 1', name: 'pageConfigsObj', value: {}, desc: ''}]}
      },
      // pageConfigsChildren
      {
        id: 'pageConfigs_1_classType',
        text: '布局类型',
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
        data:  {properties: [{ text: '布局类型', name: 'classType', value: 'cell', desc: ''}]}
      },
      {
        id: 'pageConfigs_1_id',
        text: '布局标志',
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
        data: {properties: [{ text: '布局标志', name: 'id', value: 'a', desc: ''}]}
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
        data: {properties: [{ text: '布局标志', name: 'text', value: '标题', desc: ''}]}
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
        data: {properties: [{ text: '是否显示标题', name: 'header', value: 'true', desc: ''}]}
      },
      {
        id: 'pageConfig_1_pagingBarName',
        text: '分页对象',
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
        data: {properties: [{ text: '分页对象', name: 'pagingBarName', value: '', desc: ''}]}
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
        data: {properties: [{ text: '组件配置', name: 'viewCfg', value: {}, desc: ''}]}
      },
      // viewCfgChildren
      {
        id: 'viewCfg_1_classType',
        text: '组件名称',
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
        data: {properties: [{ text: '组件名称', name: 'classType', value: 'Grid_View', desc: ''}]}
      },
      {
        id: 'viewCfg_1_id',
        text: '配置标识',
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
        data: {properties: [{ text: '配置标识', name: 'id', value: 'a', desc: ''}]}
      },
      {
        id: 'viewCfg_1_pagingBarName',
        text: '分页对象',
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
        data: {properties: [{ text: '分页对象', name: 'pagingBarName', value: '', desc: ''}]}
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
          disabled: true,
          selected: false,
        },
        type: 'toolbarConfig',
        data: {properties: [{ text: '工具栏设置', name: 'toolbarsConfig', value: [], desc: ''}]}
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
        data: {properties: [
          { text: 'ID', name: 'id', value: 'refresh', desc: ''},
          { text: '按钮类型', name: 'type', value: 'button', desc: ''},
          { text: '启用状态图标', name: 'img', value: 'fa fa-refresh', desc: ''},
          { text: '禁用状态图标', name: 'disImg', value: 'fa fa-refresh', desc: ''},
          { text: '按钮内容', name: 'text', value: '刷新', desc: ''},
          { text: '触发方式', name: 'htype', value: 'common', desc: ''},
          { text: '初始状态', name: 'initState', value: true, desc: ''},
          { text: '弹出窗体', name: 'totalArea', value: {}, desc: ''},
          { text: '事件设置', name: 'events', value: [
            { text: '提示标题', name: 'title', value: '', desc: ''},
            { text: '提示信息', name: 'text', value: '', desc: ''},
            { text: '提示类型', name: 'type', value: 'confirm-warning', desc: ''},
            { text: '事件执行', name: 'execution', value: [
              { text: '执行API', name: 'api', value: 'refresh', desc: ''},
              { text: '执行方式', name: 'method', value: 'refresh', desc: ''},
              { text: '主键', name: 'keyId', value: 'refresh', desc: ''},
              { text: '参数', name: 'paramMapping', value: [
                { text: '参数名称', name: '', value: '', desc: ''},
              ], desc: ''},
            ], desc: ''},
          ], desc: ''},
        ]}
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
        data: {properties: [
          { text: 'ID', name: 'id', value: 'new', desc: ''},
          { text: '按钮类型', name: 'type', value: 'button', desc: ''},
          { text: '启用状态图标', name: 'img', value: 'fa fa-refresh', desc: ''},
          { text: '禁用状态图标', name: 'disImg', value: 'fa fa-refresh', desc: ''},
          { text: '按钮内容', name: 'text', value: '新增', desc: ''},
          { text: '触发方式', name: 'htype', value: 'common', desc: ''},
          { text: '初始状态', name: 'initState', value: true, desc: ''},
          { text: '弹出窗体', name: 'totalArea', value: {}, desc: ''},
          { text: '事件设置', name: 'events', value: [
            { text: '提示标题', name: 'title', value: '', desc: ''},
            { text: '提示信息', name: 'text', value: '', desc: ''},
            { text: '提示类型', name: 'type', value: 'confirm-warning', desc: ''},
            { text: '事件执行', name: 'execution', value: [
              { text: '执行API', name: 'api', value: 'refresh', desc: ''},
              { text: '执行方式', name: 'method', value: 'refresh', desc: ''},
              { text: '主键', name: 'keyId', value: 'refresh', desc: ''},
              { text: '参数', name: 'paramMapping', value: [
                { text: '参数名称', name: '', value: '', desc: ''},
              ], desc: ''},
            ], desc: ''},
          ], desc: ''},
        ]}
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
        data: {properties: [
          { text: 'ID', name: 'id', value: 'new', desc: ''},
          { text: '按钮类型', name: 'type', value: 'button', desc: ''},
          { text: '启用状态图标', name: 'img', value: 'fa fa-refresh', desc: ''},
          { text: '禁用状态图标', name: 'disImg', value: 'fa fa-refresh', desc: ''},
          { text: '按钮内容', name: 'text', value: '新增', desc: ''},
          { text: '触发方式', name: 'htype', value: 'common', desc: ''},
          { text: '初始状态', name: 'initState', value: true, desc: ''},
          { text: '弹出窗体', name: 'totalArea', value: {}, desc: ''},
          { text: '事件设置', name: 'events', value: [
            { text: '提示标题', name: 'title', value: '', desc: ''},
            { text: '提示信息', name: 'text', value: '', desc: ''},
            { text: '提示类型', name: 'type', value: 'confirm-warning', desc: ''},
            { text: '事件执行', name: 'execution', value: [
              { text: '执行API', name: 'api', value: 'refresh', desc: ''},
              { text: '执行方式', name: 'method', value: 'refresh', desc: ''},
              { text: '主键', name: 'keyId', value: 'refresh', desc: ''},
              { text: '参数', name: 'paramMapping', value: [
                { text: '参数名称', name: '', value: '', desc: ''},
              ], desc: ''},
            ], desc: ''},
          ], desc: ''},
        ]}
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
        data: {properties: [
          { text: 'ID', name: 'id', value: 'new', desc: ''},
          { text: '按钮类型', name: 'type', value: 'button', desc: ''},
          { text: '启用状态图标', name: 'img', value: 'fa fa-refresh', desc: ''},
          { text: '禁用状态图标', name: 'disImg', value: 'fa fa-refresh', desc: ''},
          { text: '按钮内容', name: 'text', value: '新增', desc: ''},
          { text: '触发方式', name: 'htype', value: 'common', desc: ''},
          { text: '初始状态', name: 'initState', value: true, desc: ''},
          { text: '弹出窗体', name: 'totalArea', value: {}, desc: ''},
          { text: '事件设置', name: 'events', value: [
            { text: '提示标题', name: 'title', value: '', desc: ''},
            { text: '提示信息', name: 'text', value: '', desc: ''},
            { text: '提示类型', name: 'type', value: 'confirm-warning', desc: ''},
            { text: '事件执行', name: 'execution', value: [
              { text: '执行API', name: 'api', value: 'refresh', desc: ''},
              { text: '执行方式', name: 'method', value: 'refresh', desc: ''},
              { text: '主键', name: 'keyId', value: 'refresh', desc: ''},
              { text: '参数', name: 'paramMapping', value: [
                { text: '参数名称', name: '', value: '', desc: ''},
              ], desc: ''},
            ], desc: ''},
          ], desc: ''},
        ]}
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
          disabled: true,
          selected: false,
        },
        type: 'columnConfig',
        data: {properties: [{ text: '数据列', name: 'columnConfigs', value: [], desc: ''}]}
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
        data: {properties: [
          { text: '字段', name: 'field', value: 'column 1', desc: ''},
          { text: '标题', name: 'header', value: '列', desc: ''},
          { text: '宽度', name: 'colwidth', value: 100, desc: ''},
          { text: '列类型', name: 'coltype', value: 'ro', desc: ''},
          { text: '对齐方式', name: 'colalign', value: 'center', desc: ''},
          { text: '是否隐藏', name: 'colhide', value: false, desc: ''},
          { text: '自定义列', name: 'customSetting', value: [
            [
              { text: '字段原始值', name: 'value', value: '', desc: ''},
              { text: '背景色', name: 'bgcolor', value: '', desc: ''},
              { text: '字体颜色', name: 'fontcolor', value: '', desc: ''},
              { text: '字段转换值', name: 'valueas', value: '', desc: ''}
            ]
          ], desc: ''},
          { text: '排序方式', name: 'colsorting', value: 'server', desc: ''}
        ]}
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
        data: {properties: [
          { text: '字段', name: 'field', value: 'column 2', desc: ''},
          { text: '标题', name: 'header', value: '列', desc: ''},
          { text: '宽度', name: 'colwidth', value: 100, desc: ''},
          { text: '列类型', name: 'coltype', value: 'ro', desc: ''},
          { text: '对齐方式', name: 'colalign', value: 'center', desc: ''},
          { text: '是否隐藏', name: 'colhide', value: false, desc: ''},
          { text: '自定义列', name: 'customSetting', value: [
            [
              { text: '字段原始值', name: 'value', value: '', desc: ''},
              { text: '背景色', name: 'bgcolor', value: '', desc: ''},
              { text: '字体颜色', name: 'fontcolor', value: '', desc: ''},
              { text: '字段转换值', name: 'valueas', value: '', desc: ''}
            ]
          ], desc: ''},
          { text: '排序方式', name: 'colsorting', value: 'server', desc: ''}
        ]}
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
        data: {properties: [
          { text: '字段', name: 'field', value: 'column 3', desc: ''},
          { text: '标题', name: 'header', value: '列', desc: ''},
          { text: '宽度', name: 'colwidth', value: 100, desc: ''},
          { text: '列类型', name: 'coltype', value: 'ro', desc: ''},
          { text: '对齐方式', name: 'colalign', value: 'center', desc: ''},
          { text: '是否隐藏', name: 'colhide', value: false, desc: ''},
          { text: '自定义列', name: 'customSetting', value: [
            [
              { text: '字段原始值', name: 'value', value: '', desc: ''},
              { text: '背景色', name: 'bgcolor', value: '', desc: ''},
              { text: '字体颜色', name: 'fontcolor', value: '', desc: ''},
              { text: '字段转换值', name: 'valueas', value: '', desc: ''}
            ]
          ], desc: ''},
          { text: '排序方式', name: 'colsorting', value: 'server', desc: ''}
        ]}
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
        data: {properties: [
          { text: '字段', name: 'field', value: 'column 4', desc: ''},
          { text: '标题', name: 'header', value: '列', desc: ''},
          { text: '宽度', name: 'colwidth', value: 100, desc: ''},
          { text: '列类型', name: 'coltype', value: 'ro', desc: ''},
          { text: '对齐方式', name: 'colalign', value: 'center', desc: ''},
          { text: '是否隐藏', name: 'colhide', value: false, desc: ''},
          { text: '自定义列', name: 'customSetting', value: [
            [
              { text: '字段原始值', name: 'value', value: '', desc: ''},
              { text: '背景色', name: 'bgcolor', value: '', desc: ''},
              { text: '字体颜色', name: 'fontcolor', value: '', desc: ''},
              { text: '字段转换值', name: 'valueas', value: '', desc: ''}
            ]
          ], desc: ''},
          { text: '排序方式', name: 'colsorting', value: 'server', desc: ''}
        ]}
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
        data:{properties: [
          { text: '数据源API', name: 'columnConfigClass', value: '', desc: ''}
        ]}
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
        data:{properties: [
          { text: '排序设置', name: 'sortConfig', value: {}, desc: ''},
        ]}
      },
      {
        id: 'viewCfg_1_sortConfig1',
        text: '排序字段',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_sortConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'sort',
        data:{properties: [
          { text: '排序字段', name: '_sort', value: '', desc: ''},
        ]}
      },
      {
        id: 'viewCfg_1_sortConfig2',
        text: '排序方式',
        icon: '',
        li_attr: '',
        a_attr: '',
        parent: 'viewCfg_1_sortConfig',
        readonly: true,
        value: null,
        state: {
          opened: true,
          disabled: false,
          selected: false,
        },
        type: 'sort',
        data:{properties: [
          { text: '排序方式', name: '_order', value: 'asc', desc: ''},
        ]}
      },
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
        data:{properties: [
          { text: '数据项API', name: 'columnConfigItem', value: '', desc: ''}
        ]}
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
        type: 'toolbarStatusConfig',
        data:{
          properties:[
            { text: '按钮状态配置', name: 'toolbarsStatusConfig', value: [], desc: ''}
          ]
        }
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
        data: {properties: [
          { text: '数据项API', name: 'pagingSetting', value: '', desc: ''}
        ]}
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
        data: {properties: [
          { text: '数据项API', name: 'isEnablePaging', value: '', desc: ''}
        ]}
      }
    ];
  }

}
