import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [
    {
      name: "PROJECTS.STREAMING.NAME",
      tags: ["ANGULAR 14", "TYPESCRIPT", "SASS", "API"],
      about: "PROJECTS.STREAMING.ABOUT",
      url_browser:"https://streaming-platform-two.vercel.app/",
      url_github:"https://github.com/marianasocastro/streaming-platform/blob/main/README.md",
      image:"../../../assets/projects/streaming/capa_readme.png"
    },
    {
      name: "PROJECTS.POKEMON.NAME",
      tags: ["ANGULAR 16", "TAILWIND", "SASS", "API"],
      about: "PROJECTS.POKEMON.ABOUT",
      url_browser:"https://pokemon-deck-builder.vercel.app/",
      url_github:"https://github.com/marianasocastro/pokemon-deck-builder/blob/main/README.md",
      image:"../../../assets/projects/pokemon/homePage.png"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
