/**
 * Created by zhaoxinlei on 2017/8/10.
 */
export class TreeNode {
  id: string;
  parent: string;
  text: string;
  icon: string;
  li_attr: any;
  a_attr: any;
  readonly: boolean;
  value: any;
  state: {
    opened: boolean;
    disabled: boolean;
    selected: boolean;
  };
}
