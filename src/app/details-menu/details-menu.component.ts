import { Component, OnInit } from '@angular/core';
import { Details } from '../detail';
import { DetailsService } from '../details-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent implements OnInit {

  details ?: Details[];
  selectedDetail ?: Details;
  operationMode = 'display';
  constructor(private DetailsService : DetailsService, private router : Router) { }

  getDetails(): void{
    this.DetailsService.getDetails().subscribe(details=>this.details=details);
  }

  onMenuSelect(detail: Details): void{
    this.selectedDetail = detail;
    if(this.details){
      for(let i=0; i<this.details.length; i++){
        this.details[i].selected = false;
      }
      detail.selected = true;
    }
    this.DetailsService.setSelectedDetail(this.selectedDetail);
    this.router.navigate(['/menu/display',detail.name]);
  }

  ngOnInit(): void {
    this.getDetails();
    if(this.details){
      this.selectedDetail = this.details[0];
      this.DetailsService.setSelectedDetail(this.selectedDetail);
    }
  }

}
