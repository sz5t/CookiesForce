/**
 * Created by zhaoxinlei on 2017/8/15.
 */
export class NodeType {
  public static readonly NODE_TYPE = {
    TOOLBAR_CONFIG: 'toolbarConfig',
    TOOLBAR_CONFIG_REFRESH: 'refresh',
    TOOLBAR_CONFIG_NEW: 'new',
    TOOLBAR_CONFIG_DELETE: 'delete',
    BUTTON: 'button',
    BUTTON_EDIT: 'edit',
    BUTTON_DELETE: 'delete',
    COLUMN_CONFIG: 'columnConfig',
    COLUMN_CONFIG_NEW: 'new',
    COLUMN_CONFIG_REFRESH: 'refresh',
    COLUMN_CONFIG_DELETE: 'delete',
    FIELD: 'field',
    FIELD_EDIT: 'edit',
    FIELD_DELETE: 'delete',
    SORT_CONFIG: 'sortConfig',
    SORT_CONFIG_NEW: 'new',
    SORT_CONFIG_REFRESH: 'refresh',
    SORT_CONFIG_DELETE: 'delete',
    SORT: 'sort',
    SORT_EDIT: 'edit',
    SORT_DELETE: 'delete'
  };
  public static nodeType = {
    'default': {'icon': 'fa fa-folder icon-state-success'},
    'property': {'icon': 'fa fa-file icon-state-success'},
    'toolbarConfig': {'icon': 'fa fa-laptop font-green'},
    'button': {'icon': 'fa fa-square-o font-green-jungle'},
    'columnConfig': {'icon': 'fa fa-table font-green'},
    'field': {'icon': 'fa fa-columns font-yellow-soft'},
    'sortConfig': {'icon': 'fa fa-sort-amount-asc font-green'},
    'sort': {'icon': 'fa fa-sort font-red-soft'},
    'toolbarStatusConfig': {'icon': 'fa fa-exchange font-green'},
    'buttonState': {'icon': 'fa fa-circle-o font-yellow-soft'},
    'filterConfig': {'icon': 'fa fa-filter font-gery'},
    'filter': {'icon': 'fa fa-column font-orange'},
    'dataSourceAPI': {'icon': 'fa fa-database font-green'},
    'dataSourceItemAPI': {'icon': 'fa fa-cube font-green'},
    'pagingSetting': {'icon': 'fa fa-files-o font-green'},
    'isEnablePaging': {'icon': 'fa fa-dot-circle-o font-green'},
    'checkRight': {'icon': 'fa fa-check-square font-green-jungle'},
    'checkFalse': {'icon': 'fa fa-remove font-red'},
    'checkWarning': {'icon': 'fa fa-warning icon-state-warning'},
    'title':{'icon': 'fa fa-header icon-state-success'},
    'showTitle':{'icon': 'fa fa-ban icon-state-success'}

  };
  public static toolbarConfig = {
    'refresh': {
      'label': '<span class="fa fa-refresh font-blue"></span> 刷新',
      'icon': '',
      'separator_after': true
    },
    'new': {
      'label': '<span class="fa fa-plus font-green"></span> 添加按钮',
      'icon': ' ',
      'separator_after': false
    },
    'delete': {
      'label': '<span class="fa fa-remove font-red"></span> 全部删除',
      'icon': ' ',
      'separator_after': false
    },
  };
  public static button = {
    'edit': {
      'label': '<span class="fa fa-edit font-green"></span> 编辑按钮',
      'icon': ' ',
      'separator_after': false
    },
    'delete': {
      'label': '<span class="fa fa-trash font-green"></span> 删除按钮',
      'icon': ' f',
      'separator_after': false
    }
  };
  public static columnConfig = {
    'refresh': {
      'label': '<span class="fa fa-refresh font-green"></span> 刷新',
      'icon': ' ',
      'separator_after': true
    },
    'new': {
      'label': '<span class="fa fa-plus font-green"></span> 添加一列',
      'icon': ' ',
      'separator_after': false
    },
    'delete': {
      'label': '<span class="fa fa-remove font-red"></span> 清空所有列',
      'icon': ' ',
      'separator_after': false
    },
  };
  public static field = {
    'edit': {
      'label': '<span class="fa fa-edit font-green"></span> 编辑列',
      'icon': ' ',
      'separator_after': false
    },
    'delete': {
      'label': '<span class="fa fa-trash font-red"></span> 删除列',
      'icon': ' ',
      'separator_after': false
    }
  };
  public static sortConfig = {
    'refresh': {
      'label': '<span class="fa fa-refresh font-green"></span> 刷新',
      'icon': ' ',
      'separator_after': true
    },
    'new': {
      'label': '<span class="fa fa-plus font-green"></span> 添加排序字段',
      'icon': ' ',
      'separator_after': false
    },
    'delete': {
      'label': '<span class="fa fa-remove font-red"></span> 全部删除',
      'icon': ' ',
      'separator_after': false
    }
  };
  public static sort = {
    'edit': {
      'label': '<span class="fa fa-edit font-green"></span> 编辑排序字段',
      'icon': ' ',
      'separator_after': false
    },
    'delete': {
      'label': '<span class="fa fa-trash font-red"></span> 删除排序字段',
      'icon': ' ',
      'separator_after': false
    }
  };
  public static buttonNode = {
    text: '按钮', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_toolbarsConfig', readonly: true, value: null,
    state: {
      opened: true,
      disabled: false,
      selected: false,
    },
    type: 'button',
    data: [
      { text: 'ID', name: 'id', value: '', desc: ''},
      { text: '按钮类型', name: 'type', value: 'button', desc: ''},
      { text: '启用状态图标', name: 'img', value: '', desc: ''},
      { text: '禁用状态图标', name: 'disImg', value: '', desc: ''},
      { text: '按钮内容', name: 'text', value: '', desc: ''},
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
    ]
  };
  public static fieldNode = {
    text: '列', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_columnConfigs', readonly: true, value: null,
    state: {
      opened: true,
      disabled: false,
      selected: false,
    },
    type: 'field',
    data: [
      { text: '字段', name: 'field', value: 'column', desc: ''},
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
    ]
  };
  public static sortNode = {
    text: '字段', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_sortConfig', readonly: true, value: null,
    state: {
      opened: true,
      disabled: false,
      selected: false,
    },
    type: 'sort',
    data:[
      { text: '排序字段', name: '_sort', value: '', desc: ''},
      { text: '排序方式', name: '_order', value: 'asc', desc: ''},
    ]
  };
  toolbarConfig: any;
  button: any;
  columnConfig: any;
  field: any;
  sortConfig: any;
  sort: any;
  constructor() {}
}
export interface IFieldNodeType {
  field: String;
  header: String;
  colwidth: String;
  colalign: String;
  coltype: String;
  colhide: String;
  customSetting: any[];
  colsorting: String;
}

