import { useState, useEffect } from 'react';

import { get_news } from '@/utils/api';
import { Response } from '@/interfaces/Response';

import styles from './styles/News.module.css';

export const NewsTable = (props: { category: string }) => {
  const [news, setNews] = useState<Response | undefined>(undefined);
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    (async () => {
      const { data } = await get_news(props.category);
      setNews(data);
    })();
    return () => {
      setInitialLoad(false);
    };
  }, [initialLoad,props.category]);
  return (
    <>
      {news &&
        news.articles.map((item) => {
          return (
            <>
              <div className={styles.news_wrapper}>
                <div>
                  <p className={styles.news_company}>{item.source.name}</p>
                  <p className={styles.news_title}>{item.title}</p>
                </div>
                <img className={styles.news_thumnail} src={item.urlToImage} />
              </div>
            </>
          );
        })}
    </>
  );
};
