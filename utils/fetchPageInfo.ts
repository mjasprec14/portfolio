import { PageInfo } from '@/typings';

const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  console.log('fetching PageInfo...', pageInfo);

  return pageInfo;
};

export default fetchPageInfo;
