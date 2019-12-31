import { TechnologyService } from './../../services/technology.service';
import { SportsService } from './../../services/sports.service';
import { TopStoriesService } from './../../services/top-stories.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';
import { fadeAnimation } from 'src/app/fade-animations';
import { EntertainmentService } from 'src/app/services/entertainment.service';
import { EducationService } from 'src/app/services/education.service';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class HomepageComponent implements OnInit {

  marquee =  `Hello, You Are Welcomed To Benion World Of Creativiy,
A Home For All Your Entertainment, Sport Updates,
Technological Discoveries And An Excellent Medium For Education And Research !!....`;

  constructor(
    private topStoriesNews: TopStoriesService,
    private entertainmentNews: EntertainmentService,
    private sportsNews: SportsService,
    private educationNews: EducationService,
    private technologyNews: TechnologyService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.topStoriesNews.getTopStories();
    this.entertainmentNews.getEntertainment();
    this.sportsNews.getSports();
    this.educationNews.getEducation();
    this.technologyNews.getTechnology();
  }

}
