import { Component,OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { environment } from '../../../environment';

@Component({
  selector: 'app-bodyofcoursecontent',
  templateUrl: './bodyofcoursecontent.component.html',
  styleUrls: ['./bodyofcoursecontent.component.css']
})
export class BodyofcoursecontentComponent {
  // id!: number;
  content:any=[];
  courseId:any = 1;
  // i:number;
  constructor(private http: HttpClient ,private router: Router) {}

  ngOnInit(): void {

    // Use the courseId as needed
    this.refreshList(this.courseId)
  }
  refreshList(courseId:any) {
    this.courseId = Number(localStorage.getItem('Id'));

    this.http.get<any>(environment.API_URL + `weeks/${this.courseId}/subtopics`).subscribe((data:any) => {
        this.content = data;
        // this.i=length(data)
        console.log(data.length,"boc");
        this.router.navigate(['body/bodyofcoursecontent']);
    });
}

}
