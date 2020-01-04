import { DialogService } from 'src/app/services/dialog.service';
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

  viewNews = false;
  viewTopStoriesNews = false;
  viewSportNews = false;
  viewEntertaimentNews = false;
  viewEducationNews = false;
  viewTechnologyNews = false;


  marquee =  `Hello, You Are Welcomed To Benion World Of Creativiy,
A Home For All Your Entertainment, Sport Updates,
Technological Discoveries And An Excellent Medium For Education And Research !!....`;

  constructor(
    private topStoriesNews: TopStoriesService,
    private entertainmentNews: EntertainmentService,
    private sportsNews: SportsService,
    private educationNews: EducationService,
    private technologyNews: TechnologyService,
    private newsService: NewsService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.topStoriesNews.getTopStories();
    this.entertainmentNews.getEntertainment();
    this.sportsNews.getSports();
    this.educationNews.getEducation();
    this.technologyNews.getTechnology();
  }

  onViewTopStoriesNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.topStoriesNews.updateTopStoriesView(news);
      this.viewNews = true;
      this.viewTopStoriesNews = true;
    }
  }

  onCloseTopStoriesNews(news) {
    this.topStoriesNews.updateTopStoriesClose(news);
    this.viewNews = false;
    this.viewTopStoriesNews = false;
  }

  onViewEntertainmentNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.entertainmentNews.updateEntertainmentView(news);
      this.viewNews = true;
      this.viewEntertaimentNews = true;
    }
  }

  onCloseEntertainmentNews(news) {
    this.entertainmentNews.updateEntertainmentClose(news);
    this.viewNews = false;
    this.viewEntertaimentNews = false;
  }

  onViewSportsNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.sportsNews.updateSportsView(news);
      this.viewNews = true;
      this.viewSportNews = true;
    }
  }

  onCloseSportsNews(news) {
    this.sportsNews.updateSportsClose(news);
    this.viewNews = false;
    this.viewSportNews = false;
  }

  onViewEducationNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.educationNews.updateEducationView(news);
      this.viewNews = true;
      this.viewEducationNews = true;
    }
  }

  onCloseEducationNews(news) {
    this.educationNews.updateEducationClose(news);
    this.viewNews = false;
    this.viewEducationNews = false;
  }

  onViewTechnologyNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.technologyNews.updateTechnologyView(news);
      this.viewNews = true;
      this.viewTechnologyNews = true;
    }
  }

  onCloseTechnologyNews(news) {
    this.technologyNews.updateTechnologyClose(news);
    this.viewNews = false;
    this.viewTechnologyNews = false;
  }

  checkView() {
    if (this.viewNews) {
      // this.dialogService.openConfirmDialog('A News Has Already Been Opened, Do Yo Want To Close It ?').afterClosed().subscribe(
      //   response => {
      //   if (response) {
      //     this.viewNews = false;
      //     this.viewTopStoriesNews = false;
      //     this.viewSportNews = false;
      //     this.viewEntertaimentNews = false;
      //     this.viewEducationNews = false;
      //     this.viewTechnologyNews = false;
      //   }
      // });

      alert('A News Has Already Been Opened');
    }
  }

}
