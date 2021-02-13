import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CseComponent implements OnInit {

  displayBooks: any;
  dept: String;
  public updateObj: any;
  constructor(private service: StudentServiceService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( 
      params => { 
        this.dept =  params['dept']; 
        // this.language=params['language']; 
      } 
    ) 
    this.service.getAllBooks().subscribe( (data: any) => {this.displayBooks = data; });
  }

}
