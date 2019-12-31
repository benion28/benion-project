import { Injectable } from '@angular/core';
import { TopStoriesService } from './top-stories.service';
import { EntertainmentService } from './entertainment.service';
import { SportsService } from './sports.service';
import { EducationService } from './education.service';
import { TechnologyService } from './technology.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  topStories = [];
  sports = [];
  entertainment = [];
  education = [];
  technology = [];

  constructor(
    private topStoriesNews: TopStoriesService,
    private entertainmentNews: EntertainmentService,
    private sportsNews: SportsService,
    private educationNews: EducationService,
    private technologyNews: TechnologyService
  ) {
    this.topStories = this.topStoriesNews.topStories.reverse();
    this.sports = this.sportsNews.sports.reverse();
    this.entertainment = this.entertainmentNews.entertainment.reverse();
    this.education = this.educationNews.education.reverse();
    this.technology = this.technologyNews.technology.reverse();
  }

}
