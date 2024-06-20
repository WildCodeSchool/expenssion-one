import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rules-page',
  standalone: true,
  imports: [],
  templateUrl: './rules-page.component.html',
  styleUrl: './rules-page.component.scss'
})
export class RulesPageComponent {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string|null) => {
      this.scrollToSection(fragment!);
    });
  }

  scrollToSection(sectionId: string) {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView();
      }
    }
  }

}
