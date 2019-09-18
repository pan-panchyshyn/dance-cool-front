import { Component, OnInit } from '@angular/core';
import { DanceGroup } from 'src/app/models/DanceGroup';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-admin',
  templateUrl: './group-admin.component.html',
  styleUrls: ['./group-admin.component.css']
})
export class GroupAdminComponent implements OnInit {
  groupId = 1;
  constructor(private groupService: GroupService) {}

  ngOnInit() {}

  getGroupId() {
    this.groupService.groupId.next(this.groupId);
  }
}
