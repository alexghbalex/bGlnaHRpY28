import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-note',
  templateUrl: './create-edit-note.component.html',
  styleUrls: ['./create-edit-note.component.scss']
})
export class CreateEditNoteComponent implements OnInit {
  isEdit: boolean;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  constructor(private notesService: NotesService,
              public dialogRef: MatDialogRef<CreateEditNoteComponent>,
              @Inject(MAT_DIALOG_DATA) public note: Note) {
  }

  ngOnInit(): void {
    this.isEdit = this.note && !!Object.keys(this.note).length;

    if (this.isEdit) {
      this.form.get('name').setValue(this.note.name);
      this.form.get('content').setValue(this.note.content);
    }
  }

  addNote(): void {
    this.notesService.addNote(this.form.value);
    this.dialogRef.close();
  }

  editNote(): void {
    this.notesService.editNote(Object.assign(this.note, this.form.value));
    this.dialogRef.close();
  }
}
