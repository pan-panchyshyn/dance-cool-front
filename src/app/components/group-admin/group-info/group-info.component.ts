import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { ActivatedRoute } from '@angular/router';
import { DanceGroup } from '../../../models/DanceGroup';
import { User } from '../../../models/User';
import { Subject, of } from 'rxjs';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {
  @Input() groupId = 2;

  students: User[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.groupService.groupId
      .pipe(filter((value: number) => value > 0 && value < 8))
      .subscribe((value: number) => {
        this.groupService
          .getGroupStudents(value)
          .subscribe(r => (this.students = r));
      });
  }
}
