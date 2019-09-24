import { Component, OnInit } from '@angular/core';

import { DanceGroup } from 'src/app/models/DanceGroup';
import { GroupWebService } from 'src/app/web-services/group.web-service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html'
})
export class GroupListComponent implements OnInit {
  groups: DanceGroup[];

  constructor(private groupWebService: GroupWebService) {}

  ngOnInit() {
    this.loadGroups();
  }

  private loadGroups(): void {
    this.groupWebService.getGroups().subscribe(data => (this.groups = data));
  }
}
