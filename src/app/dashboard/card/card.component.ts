import { Component, OnInit, Input } from '@angular/core';
import { SkillsService } from "../../skills.service"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
  }

  onLike(card: any){
    if(card){
      card['likes'] = Number(card['likes'])+1;
      this.skillsService.editClique(card).subscribe();
    }
  }


  onShare(card: any){
    // TODO: abrir o link do seu linkedin
  }

}
