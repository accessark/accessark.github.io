import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterSetService } from 'src/app/gba/services/character-set.service';
import { PendingChange, GbaService } from 'src/app/gba/services/gba.service';

@Component({
  selector: 'app-save-dialog-gba',
  templateUrl: './save-dialog-gba.component.html',
  styleUrls: ['./save-dialog-gba.component.css']
})
export class SaveDialogGbaComponent implements OnInit {

  constructor(private dialog: MatDialog, public gbaService: GbaService,
    public characterSetService: CharacterSetService) { }

  ngOnInit(): void {
  }

  public save() {
    this.gbaService.save();
    this.close();
  }

  public close() {
    this.dialog.closeAll();
  }

  public undoChange(change: PendingChange) {
    this.gbaService.pendingChanges.delete(change.key);

    if (this.gbaService.pendingChanges.size == 0) {
      this.close();
    }
  }
}
