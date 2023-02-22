import axios from 'axios';

import { Response } from '@/interfaces/Response';

export async function get_news(category: string) {
  const dateTime = new Date();
  const today = `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()}`;
  const { data } = await axios.get<Response>(
    `https://newsapi.org/v2/top-headlines?country=jp&category=${category}&from=${today}`,
    {
      headers: {
        'X-Api-Key': '8ccb3cf659544264babab821cc9dcd0c',
      },
    },
  );
  return { data };
}
