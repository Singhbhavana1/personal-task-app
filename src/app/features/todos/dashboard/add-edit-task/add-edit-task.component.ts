import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss'],
})
export class AddEditTaskComponent {
  // taskForm: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
  //   public dialogRef: MatDialogRef<AddEditTaskComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {
  //   this.taskForm = this.fb.group({
  //     name: [data?.name || '', Validators.required],
  //     createDate: [data?.createDate || '', Validators.required],
  //     finishDate: [data?.finishDate || '', Validators.required],
  //     priority: [data?.priority || 'Medium', Validators.required],
  //     startNow: [data?.startNow || false],
  //     addNotes: [data?.addNotes || false],
  //   });
  // }

  // onSubmit(): void {
  //   if (this.taskForm.valid) {
  //     this.dialogRef.close(this.taskForm.value);
  //   }
  // }
  // task = {
  //   name: '',
  //   createDate: '',
  //   finishDate: '',
  //   status: 'Pending',
  // };

  // onCancel(): void {
  //   this.dialogRef.close();
  // }
  subtasks: string[] = ['', ''];

  addSubtask() {
    this.subtasks.push('');
  }

  removeSubtask(index: number) {
    this.subtasks.splice(index, 1);
  }
}
