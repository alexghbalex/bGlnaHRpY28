import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../models';
import { CreateEditNoteComponent } from '../create-edit-note/create-edit-note.component';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note: Note;
  @Output() delete = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private notesService: NotesService) {
  }

  del(): void {
    this.delete.next();
  }

  view(): void {
    this.dialog.open(CreateEditNoteComponent, {
      width: '300px',
      data: {...this.note}
    }).afterClosed().subscribe(() => this.note = this.notesService.getNote(this.note.id));
  }
}
