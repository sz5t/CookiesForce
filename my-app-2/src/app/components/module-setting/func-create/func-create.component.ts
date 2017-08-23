import { Component, OnInit } from '@angular/core';
import {letProto} from "rxjs/operator/let";

declare let $: any;
@Component({
  selector: 'app-func-create',
  templateUrl: './func-create.component.html',
  styleUrls: ['./func-create.component.css']
})
export class FuncCreateComponent implements OnInit {

  constructor() { }
  handleDemo() {

  // Set the "bootstrap" theme as the default theme for all Select2
  // widgets.
  //
  // @see https://github.com/select2/select2/issues/2927
  $.fn.select2.defaults.set('theme', 'bootstrap');

  const placeholder = '--请选择一个模版--';

  $('.select2, .select2-multiple').select2({
    placeholder: placeholder,
    width: null
  });

  $('.select2-allow-clear').select2({
    allowClear: true,
    placeholder: placeholder,
    width: null
  });

  $('button[data-select2-open]').click(function() {
    $('#' + $(this).data('select2-open')).select2('open');
  });
  // copy Bootstrap validation states to Select2 dropdown
  //
  // add .has-waring, .has-error, .has-succes to the Select2 dropdown
  // (was #select2-drop in Select2 v3.x, in Select2 v4 can be selected via
  // body > .select2-container) if _any_ of the opened Select2's parents
  // has one of these forementioned classes (YUCK! ;-))
  $(".select2, .select2-multiple, .select2-allow-clear, .js-data-example-ajax").on("select2:open", function() {
    if ($(this).parents("[class*='has-']").length) {
      let classNames = $(this).parents("[class*='has-']")[0].className.split(/\s+/);

      for (let i = 0; i < classNames.length; ++i) {
        if (classNames[i].match("has-")) {
          $('body > .select2-container').addClass(classNames[i]);
        }
      }
    }
  });
}
  ngOnInit() {
    this.handleDemo();
  }

}
