/**
 * Created by zhaoxinlei on 2017/9/4.
 */
import {Broadcaster} from '../../../broadcaster/broadcaster';
declare let $: any;
declare let JSON: any;
export class TemplateBase {
  protected broadcastObj: any;
  protected nodeProperties: any;
  constructor(protected broadcaster: Broadcaster) {
    $.fn.editable.defaults.defaultValue = '未设置';
    $.fn.editable.defaults.emptytext = '未设置';
    $.fn.editable.defaults.emptyclass = 'font-red-sunglo';
    $.fn.editable.defaults.inputclass = 'form-control';
  }
  protected init(broadFunc){
    return this.broadcaster.on<string>('node_properties')
      .subscribe((data) => {
        broadFunc(data);
      });
  }
  protected destroy(){
    this.broadcastObj.unsubscribe();
    this.broadcastObj = null;
  }
}
