import { Component, computed, Input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

import {
  type ButtonSize,
  ButtonStyles,
  type ButtonType,
  type ButtonVariant,
} from '@yoyodyne/lectroids-common';

@Component({
  selector: 'button',
  standalone: true,
  imports: [],
  template: `<ng-content />`,
  host: {
    '[type]': 'type',
    '[class]': 'classes()',
  },
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';

  classes = computed(() => {
    // tailwind merge will clean up any conflicts
    return twMerge(ButtonStyles({ variant: this.variant, size: this.size }));
  });
}
