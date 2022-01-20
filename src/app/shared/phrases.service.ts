import { Injectable } from '@angular/core';
import { PHRASES } from './mock-data';
import { Phrase } from './phrase';

const phrasesPromice = Promise.resolve(PHRASES);

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  getAllPhrases(): Promise<Phrase[]>{
     return phrasesPromice
  }

  getPhrase(id:number): Promise<Phrase | undefined> {
    return phrasesPromice.then(phrases => phrases.find((Phrase) => Phrase.id === id))
  }

}
