import type { NextPage } from 'next';
import { useState } from 'react';

import { NewsTable } from '@/components/NewsTable';
import { TabBar } from '@/components/TabBar';
import { DEFAULT_CATEGORY } from '@/utils/utils';

import styles from '@/styles/Top.module.css';
import { CustomLayout } from '@/components/CustomLayout';

export { Top as default };

const Top: NextPage = () => {
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  return (
    <>
      <CustomLayout>
        <TabBar category={category} setCategory={setCategory} />
        <NewsTable category={category} />
      </CustomLayout>
    </>
  );
};
