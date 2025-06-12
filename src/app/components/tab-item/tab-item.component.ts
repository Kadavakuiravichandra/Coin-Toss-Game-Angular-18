import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../model/project-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.css',
})
export class TabItemComponent {
  @Input() tabItem!: Project;
  @Input() activeTab!: string;
  @Output() selectedTab = new EventEmitter<Project>();

  sendTabDetails(id: Project): void {
    this.selectedTab.emit(id);
  }
}
