import { Component, OnInit } from '@angular/core';
import { Details } from '../detail';
import { DetailsService } from '../details-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private detailService : DetailsService, private router : Router) {    }
  detail!: Details;

  getSelectedDetail(): void{
    this.detailService.getSelectedDetail().subscribe((selectedDetail: Details)=>this.detail=selectedDetail);
  }

  edit(){
    this.router.navigate(['/menu/edit',this.detail.name]);
  }

  ngOnInit(): void {
    this.getSelectedDetail()
}
}