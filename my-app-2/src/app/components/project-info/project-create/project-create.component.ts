import { Component, OnInit } from '@angular/core';
import {MasterTemplateConfig} from "../../../data/configTree/MasterTemplateConfig";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  name: MasterTemplateConfig;
  constructor() { }

  ngOnInit() {
    this.name = new MasterTemplateConfig();
  }

}
