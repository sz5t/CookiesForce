import {Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import {TemplateBase} from '../template-properties/templateBase';
import {Broadcaster} from '../../../broadcaster/broadcaster';
import {App} from '../../../layout/index.component';
import {MasterTemplateConfig} from "../../../data/configTree/MasterTemplateConfig";
import {NodeType} from "../../../data/configTree/NodeType";
import {current} from "codelyzer/util/syntaxKind";
declare let $: any;
declare let jQuery: any;
@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateCreateComponent implements OnInit {
  /*P_NODE_TYPE_OBJECT: string[] = ['totalArea', 'viewCfg'];
  P_NODE_TYPE_ARRAY: string[] = ['pageConfigs', 'toolbarsConfig', 'columnConfigs', 'toolbarsStatusConfig', 'childToolbarEnableConfig'];
  subNodeData: any;
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
      /!*console.log(allTreeJson);
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
       });*!/
      //const instance2 = $('#checkJsonTree').jstree(true);
      // instance2.set_type(data.node, 'checkFalse');
      // console.log(instance.get_rules(data.node));
      //console.log(instance.get_path(data.node, '/', true));
    });

    if (!jQuery().bootstrapWizard) {
      return;
    }

    function format(state) {
      if (!state.id) {
        return state.text;
      } // optgroup
      return '<img class="flag" src="/assets/global/img/flags/"' + state.id.toLowerCase() + '".png"/>&nbsp;&nbsp;' + state.text;
    };

    $('#country_list').select2({
      placeholder: 'Select',
      allowClear: true,
      formatResult: format,
      width: 'auto',
      formatSelection: format,
      escapeMarkup: function (m) {
        return m;
      }
    });

    const form = $('#submit_form');
    const error = $('.alert-danger', form);
    const success = $('.alert-success', form);

    jQuery.validator.addMethod("chinese", function (value, element) {
      const chinese = /^[\u4e00-\u9fa5]+$/;
      return this.optional(element) || (chinese.test(value));
    }, '请输入中文标题');

    form.validate({
      doNotHideMessage: true, // this option enables to show the error/success messages on tab switch.
      errorElement: 'span', // default input error message container
      errorClass: 'help-block help-block-error', // default input error message class
      focusInvalid: false, // do not focus the last invalid input
      /!*rules: {
       // account
       username: {
       minlength: 5,
       required: true
       },
       password: {
       minlength: 5,
       required: true
       },
       rpassword: {
       minlength: 5,
       required: true,
       equalTo: '#submit_form_password'
       },
       // profile
       templateName: {
       required: true,
       chinese: true
       },
       templateIcon: {
       required: true
       },
       templateNameCode: {
       required: true
       },
       templateController: {
       required: true
       },
       email: {
       required: true,
       email: true
       },
       phone: {
       required: true
       },
       gender: {
       required: true
       },
       address: {
       required: true
       },
       city: {
       required: true
       },
       country: {
       required: true
       },
       // payment
       card_name: {
       required: true
       },
       card_number: {
       minlength: 16,
       maxlength: 16,
       required: true
       },
       card_cvc: {
       digits: true,
       required: true,
       minlength: 3,
       maxlength: 4
       },
       card_expiry_date: {
       required: true
       },
       'payment[]': {
       required: true,
       minlength: 1
       }
       },

       messages: { // custom messages for radio buttons and checkboxes
       'payment[]': {
       required: 'Please select at least one option',
       minlength: jQuery.validator.format('Please select at least one option')
       },
       'templateName':{
       required: '请输入模版名称'
       },
       'templateIcon':{
       required: '请输入模版图标'
       },
       'templateNameCode':{
       required: '请输入模版编码'
       },
       'templateController':{
       required: '请输入模版控制器名称'
       }
       },*!/

      errorPlacement: function (error, element) { // render error placement for each input type
        if (element.attr('name') === 'gender') { // for uniform radio buttons, insert the after the given container
          error.insertAfter('#form_gender_error');
        } else if (element.attr('name') === 'payment[]') { // for uniform checkboxes, insert the after the given container
          error.insertAfter('#form_payment_error');
        } else {
          error.insertAfter(element); // for other inputs, just perform default behavior
        }
      },

      invalidHandler: function (event, validator) { // display error alert on form submit
        success.hide();
        error.show();
        App.scrollTo(error, -200);
      },

      highlight: function (element) { // hightlight error inputs
        $(element)
          .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
      },

      unhighlight: function (element) { // revert the change done by hightlight
        $(element)
          .closest('.form-group').removeClass('has-error'); // set error class to the control group
      },

      success: function (label) {
        if (label.attr('for') === 'gender' || label.attr('for') === 'payment[]') { // for checkboxes and radio buttons, no need to show OK icon
          label
            .closest('.form-group').removeClass('has-error').addClass('has-success');
          label.remove(); // remove error label here
        } else { // display success icon for other inputs
          label
            .addClass('valid') // mark the current input as valid and display OK icon
            .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
        }
      },

      submitHandler: function (form) {
        success.show();
        error.hide();
        // add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
      }

    });

    const displayConfirm = function () {
      $('#tab4 .form-control-static', form).each(function () {
        let input = $('[name="' + $(this).attr('data-display') + '"]', form);
        if (input.is(':radio')) {
          input = $('[name="' + $(this).attr('data-display') + '"]:checked', form);
        }
        if (input.is(':text') || input.is('textarea')) {
          $(this).html(input.val());
        } else if (input.is('select')) {
          $(this).html(input.find('option:selected').text());
        } else if (input.is(':radio') && input.is(':checked')) {
          $(this).html(input.attr('data-title'));
        } else if ($(this).attr('data-display') == 'payment[]') {
          let payment = [];
          $('[name="payment[]"]:checked', form).each(function () {
            payment.push($(this).attr('data-title'));
          });
          $(this).html(payment.join('<br>'));
        }
      });
    };

    const handleTitle = function (tab, navigation, index) {
      const total = navigation.find('li').length;
      const current = index + 1;
      // set wizard title
      $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
      // set done steps
      jQuery('li', $('#form_wizard_1')).removeClass('done');
      let li_list = navigation.find('li');
      for (let i = 0; i < index; i++) {
        jQuery(li_list[i]).addClass('done');
      }

      if (current === 1) {
        $('#form_wizard_1').find('.button-previous').hide();
      } else {
        $('#form_wizard_1').find('.button-previous').show();
      }
      if (current === 4) {
        allTreeJson = instance.get_json();
        const nodeChecker = new NodeChecker(allTreeJson);
        nodeChecker.startCheck(allTreeJson);
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
        });
      }
      if (current >= total) {
        $('#form_wizard_1').find('.button-next').hide();
        $('#form_wizard_1').find('.button-submit').show();
        displayConfirm();
      } else {
        $('#form_wizard_1').find('.button-next').show();
        $('#form_wizard_1').find('.button-submit').hide();
      }

      App.scrollTo($('.page-title'), false);
    };

    // default form wizard
    $('#form_wizard_1').bootstrapWizard({
      'nextSelector': '.button-next',
      'previousSelector': '.button-previous',
      onTabClick: function (tab, navigation, index, clickedIndex) {
        //return false;

        success.hide();
        error.hide();
        if (form.valid() === false) {
          return false;
        }

        handleTitle(tab, navigation, clickedIndex);
      },
      onNext: function (tab, navigation, index) {
        success.hide();
        error.hide();

        if (form.valid() === false) {
          return false;
        }

        handleTitle(tab, navigation, index);
      },
      onPrevious: function (tab, navigation, index) {
        success.hide();
        error.hide();

        handleTitle(tab, navigation, index);
      },
      onTabShow: function (tab, navigation, index) {
        let total = navigation.find('li').length;
        let current = index + 1;
        let $percent = (current / total) * 100;
        $('#form_wizard_1').find('.progress-bar').css({
          width: $percent + '%'
        });
      }
    });

    $('#form_wizard_1').find('.button-previous').hide();
    $('#form_wizard_1 .button-submit').click(function () {
      alert('Finished! Hope you like it :)');
    }).hide();

    // apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
    $('#country_list', form).change(function () {
      form.validate().element($(this)); // revalidate the chosen dropdown value and show error or success message for the input
    });


    $('#js-grid-juicy-projects').cubeportfolio({
      filters: '#js-filters-juicy-projects',
      loadMore: '#js-loadMore-juicy-projects',
      loadMoreAction: 'click',
      layoutMode: 'grid',
      defaultFilter: '*',
      animationType: 'quicksand',
      gapHorizontal: 35,
      gapVertical: 30,
      gridAdjustment: 'responsive',
      mediaQueries: [{
        width: 1500,
        cols: 5
      }, {
        width: 1100,
        cols: 4
      }, {
        width: 800,
        cols: 3
      }, {
        width: 480,
        cols: 2
      }, {
        width: 320,
        cols: 1
      }],
      caption: 'overlayBottomReveal',
      displayType: 'sequentially',
      displayTypeSpeed: 80,

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

      // singlePage popup
      singlePageDelegate: '.cbp-singlePage',
      singlePageDeeplinking: true,
      singlePageStickyNavigation: true,
      singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
      singlePageCallback: function (url, element) {
        // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        const t = this;

        $.ajax({
          url: url,
          type: 'GET',
          dataType: 'html',
          timeout: 10000
        })
          .done(function (result) {
            t.updateSinglePage(result);
          })
          .fail(function () {
            t.updateSinglePage('AJAX Error! Please refresh the page!');
          });
      },
    });

    $('.chooseName').each(function () {
      $(this).bind('click', function () {
        const name = $(this).attr('data-temp');
        $('#chooseTemplateName').html(name);
      });
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
  }*/

  nodeProperties: any;
  constructor() {

  }
  // broadcastFunc = (data) => {
  //   console.log(data);
  //   this.nodeProperties = data;
  //
  // };
  tableInit() {
    const bsTable = Object.create({});
    bsTable.init = function(){
      $('#test').bootstrapTable({
        // url: '/Home/GetDepartment',         //请求后台的URL（*）
        // method: 'get',                      //请求方式（*）
        toolbar: '#toolbar',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        // pagination: true,                   //是否显示分页（*）
        // sortable: false,                     //是否启用排序
        // sortOrder: 'asc',                   //排序方式
        // queryParams: bsTable.queryParams,   //传递参数（*）
        sidePagination: 'server',           //分页方式：client客户端分页，server服务端分页（*）
        // pageNumber:1,                       //初始化加载第一页，默认第一页
        // pageSize: 10,                       //每页的记录行数（*）
        // pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        // search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        // strictSearch: true,
        showColumns: true,                  //是否显示所有的列
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        // height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: 'ID',                     //每一行的唯一标识，一般为主键列
        showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: true,                   //是否显示父子表
        columns: [{
          field: 'text',
          title: '属性',
          align: 'center',
          width: '15%',
          valign: 'middle'
        }, {
          field: 'name',
          title: '',
          visible: false,
        }, {
          field: 'value',
          title: '属性值',
          editable: {
            type: 'text',
            title: 'Name'
          },
          halign: 'center',
        }, {
          field: 'desc',
          title: '说明',
          width: '45%',
          halign: 'center'
        }],
        onEditableSave: function(field, row, oldValue, $sel){
          $('#test').bootstrapTable('resetView');
        }
      });
    };
    bsTable.queryParams = function(params){
      // return {};
    };
    return bsTable;
  }
  /*toolbarInit() {
    const toolbars = Object.create({});
    toolbars.init = function(){
      //初始化页面上面的按钮事件
    };
    return toolbars;
  }*/
  ngOnInit() {

    if (!jQuery().bootstrapWizard) {
      return;
    }

    function format(state) {
      if (!state.id) {
        return state.text;
      } // optgroup
      return '<img class="flag" src="/assets/global/img/flags/"' + state.id.toLowerCase() + '".png"/>&nbsp;&nbsp;' + state.text;
    };

    $('#country_list').select2({
      placeholder: 'Select',
      allowClear: true,
      formatResult: format,
      width: 'auto',
      formatSelection: format,
      escapeMarkup: function (m) {
        return m;
      }
    });

    const form = $('#submit_form');
    const error = $('.alert-danger', form);
    const success = $('.alert-success', form);

    jQuery.validator.addMethod("chinese", function (value, element) {
      const chinese = /^[\u4e00-\u9fa5]+$/;
      return this.optional(element) || (chinese.test(value));
    }, '请输入中文标题');

    form.validate({
      doNotHideMessage: true, // this option enables to show the error/success messages on tab switch.
      errorElement: 'span', // default input error message container
      errorClass: 'help-block help-block-error', // default input error message class
      focusInvalid: false, // do not focus the last invalid input
      /*rules: {
       // account
       username: {
       minlength: 5,
       required: true
       },
       password: {
       minlength: 5,
       required: true
       },
       rpassword: {
       minlength: 5,
       required: true,
       equalTo: '#submit_form_password'
       },
       // profile
       templateName: {
       required: true,
       chinese: true
       },
       templateIcon: {
       required: true
       },
       templateNameCode: {
       required: true
       },
       templateController: {
       required: true
       },
       email: {
       required: true,
       email: true
       },
       phone: {
       required: true
       },
       gender: {
       required: true
       },
       address: {
       required: true
       },
       city: {
       required: true
       },
       country: {
       required: true
       },
       // payment
       card_name: {
       required: true
       },
       card_number: {
       minlength: 16,
       maxlength: 16,
       required: true
       },
       card_cvc: {
       digits: true,
       required: true,
       minlength: 3,
       maxlength: 4
       },
       card_expiry_date: {
       required: true
       },
       'payment[]': {
       required: true,
       minlength: 1
       }
       },

       messages: { // custom messages for radio buttons and checkboxes
       'payment[]': {
       required: 'Please select at least one option',
       minlength: jQuery.validator.format('Please select at least one option')
       },
       'templateName':{
       required: '请输入模版名称'
       },
       'templateIcon':{
       required: '请输入模版图标'
       },
       'templateNameCode':{
       required: '请输入模版编码'
       },
       'templateController':{
       required: '请输入模版控制器名称'
       }
       },*/

      errorPlacement: function (error, element) { // render error placement for each input type
        if (element.attr('name') === 'gender') { // for uniform radio buttons, insert the after the given container
          error.insertAfter('#form_gender_error');
        } else if (element.attr('name') === 'payment[]') { // for uniform checkboxes, insert the after the given container
          error.insertAfter('#form_payment_error');
        } else {
          error.insertAfter(element); // for other inputs, just perform default behavior
        }
      },

      invalidHandler: function (event, validator) { // display error alert on form submit
        success.hide();
        error.show();
        App.scrollTo(error, -200);
      },

      highlight: function (element) { // hightlight error inputs
        $(element)
          .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
      },

      unhighlight: function (element) { // revert the change done by hightlight
        $(element)
          .closest('.form-group').removeClass('has-error'); // set error class to the control group
      },

      success: function (label) {
        if (label.attr('for') === 'gender' || label.attr('for') === 'payment[]') { // for checkboxes and radio buttons, no need to show OK icon
          label
            .closest('.form-group').removeClass('has-error').addClass('has-success');
          label.remove(); // remove error label here
        } else { // display success icon for other inputs
          label
            .addClass('valid') // mark the current input as valid and display OK icon
            .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
        }
      },

      submitHandler: function (form) {
        success.show();
        error.hide();
        // add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
      }

    });

    const displayConfirm = function () {
      $('#tab4 .form-control-static', form).each(function () {
        let input = $('[name="' + $(this).attr('data-display') + '"]', form);
        if (input.is(':radio')) {
          input = $('[name="' + $(this).attr('data-display') + '"]:checked', form);
        }
        if (input.is(':text') || input.is('textarea')) {
          $(this).html(input.val());
        } else if (input.is('select')) {
          $(this).html(input.find('option:selected').text());
        } else if (input.is(':radio') && input.is(':checked')) {
          $(this).html(input.attr('data-title'));
        } else if ($(this).attr('data-display') == 'payment[]') {
          let payment = [];
          $('[name="payment[]"]:checked', form).each(function () {
            payment.push($(this).attr('data-title'));
          });
          $(this).html(payment.join('<br>'));
        }
      });
    };

    const handleTitle = function (tab, navigation, index) {
      const total = navigation.find('li').length;
      const current = index + 1;
      // set wizard title
      $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
      // set done steps
      jQuery('li', $('#form_wizard_1')).removeClass('done');
      let li_list = navigation.find('li');
      for (let i = 0; i < index; i++) {
        jQuery(li_list[i]).addClass('done');
      }

      if (current === 1) {
        $('#form_wizard_1').find('.button-previous').hide();
      } else {
        $('#form_wizard_1').find('.button-previous').show();
      }
      if (current === 4) {
       /* allTreeJson = instance.get_json();
        const nodeChecker = new NodeChecker(allTreeJson);
        nodeChecker.startCheck(allTreeJson);
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
      }
      if (current >= total) {
        $('#form_wizard_1').find('.button-next').hide();
        $('#form_wizard_1').find('.button-submit').show();
        displayConfirm();
      } else {
        $('#form_wizard_1').find('.button-next').show();
        $('#form_wizard_1').find('.button-submit').hide();
      }

      App.scrollTo($('.page-title'), false);
    };

    // default form wizard
    $('#form_wizard_1').bootstrapWizard({
      'nextSelector': '.button-next',
      'previousSelector': '.button-previous',
      onTabClick: function (tab, navigation, index, clickedIndex) {
        //return false;

        success.hide();
        error.hide();
        if (form.valid() === false) {
          return false;
        }

        handleTitle(tab, navigation, clickedIndex);
      },
      onNext: function (tab, navigation, index) {
        success.hide();
        error.hide();

        if (form.valid() === false) {
          return false;
        }

        handleTitle(tab, navigation, index);
      },
      onPrevious: function (tab, navigation, index) {
        success.hide();
        error.hide();

        handleTitle(tab, navigation, index);
      },
      onTabShow: function (tab, navigation, index) {
        let total = navigation.find('li').length;
        let current = index + 1;
        let $percent = (current / total) * 100;
        $('#form_wizard_1').find('.progress-bar').css({
          width: $percent + '%'
        });
      }
    });

    $('#form_wizard_1').find('.button-previous').hide();
    $('#form_wizard_1 .button-submit').click(function () {
      alert('Finished! Hope you like it :)');
    }).hide();

    // apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
    $('#country_list', form).change(function () {
      form.validate().element($(this)); // revalidate the chosen dropdown value and show error or success message for the input
    });


    $('#js-grid-juicy-projects').cubeportfolio({
      filters: '#js-filters-juicy-projects',
      loadMore: '#js-loadMore-juicy-projects',
      loadMoreAction: 'click',
      layoutMode: 'grid',
      defaultFilter: '*',
      animationType: 'quicksand',
      gapHorizontal: 35,
      gapVertical: 30,
      gridAdjustment: 'responsive',
      mediaQueries: [{
        width: 1500,
        cols: 5
      }, {
        width: 1100,
        cols: 4
      }, {
        width: 800,
        cols: 3
      }, {
        width: 480,
        cols: 2
      }, {
        width: 320,
        cols: 1
      }],
      caption: 'overlayBottomReveal',
      displayType: 'sequentially',
      displayTypeSpeed: 80,

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

      // singlePage popup
      singlePageDelegate: '.cbp-singlePage',
      singlePageDeeplinking: true,
      singlePageStickyNavigation: true,
      singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
      singlePageCallback: function (url, element) {
        // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        const t = this;

        $.ajax({
          url: url,
          type: 'GET',
          dataType: 'html',
          timeout: 10000
        })
          .done(function (result) {
            t.updateSinglePage(result);
          })
          .fail(function () {
            t.updateSinglePage('AJAX Error! Please refresh the page!');
          });
      },
    });

    $('.chooseName').each(function () {
      $(this).bind('click', function () {
        const name = $(this).attr('data-temp');
        $('#chooseTemplateName').html(name);
      });
    });

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
    const tbl = this.tableInit();
    tbl.init();
    // const toolbar = this.toolbarInit();
    // toolbar.init();

    $('#SettingTree').on('select_node.jstree', (e, data) => {

      console.log('settings', instance.get_json());
      $('#test').bootstrapTable('removeAll');
      $('#test').bootstrapTable('append', data.node.data.properties);
      console.log(this.generateSettingData2(instance.get_json()[0]));
      //this.broadcaster.broadcast('node_properties', data.node.data);
      // const promise = this.router.navigate(['/app/module-template/create/template-properties/' + data.node.type + '/' + data.node.id]);
      // promise.then(() => {
      //   //console.log(data.node.data);
      //   this.broadcaster.broadcast('node_properties', data.node.data);
      //   //console.log(instance.get_json());
      //   const total = instance.get_json();
      //   const settings = this.generateSettingData(total[0]);
      //
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
  private generateSettingData2 (nodeData: any) {
    const currentData = nodeData.data.properties;
    const currentChildren = nodeData.children;
    let obj;
    switch (currentData[0].name){
      case 'totalArea':
        obj = { totalArea: {}};
        for(const child of currentChildren){
          if(child.children.length > 0 ){
            obj.totalArea[child.data.properties[0].name] = this.generateSettingData2(child);
          }else{
            obj.totalArea[child.data.properties[0].name] = child.data.properties[0].value;
          }
        }
        return obj;
      case 'pageConfigs':
        const arr = [];
        for(const child of currentChildren){
          arr.push(this.generateSettingData2(child));
        }
        return arr;
      case 'pageConfigsObj':
        obj = {};
        for(const child of currentChildren){
          if(child.children.length > 0 ){
            obj[child.data.properties[0].name] = this.generateSettingData2(child);
          }else{
            obj[child.data.properties[0].name] = child.data.properties[0].value;
          }
        }
        return obj;
      case 'viewCfg':
        obj = {};
        for(const child of currentChildren){
          if(child.children.length > 0 ){
            obj[child.data.properties[0].name] = this.generateSettingData2(child);
          }else if(child.children.length === 0){
            obj[child.data.properties[0].name] = child.data.properties[0].value;
          }else if(child.data.properties.length > 1){
            return child.data.properties;
          }
        }
        return obj;
      case 'columnConfigs':
        const columnConfigs = [];
        for (const child of currentChildren){
          const column = {};
          for (const d of child.data.properties){
            if(Array.isArray(d.value) && d.name === 'customSetting'){
              const tem = [];
              for(const customSettings of d.value){
                const setting = {}
                for(const cs of customSettings){
                  setting[cs.name] = cs.value;
                }
                tem.push(setting);
              }
              column[d.name] = tem;
            }else{
              column[d.name] = d.value;
            }


          }
          columnConfigs.push(column);
        }
        return columnConfigs;
      case 'toolbarsConfig':
        const toolbarsConfig = [];
        for (const child of currentChildren){
          const btn = {};
          for (const t of child.data.properties){
            btn[t.name] = t.value;
          }
          toolbarsConfig.push(btn);
        }
        return toolbarsConfig;
      case 'sortConfig':
        obj = {};
        for(const child of currentChildren){
          if(child.children.length > 0 ){
            obj[child.data.properties[0].name] = this.generateSettingData2(child);
          }else{
            obj[child.data.properties[0].name] = child.data.properties[0].value;
          }
        }
        return obj;
      case 'toolbarsEnabledConfig':
        break;
      case 'childToolbarEnabledConfig':
        break;
    }

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
