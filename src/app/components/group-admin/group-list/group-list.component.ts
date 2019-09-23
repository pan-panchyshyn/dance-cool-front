import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { DanceGroup } from 'src/app/models/DanceGroup';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: DanceGroup[];
  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.getAllGroups();
  }

  getAllGroups() {
    this.groupService.getAllGroups().subscribe(data => (this.groups = data));
    console.log(this.groups);
  }
}
