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


  topStories = [
    {
      $key: 'id1',
      $title: 'FIRST NEWS OF THE DAY',
      details: `
      Manatees have been found as far as 75 kilometres (47 mi) offshore, where there are shallow coastal flats and calm mangrove creeks filled with seagrass. Inland lakes where manatees dwell
      include Lake Volta, the Inner Niger River Delta in Mali, Lake Léré, and Lake de Tréné. Due to fluctuating flow rates and water levels in rivers, some of these permanent lakes serve as refuges for
      manatees in connecting rivers during the dry season. From north to south, the river systems that contain manatees include: the Senegal, Saloum, Gambia, Casamance, Cacheu, Mansôa, Geba,
      Buba, Tombali, Cacine, Kogon, Kondoure, Sierra Leone, Great Scarcies, Little Scarcies, Sherbro, Malem, Waanje, Sewa, Missunado, Cavalla, St. Paul, Morro, St. John, Bandama, Niouniourou,
      Sassandra, Comoé, Bia, Tano, Volta, Mono, Oueme, Niger, Mekrou, Benue, Cross, Katsena Ala, Bani, Akwayafe, Rio del Rey, Ngosso, Andokat, Mene, Munaya, Wouri, Sanaga, Faro, Chari,
      Bamaingui, Bahr-Kieta, Logoné, Mitémélé, Gabon, Ogoué, Lovanzi, Kouilou, Congo, Dande, Bengo, and Cuanza. Manatees move up these rivers until they are unable to proceed because of
      shallow waters or strong waterfalls.[1]
      The areas with the highest manatee populations are Guinea-Bissau, the lagoons of Côte d'Ivoire, the southern portions of the Niger River in Nigeria, the Sanaga River in Cameroon, the coastal
      lagoons in Gabon, and the lower parts of the Congo River. As part of a study completed in Côte d'Ivoire to assess where the majority of African manatees favor living, a sample of African
      manatees was radio-tagged and tracked. The tracking observed most of the sample in coastal lagoons, mangroves, and other herbaceous growths. They were also found in the grassy estuaries
      of big rivers with mangroves and in protected coastal spots with less than 3 metres (10 ft) of water containing both mangroves and marine macrophytes.[1]
      `,
      isView: true
    }
  ];

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

    this.technologyNews.technology.forEach(item => {
      item.isView = false;
    });
    this.educationNews.education.forEach(item => {
      item.isView = false;
    });
    this.topStoriesNews.topStories.forEach(item => {
      item.isView = false;
    });
    this.entertainmentNews.entertainment.forEach(item => {
      item.isView = false;
    });
    this.sportsNews.sports.forEach(item => {
      item.isView = false;
    });
  }

  onViewTopStoriesNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.topStoriesNews.topStories.forEach(item => {
        item.isView = true;
      });
      this.viewNews = true;
      this.viewTopStoriesNews = true;
    }
  }

  onCloseTopStoriesNews(news) {
    this.topStoriesNews.topStories.forEach(item => {
      item.isView = false;
    });
    this.viewNews = false;
    this.viewTopStoriesNews = false;
  }

  onViewEntertainmentNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.entertainmentNews.entertainment.forEach(item => {
        item.isView = true;
      });
      this.viewNews = true;
      this.viewEntertaimentNews = true;
    }
  }

  onCloseEntertainmentNews(news) {
    this.entertainmentNews.entertainment.forEach(item => {
      item.isView = false;
    });
    this.viewNews = false;
    this.viewEntertaimentNews = false;
  }

  onViewSportsNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.sportsNews.sports.forEach(item => {
        item.isView = true;
      });
      this.viewNews = true;
      this.viewSportNews = true;
    }
  }

  onCloseSportsNews(news) {
    this.sportsNews.sports.forEach(item => {
      item.isView = false;
    });
    this.viewNews = false;
    this.viewSportNews = false;
  }

  onViewEducationNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.educationNews.education.forEach(item => {
        item.isView = true;
      });
      this.viewNews = true;
      this.viewEducationNews = true;
    }
  }

  onCloseEducationNews(news) {
    this.educationNews.education.forEach(item => {
      item.isView = false;
    });
    this.viewNews = false;
    this.viewEducationNews = false;
  }

  onViewTechnologyNews(news) {
    if (this.viewNews) {
      this.checkView();
    } else {
      this.technologyNews.technology.forEach(item => {
        item.isView = true;
      });
      this.viewNews = true;
      this.viewTechnologyNews = true;
    }
  }

  onCloseTechnologyNews(news) {
    this.technologyNews.technology.forEach(item => {
      item.isView = false;
    });
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

      //     this.technologyNews.technology.forEach(item => {
      //       item.isView = false;
      //     });
      //     this.educationNews.education.forEach(item => {
      //       item.isView = false;
      //     });
      //     this.topStoriesNews.topStories.forEach(item => {
      //       item.isView = false;
      //     });
      //     this.entertainmentNews.entertainment.forEach(item => {
      //       item.isView = false;
      //     });
      //     this.sportsNews.sports.forEach(item => {
      //       item.isView = false;
      //     });
      //   }
      // });

      alert('A News Has Already Been Opened');
    }
  }

}
