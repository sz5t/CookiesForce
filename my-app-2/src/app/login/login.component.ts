import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;
@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'Login';
  handleLogin(): void {

  $('.login-form').validate({
    errorElement: 'span', //default input error message container
    errorClass: 'help-block', // default input error message class
    focusInvalid: false, // do not focus the last invalid input
    rules: {
      username: {
        required: true
      },
      password: {
        required: true
      },
      remember: {
        required: false
      }
    },

    messages: {
      username: {
        required: '必须填写用户名'
      },
      password: {
        required: '必须填写密码'
      }
    },

    invalidHandler: function(event, validator) { //display error alert on form submit
      $('.alert-danger', $('.login-form')).show();
    },

    highlight: function(element) { // hightlight error inputs
      $(element)
        .closest('.form-group').addClass('has-error'); // set error class to the control group
    },

    success: function(label) {
      label.closest('.form-group').removeClass('has-error');
      label.remove();
    },

    errorPlacement: function(error, element) {
      error.insertAfter(element.closest('.input-icon'));
    },

    submitHandler: function(form) {
      form.submit(); // form validation success, call ajax form submit
    }
  });

  $('.login-form input').keypress(function(e) {
    if (e.which == 13) {
      if ($('.login-form').validate().form()) {
        $('.login-form').submit(); //form validation success, call ajax form submit
      }
      return false;
    }
  });

  };
  constructor(private router:Router){}
  ngOnInit() {
    this.handleLogin();
  }
  login(){
    console.log('login');
    this.router.navigateByUrl('/app/module-setting');
  }
}
