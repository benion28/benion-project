import { EducationService } from './services/education.service';
import { EntertainmentService } from './services/entertainment.service';
import { AdminModule } from './modules/admin/admin.module';
import { ContactsService } from './services/contacts.service';
import { HomeService } from './services/home.service';
import { DialogService } from './services/dialog.service';
import { NotificationsService } from './services/notifications.service';
import { DepartmentsService } from './services/departments.service';
import { environment } from './../environments/environment';
import { UserService } from './services/user.service';
import { MaterialsModule } from './modules/materials/materials.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgMarqueeModule } from 'ng-marquee';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TodosService } from './services/todos.service';
import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewsService } from './services/news.service';
import { TimeService } from './services/time.service';
import { SportsService } from './services/sports.service';
import { TopStoriesService } from './services/top-stories.service';
import { TechnologyService } from './services/technology.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    NgMarqueeModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    UserService,
    DepartmentsService,
    NotificationsService,
    DialogService,
    HomeService,
    ContactsService,
    TodosService,
    NewsService,
    TimeService,
    SportsService,
    EntertainmentService,
    EducationService,
    TopStoriesService,
    TechnologyService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent,
    NewUserComponent
  ]
})
export class AppModule { }
