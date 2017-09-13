


import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Router} from '@angular/router';
import {MasterTemplateConfig} from '../../../data/configTree/MasterTemplateConfig';
import {NodeType} from '../../../data/configTree/NodeType';
import {NodeChecker} from '../../../data/configTree/NodeChecker';

import {Broadcaster} from '../../../broadcaster/broadcaster';
import {arrayify} from "tslint/lib/utils";

declare let $: any;
declare let jQuery: any;
@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.css']
})
export class TemplateEditorComponent implements OnInit {
  P_NODE_TYPE_OBJECT: string[] = ['totalArea', 'viewCfg'];
  P_NODE_TYPE_ARRAY: string[] = ['pageConfigs', 'toolbarsConfig', 'columnConfigs', 'toolbarsStatusConfig', 'childToolbarEnableConfig'];
  @Input() subNodeData: any;
  constructor(private router: Router, private broadcaster: Broadcaster) {
  }

  ngOnInit() {
    const masterConfig = new MasterTemplateConfig();

    const _menu = $('#SettingTree').jstree({
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
    const instance = $('#SettingTree').jstree(true);
    let allTreeJson;
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
    $('#SettingTree').on('select_node.jstree', (e, data) => {
      let nodeData = data.node.data;
      this.subNodeData = data.node.data;
      console.log(this.subNodeData);
      //this.broadcaster.broadcast('node_properties', data.node.data);
      // const promise = this.router.navigate(['/app/module-template/create/template-properties/' + data.node.type + '/' + data.node.id]);
      // promise.then(() => {
      //   //console.log(data.node.data);
      //   this.broadcaster.broadcast('node_properties', data.node.data);
      //   //console.log(instance.get_json());
      //   const total = instance.get_json();
      //   const settings = this.generateSettingData(total[0]);
      //   //console.log('settings', JSON.stringify(settings));
      // });
      //allTreeJson = instance.get_json();
      /*console.log(allTreeJson);
       $('#checkJsonTree').jstree({
       'core': {
       'themes': {
       'responsive': true
       },
       'check_callback': true,
       'data': allTreeJson
       },
       'types': NodeType.nodeType,
       'plugins': ['types'],
       });*/
      //const instance2 = $('#checkJsonTree').jstree(true);
      // instance2.set_type(data.node, 'checkFalse');
      // console.log(instance.get_rules(data.node));
      //console.log(instance.get_path(data.node, '/', true));
    });
  }

  private generateSettingData(nodeData: any): any {
    const currentData = nodeData.data;
    const currentChildren = nodeData.children;

    if (Array.isArray(currentChildren) && currentChildren.length > 0) {
      if (currentData.hasOwnProperty('totalArea')) {
        for (const child of currentChildren) {
          for (const childDataProp in child.data) {
            if (child.data.hasOwnProperty(childDataProp)) {
              currentData['totalArea'][childDataProp] = child.data[childDataProp];
              if (child.children.length > 0) {
                currentData['totalArea'][childDataProp] = this.generateSettingData(child);
              }
            }
          }
        }
      } else if (currentData.hasOwnProperty('pageConfigs')) {
        const arr = [];
        for (const child of currentChildren) {
          arr.push(this.generateSettingData(child));
        }
        return arr;
      } else if (currentData.hasOwnProperty('pageConfigsObj')) {
        const pageConfigsObj = {};
        for (const child of currentChildren) {
          for (const childDataProp in child.data) {
            if (child.data.hasOwnProperty(childDataProp)) {
              pageConfigsObj[childDataProp] = child.data[childDataProp];
              if (child.children.length > 0) {
                pageConfigsObj[childDataProp] = this.generateSettingData(child);
              }
            }
          }
        }
        return pageConfigsObj;
      } else if (currentData.hasOwnProperty('viewCfg')) {
        const viewCfg = {};
        for (const child of currentChildren) {
          for (const childDataProp in child.data) {
            if (child.data.hasOwnProperty(childDataProp)) {
              viewCfg[childDataProp] = child.data[childDataProp];
              if (child.children.length > 0) {
                viewCfg[childDataProp] = this.generateSettingData(child);
              }
            }
          }
        }
        return viewCfg;
      } else if (currentData.hasOwnProperty('columnConfigs')) {
        const arr = [];
        for (const child of currentChildren) {
          arr.push(child.data);
        }
        return arr;
      } else if (currentData.hasOwnProperty('toolbarsConfig')) {
        const arr = [];
        for (const child of currentChildren) {
          arr.push(child.data);
        }
        return arr;
      } else if (nodeData.data.hasOwnProperty('sortConfig')) {
      } else if (nodeData.data.hasOwnProperty('toolbarsEnabledConfig')) {
      } else if (nodeData.data.hasOwnProperty('childToolbarEnabledConfig')) {
      }
    }
    return currentData;
  }
}
