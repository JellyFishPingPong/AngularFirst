import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goals-detail',
  imports: [],
  templateUrl: './goals-detail.component.html',
  styleUrl: './goals-detail.component.scss'
})
export class GoalsDetailComponent implements OnInit{
  id:number = 0;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    //this.router.params.subscribe((params) => { this.id = params['id']; });
  }

}
