import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  id: number;
  ngOnInit() {
    this.router.paramMap.get('id')
  }

}
