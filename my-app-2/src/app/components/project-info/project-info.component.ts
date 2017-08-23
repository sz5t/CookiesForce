import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  constructor() { }

  initTable() {
    let table = $('#sample_1');

    let oTable = table.dataTable({

      // Internationalisation. For more info refer to http://datatables.net/manual/i18n
      'language': {
        'aria': {
          'sortAscending': ': activate to sort column ascending',
          'sortDescending': ': activate to sort column descending'
        },
        'emptyTable': 'No data available in table',
        'info': '显示 从 _START_ 到 _END_ 共 _TOTAL_ 条记录',
        'infoEmpty': 'No entries found',
        'infoFiltered': '(filtered1 from _MAX_ total entries)',
        'lengthMenu': '_MENU_ 显示记录数',
        'search': '查询:',
        'zeroRecords': 'No matching records found'
      },

      // Or you can use remote translation file
      //'language': {
      //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
      //},


      buttons: [],

      // setup responsive extension: http://datatables.net/extensions/responsive/
      responsive: true,

      // 'ordering': false, disable column ordering
      // 'paging': false, disable pagination

      'order': [
        [0, 'asc']
      ],

      'lengthMenu': [
        [5, 10, 15, 20, -1],
        [5, 10, 15, 20, 'All'] // change per page values here
      ],
      // set the initial value
      'pageLength': 10,

      'dom': '<"row" <"col-md-12"B>><"row"<"col-md-6 col-sm-12"l><"col-md-6 col-sm-12"f>r><"table-scrollable"t><"row"<"col-md-5 col-sm-12"i><"col-md-7 col-sm-12"p>>', // horizobtal scrollable datatable

      // Uncomment below line('dom' parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
      // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
      // So when dropdowns used the scrollable div should be removed.
      //'dom': '<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>',
    });
  }

  ngOnInit() {
    this.initTable();
  }

}
