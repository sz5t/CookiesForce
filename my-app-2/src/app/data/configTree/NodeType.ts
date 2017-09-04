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
  };
  public static fieldNode = {
    text: '列', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_columnConfigs', readonly: true, value: null,
    state: {
      opened: true,
      disabled: false,
      selected: false,
    },
    type: 'field',
    data: {
      'field': 'column 1',
      'header': '启用状态',
      'colwidth': '100',
      'colalign': 'center',
      'coltype': 'ro',
      'colhide': 'false',
      'customSetting': [],
      'colsorting': 'server'
    }
  };
  public static sortNode = {
    text: '字段', icon: '', li_attr: '', a_attr: '', parent: 'viewCfg_1_sortConfig', readonly: true, value: null,
    state: {
      opened: true,
      disabled: false,
      selected: false,
    }, type: 'sort'
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

