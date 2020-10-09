import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  {path: '', component: SlideshowComponent},
  {path: 'slideshow', component: SlideshowComponent},
  {path: 'cv-section', component: CvSectionComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'data-protection', component: DataProtectionComponent},
  {path: 'imprint', component: ImprintComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
