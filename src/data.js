import { v4 as uuidv4 } from 'uuid';

const chillHop = () => {
  return [
    {
      name: 'Beaver Creek',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Daylight',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Keep Going',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Nightfall',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Reflection',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Under the City Stars',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Like This',
      cover: 'https://i.scdn.co/image/ab67616d0000b2733055a0a3763c99f9557e4029',
      artist: 'weird inside',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21756',
      color: ['#8aa4b0', '#d54949'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Vitamin D',
      cover: 'https://i.scdn.co/image/ab67616d0000b273143118dd9f488d42f78da13c',
      artist: 'fantompower',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22790',
      color: ['#cfe1e1', '#bf85c3'],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default chillHop;
