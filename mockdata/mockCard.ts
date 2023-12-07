import avatarIcon from '../assets/avatar.png'
import thumb from '../assets/thumb.png'

type ItemData = {
  id: number;
  name: string;
  avatar: any;
  thumb: string;
  movie: {
    title: string;
    year: number;
  };
  description: string;
 };

export const DATA: ItemData[] = [
  {
    id: 1,
    name: 'Jon Doe',
    avatar: avatarIcon,
    thumb: thumb,
    movie: {
      title: 'Ilha do Medo',
      year: 1920
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...ver mais`,
  },
  {
    id: 2,
    name: 'Andre Bertelli',
    avatar: avatarIcon,
    thumb: thumb,
    movie: {
      title: 'Vingadores',
      year: 1920
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...ver mais`,
  },
  {
    id: 3,
    name: 'Enzo Maitan',
    avatar: avatarIcon,
    thumb: thumb,
    movie: {
      title: '50 tons de cinza',
      year: 1920
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...ver mais`,
  },
]