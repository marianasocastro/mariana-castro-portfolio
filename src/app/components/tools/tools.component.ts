import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {


  tools: {toolName: string, image: string}[] = [
    {toolName: "Angular",
      image: "../../../assets/tools/angular.png"
    },
    {toolName: "Typescript",
      image: "../../../assets/tools/typescript.png"
    },
    {toolName: "Javascript",
      image: "../../../assets/tools/javascript.png"
    },
    {toolName: "Node.js",
      image: "../../../assets/tools/node.png"
    },
    {toolName: "HTML",
      image: "../../../assets/tools/html.png"
    },
    {toolName: "CSS",
      image: "../../../assets/tools/css.png"
    },
    {toolName: "SASS",
      image: "../../../assets/tools/sass.png"
    },
    {toolName: "Bootstrap",
      image: "../../../assets/tools/bootstrap.png"
    },
    {toolName: "Tailwind",
      image: "../../../assets/tools/tailwind.png"
    },
    {toolName: "Figma",
      image: "../../../assets/tools/figma.png"
    },
    {toolName: "Git",
      image: "../../../assets/tools/git.png"
    },
    {toolName: "Wordpress",
      image: "../../../assets/tools/wordpress.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
