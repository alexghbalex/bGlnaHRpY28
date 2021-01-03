import { Component, OnInit } from '@angular/core';
import { Note } from '../../models';
import { NotesService } from '../../services/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditNoteComponent } from '../create-edit-note/create-edit-note.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(private notesService: NotesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }

  addNote(): void {
    this.dialog.open(CreateEditNoteComponent, {
      width: '300px',
      data: {}
    }).afterClosed().subscribe(() => this.notes = this.notesService.getNotes());
  }

  deleteNote(id: string): void {
    this.notesService.deleteNote(id);
    this.notes = this.notesService.getNotes();
  }
}
