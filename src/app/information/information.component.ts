import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public title = "Fah ja";
  public id!: number;
  public sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });
  }


}
