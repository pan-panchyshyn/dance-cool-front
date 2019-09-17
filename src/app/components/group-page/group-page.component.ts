import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { ActivatedRoute } from '@angular/router';
import { DanceGroup } from '../../models/Group';
import { User } from '../../models/User';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {
  group: DanceGroup;
  students: User[];

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getStudents();
  }

  private getStudents(): void {
    const groupId = +this.route.snapshot.paramMap.get('groupId');
    this.groupService
      .getGroupStudents(groupId)
      .subscribe(students => (this.students = students));
  }
}
