import { PageInfo } from '@/typings';
import { assetPrefix } from '../next.config';

const fetchPageInfo = async () => {
  try {
    console.log('assetPrefix', assetPrefix);
    const res = await fetch(`${assetPrefix}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    // console.log('fetching PageInfo...', pageInfo);
    return pageInfo;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data for PageInfo');
  }
};

export default fetchPageInfo;
