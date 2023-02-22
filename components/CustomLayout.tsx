import { ReactNode } from 'react';

import styles from './styles/CustomLayout.module.css';

export const CustomLayout = (props: { children: ReactNode }) => {
  return <div className={styles.custom_layout}>{props.children}</div>;
};
