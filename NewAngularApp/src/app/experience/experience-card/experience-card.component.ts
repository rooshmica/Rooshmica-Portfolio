import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: any;
  @Output() viewRole = new EventEmitter<any>(); // Emits selected experience

  constructor() {}

  ngOnInit(): void {}

  toggleRole(): void {
    this.viewRole.emit(this.experience); // Send selected experience to parent
  }
}
