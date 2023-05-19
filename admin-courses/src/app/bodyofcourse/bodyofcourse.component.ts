import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { environment } from '../../../environment';
@Component({
  selector: 'app-bodyofcourse',
  templateUrl: './bodyofcourse.component.html',
  styleUrls: ['./bodyofcourse.component.css']
})
export class BodyofcourseComponent {


  constructor(private http:HttpClient, private route: ActivatedRoute, private router: Router){

  }
  id:number = 0;
  user:any;
  ngOnInit(): void {
    this.id = Number(localStorage.getItem('weekId'));

    this.refreshList(this.id)
    }
    refreshList(id:number){
      // let no:number=0;
      // this.id = this.route.snapshot.params['id'];
      this.http.get<any>(environment.API_URL +`courses/${this.id}/weeks`).subscribe((data) => {
        this.user = data; // assign the received data to courses array
        console.log(data);
      });

  }
  courseid(id:number){
    localStorage.setItem('Id', id.toString());
    this.router.navigate(['bodyofcoursecontent']);
    console.log('triggered',id)
  }


}
