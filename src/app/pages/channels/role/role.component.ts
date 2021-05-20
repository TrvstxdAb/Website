import { Component, Input } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Lean } from 'src/app/types/entity-types';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  @Input() public active: boolean;
  @Input() public guild: Lean.Guild;
  @Input() public role: Lean.Role;

  constructor(
    public config: ConfigService,
    public dialog: DialogService,
  ) {}
}
