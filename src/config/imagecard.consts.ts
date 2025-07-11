import { type ImageTextCardProps } from "../components/ImageTextCard.astro";
import Img from "../assets/blog-placeholder-1.jpg"


export const IMAGE_TEXT_CONTENT: ImageTextCardProps = {
  section_title: 'Lorem Ipsum Section',
  cards: [
    {
      image: Img,
      title: 'Lorem Ipsum Card 1',
      items: [
        '✅Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        '✅Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '✅Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        '✅Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        '✅Excepteur sint occaecat cupidatat non proident.',
        '✅Sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    {
      image: Img,
      title: 'Lorem Ipsum Card 2',
      items: [
        '✅Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        '✅Excepteur sint occaecat cupidatat non proident.',
        '✅Sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '✅Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        '✅Excepteur sint occaecat cupidatat non proident.',
        '✅Sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    {
      image: Img,
      title: 'Lorem Ipsum Card 3',
      items: [
        '✅Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
        '✅Nullam varius, turpis et commodo pharetra.',
        '✅Est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
        '✅Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        '✅Excepteur sint occaecat cupidatat non proident.',
        '✅Sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    {
      image: Img,
      title: 'Lorem Ipsum Card 4',
      items: [
        '✅Integer in mauris eu nibh euismod gravida.',
        '✅Duis ac tellus et risus vulputate vehicula.',
        '✅Donec lobortis risus a elit. Etiam tempor.',
        '✅Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        '✅Excepteur sint occaecat cupidatat non proident.',
        '✅Sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
  ],
};