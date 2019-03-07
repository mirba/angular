import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-department-list',
  template: `<h2>Department List</h2>
	<h3>{{errorMsg}}</h3>
	<ul class="items">
		<li (click)="onSelect({{department}})" *ngFor="let department of departments">
			<span class="badge">{{department.id}}</span>{{department.name}}
		</li>
	</ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
	public departments = [];
	public errorMsg;
	
  constructor(private router: Router, private _departmentService: DepartmentService) { }

  ngOnInit() {
		this._departmentService.getDepartments()
			.subscribe(data => this.departments = data,
								error => this.errorMsg = error);
  }

	onSelect(department){
		this.router.navigate(['/departments', department.id]);
	}
}
