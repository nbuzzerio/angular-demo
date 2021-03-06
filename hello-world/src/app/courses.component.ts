import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //references css selectors --> <course> = "courses" | <dive class=courses> = ".courses" | <div id=courses> = "#courses"
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
    //prefix Directuves with an *
    //use ngFor to create attributes
})
export class CoursesComponent {
    title = "List of Courses";

    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}