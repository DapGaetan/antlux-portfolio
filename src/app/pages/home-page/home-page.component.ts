import { Component } from '@angular/core';
import { NavLeftComponent } from '../../nav-left/nav-left.component';
import { NavTopComponent } from '../../nav-top/nav-top.component';
import { AboutMeComponent } from '../../about-me/about-me.component';
import { AchievementsComponent } from '../../achievements/achievements.component';
import { SkillsComponent } from '../../skills/skills.component';
import { CareerComponent } from '../../career/career.component';
import { FooterComponent } from '../../footer/footer.component';



@Component({
  selector: 'app-home-page',
  imports: [CareerComponent, SkillsComponent, AchievementsComponent, AboutMeComponent, NavTopComponent, NavLeftComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
