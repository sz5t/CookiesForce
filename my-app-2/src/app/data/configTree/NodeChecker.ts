/**
 * Created by zhaoxinlei on 2017/8/17.
 */
import { NodeType } from './NodeType';
export class NodeChecker {
  topNode
  constructor(topNode){
    this.topNode = topNode;
    this.startCheck(this.topNode[0]);
  }
  startCheck (node) {
    node.icon = '';
    switch(node.type){
      case NodeType.NODE_TYPE.BUTTON:
        this.buttonCheck(node);
        break;
      case NodeType.NODE_TYPE.FIELD:
        this.fieldCheck(node);
        break;
      case NodeType.NODE_TYPE.SORT:
        this.sortCheck(node);
        break;
      default:
        node.type = 'checkRight';

    }
    if(node.children){
      for(let d of node.children){
        this.startCheck(d);
      }
    }
  }
  buttonCheck(node) {
    node.type = 'checkRight';
  }
  fieldCheck(node){
   node.type = 'checkFalse';
  }
  sortCheck(node){
    node.type = 'checkWarning';
  }
  apiCheck(){

  }
  itemAPICheck(){

  }
  pagingCheck(){

  }
  pagingBarNameCheck(){

  }
}
