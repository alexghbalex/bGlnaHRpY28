import { Injectable } from '@angular/core';
import { Note, Notes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Notes;

  getNotes(): Note[] {
    this.notes = JSON.parse(localStorage.getItem('notes')) || {};
    if (this.notes) {
      return Object.keys(this.notes)
        .map(note => this.notes[note])
        .sort((note1: Note, note2: Note) => new Date(note1.date).getTime() - new Date(note2.date).getTime());
    } else {
      return [];
    }
  }

  getNote(id: string): Note {
    return this.notes[id];
  }

  addNote(note: Partial<Note>): void {
    note.date = new Date();
    note.id = note.name + note.date.getTime();
    this.notes[note.id] = note as Note;
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  deleteNote(id: string): void {
    delete this.notes[id];
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  editNote(note: Note): void {
    this.notes[note.id] = note;
  }
}
