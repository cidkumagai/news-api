import { CATEGORIES, TAB_MENU } from '@/utils/utils';

import styles from './styles/TabBar.module.css';

export const TabBar = (props: {category:string, setCategory(value: string): void }) => {
  return (
    <>
      <div className={styles.tab}>
        {CATEGORIES.map((item) => {
          return <p className={styles.tab_item}
          style={{backgroundColor: item === props.category ?'#f89595' :'#c7c0c0' }}
            onClick={() => props.setCategory(item)}>{TAB_MENU[item].name}</p>;
        })}
      </div>
    </>
  );
};
