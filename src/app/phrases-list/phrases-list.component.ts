import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PHRASES } from '../shared/mock-data';
import { Phrase } from '../shared/phrase';
import { PhrasesService } from '../shared/phrases.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[]

  constructor(private phrasesSerice: PhrasesService, private router: Router) {

   }

  ngOnInit(): void {
   this.phrasesSerice
   .getAllPhrases()
   .then(res => this.phrases = res)
  }

  onSelect(phrase: Phrase): void {
this.router.navigate(['phrase', phrase.id]).then
  }

}
