import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent {
  motivationalQuotes = [
    {
      author: 'Vincent Van Gogh',
      quote:
        'Great things are done by a series of small things brought together.',
    },
    // { author: 'Anonymous', quote: 'Strive for progress, not perfection.' },
    // { author: 'Anonymous', quote: 'Dream big. Work hard. Stay focused.' },
    // {
    //   author: 'Anonymous',
    //   quote: 'Every line of code is a step closer to the future you imagine.',
    // },
    // {
    //   author: 'Jim Rohn',
    //   quote: 'Discipline is the bridge between goals and accomplishment.',
    // },
    // {
    //   author: 'Sam Levenson',
    //   quote: 'Don’t watch the clock. Do what it does. Keep going.',
    // },
    // {
    //   author: 'Anonymous',
    //   quote: 'One step at a time is all it takes to get you there.',
    // },
    // {
    //   author: 'Norman Vincent Peale',
    //   quote:
    //     "Shoot for the moon. Even if you miss, you'll land among the stars.",
    // },
    // { author: 'Anonymous', quote: 'You are made of stardust, act like it.' },
    // {
    //   author: 'Anonymous',
    //   quote: "The sky is not the limit—it's just the beginning.",
    // },
    // { author: 'Anonymous', quote: 'Among the stars, we find purpose.' },
    // {
    //   author: 'Theodore Roosevelt',
    //   quote: 'Keep your eyes on the stars and your feet on the ground.',
    // },
    // {
    //   author: 'Anonymous',
    //   quote: "Code like there's no bug, debug like there's no deadline.",
    // },
    // { author: 'Anonymous', quote: 'Your only limit is your logic.' },
    // {
    //   author: 'John Johnson',
    //   quote: 'First, solve the problem. Then, write the code.',
    // },
    // {
    //   author: 'Anonymous',
    //   quote:
    //     'Behind every successful product is a thousand lines of failed code.',
    // },
    // { author: 'Anonymous', quote: 'Think twice, code once.' },
  ];
}
