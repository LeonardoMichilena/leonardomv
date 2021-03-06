import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SlideshowComponent,
    CurriculumComponent,
    PortfolioComponent,
    ContactComponent,
    DataProtectionComponent,
    ImprintComponent,
    CvSectionComponent,
    PersonalInfoComponent,
    CvCardComponent,
    PortfolioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
