import { PageInfo } from '@/typings';
import axios from 'axios';

const fetchPageInfo = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    const pageInfo: PageInfo = response.data.pageInfo;

    // console.log('fetching PageInfo...', pageInfo);
    return pageInfo;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data for PageInfo');
  }
};

export default fetchPageInfo;
