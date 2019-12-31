import { DialogService } from './../../services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';
import { fadeAnimation } from 'src/app/fade-animations';
import { TopStoriesService } from 'src/app/services/top-stories.service';
import { EntertainmentService } from 'src/app/services/entertainment.service';
import { SportsService } from 'src/app/services/sports.service';
import { EducationService } from 'src/app/services/education.service';
import { TechnologyService } from 'src/app/services/technology.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AdminNewsComponent implements OnInit {

  constructor(
    private topStoriesNews: TopStoriesService,
    private entertainmentNews: EntertainmentService,
    private sportsNews: SportsService,
    private educationNews: EducationService,
    private technologyNews: TechnologyService,
    private notificationsService: NotificationsService,
    private dialogService: DialogService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.topStoriesNews.getTopStories();
    this.entertainmentNews.getEntertainment();
    this.sportsNews.getSports();
    this.educationNews.getEducation();
    this.technologyNews.getTechnology();
  }

  onSubmitTopStories() {
    if (this.topStoriesNews.topStoriesForm.valid) {
        if (!this.topStoriesNews.topStoriesForm.get('$key').value) {
          this.topStoriesNews.insertTopStories(this.topStoriesNews.topStoriesForm.value);
          this.topStoriesNews.topStoriesForm.reset();
          this.topStoriesNews.initializeFormGroupTopStories();
          this.notificationsService.success(':: Has Been Submitted Successfully ::');
        } else {
          this.topStoriesNews.updateTopStories(this.topStoriesNews.topStoriesForm.value);
          this.topStoriesNews.topStoriesForm.reset();
          this.topStoriesNews.initializeFormGroupTopStories();
          this.notificationsService.success(':: Has Been Updated Successfully ::');
        }
      }
    }

  onEditTopStories(news) {
    this.topStoriesNews.populateTopStoriesForm(news);
  }

  onDeleteTopStories($key) {
    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(response => {
      if (response) {
        this.topStoriesNews.deleteTopStories($key);
        this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
      }
    });
  }


  onSubmitSports() {
    if (this.sportsNews.sportsForm.valid) {
        if (!this.sportsNews.sportsForm.get('$key').value) {
          this.sportsNews.insertSports(this.sportsNews.sportsForm.value);
          this.sportsNews.sportsForm.reset();
          this.sportsNews.initializeFormGroupSports();
          this.notificationsService.success(':: Has Been Submitted Successfully ::');
        } else {
          this.sportsNews.updateSports(this.sportsNews.sportsForm.value);
          this.sportsNews.sportsForm.reset();
          this.sportsNews.initializeFormGroupSports();
          this.notificationsService.success(':: Has Been Updated Successfully ::');
        }
      }
    }

  onEditSports(news) {
    this.sportsNews.populateSportsForm(news);
  }

  onDeleteSports($key) {
    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(response => {
      if (response) {
        this.sportsNews.deleteSports($key);
        this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
      }
    });
  }


  onSubmitEntertainment() {
    if (this.entertainmentNews.entertainmentForm.valid) {
        if (!this.entertainmentNews.entertainmentForm.get('$key').value) {
          this.entertainmentNews.insertEntertainment(this.entertainmentNews.entertainmentForm.value);
          this.entertainmentNews.entertainmentForm.reset();
          this.entertainmentNews.initializeFormGroupEntertainment();
          this.notificationsService.success(':: Has Been Submitted Successfully ::');
        } else {
          this.entertainmentNews.updateEntertainment(this.entertainmentNews.entertainmentForm.value);
          this.entertainmentNews.entertainmentForm.reset();
          this.entertainmentNews.initializeFormGroupEntertainment();
          this.notificationsService.success(':: Has Been Updated Successfully ::');
        }
      }
    }

  onEditEntertainment(news) {
    this.entertainmentNews.populateEntertainmentForm(news);
  }

  onDeleteEntertainment($key) {
    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(response => {
      if (response) {
        this.entertainmentNews.deleteEntertainment($key);
        this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
      }
    });
  }


  onSubmitEducation() {
    if (this.educationNews.educationForm.valid) {
        if (!this.educationNews.educationForm.get('$key').value) {
          this.educationNews.insertEducation(this.educationNews.educationForm.value);
          this.educationNews.educationForm.reset();
          this.educationNews.initializeFormGroupEducation();
          this.notificationsService.success(':: Has Been Submitted Successfully ::');
        } else {
          this.educationNews.updateEducation(this.educationNews.educationForm.value);
          this.educationNews.educationForm.reset();
          this.educationNews.initializeFormGroupEducation();
          this.notificationsService.success(':: Has Been Updated Successfully ::');
        }
      }
    }

  onEditEducation(news) {
    this.educationNews.populateEducationForm(news);
  }

  onDeleteEducation($key) {
    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(response => {
      if (response) {
        this.educationNews.deleteEducation($key);
        this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
      }
    });
  }


  onSubmitTechnology() {
    if (this.technologyNews.technologyForm.valid) {
        if (!this.technologyNews.technologyForm.get('$key').value) {
          this.technologyNews.insertTechnology(this.technologyNews.technologyForm.value);
          this.technologyNews.technologyForm.reset();
          this.technologyNews.initializeFormGroupTechnology();
          this.notificationsService.success(':: Has Been Submitted Successfully ::');
        } else {
          this.technologyNews.updateTechnology(this.technologyNews.technologyForm.value);
          this.technologyNews.technologyForm.reset();
          this.technologyNews.initializeFormGroupTechnology();
          this.notificationsService.success(':: Has Been Updated Successfully ::');
        }
      }
    }

  onEditTechnology(news) {
    this.technologyNews.populateTechnologyForm(news);
  }

  onDeleteTechnology($key) {
    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(response => {
      if (response) {
        this.technologyNews.deleteTechnology($key);
        this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
      }
    });
  }
}
