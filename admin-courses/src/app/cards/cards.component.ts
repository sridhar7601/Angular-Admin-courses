import { Component ,OnInit} from '@angular/core';
import { environment } from '../../../environment';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private http:HttpClient, private router: Router){

}

courses:any=[];

ngOnInit(): void {
  this.refreshList()
  };
  refreshList(){
    // let no:number=0;
    this.http.get<any>(environment.API_URL+'courses').subscribe((data)=>{
      this.courses = data; // assign the received data to courses array
      console.log(data,"gg");
    });

}
coursedetails(id: number){
  this.router.navigate(['body']);
  localStorage.setItem('weekId', id.toString());
  console.log(id,'card')
}
}
