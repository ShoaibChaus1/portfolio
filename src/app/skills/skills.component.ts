import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {

  ngAfterViewInit() {
    anime({
      targets: '#java',
      width: '97%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });


    anime({
      targets: '#servlet',
      width: '90%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });

    anime({
      targets: '#jsp',
      width: '80%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });

    anime({
      targets: '#html',
      width: '95%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });

    anime({
      targets: '#js',
      width: '80%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });

    anime({
      targets: '#oracle',
      width: '85%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });

    anime({
      targets: '#angular',
      width: '89%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });

    anime({
      targets: '#bootstrap',
      width: '82%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });

    anime({
      targets: '#selenium',
      width: '75%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });

    anime({
      targets: '#jdbc',
      width: '98%', // Desired width at completion
      easing: 'linear',
      duration: 3000, // Total animation duration
      loop: false // If you want the animation to loop
    });
  }

}
