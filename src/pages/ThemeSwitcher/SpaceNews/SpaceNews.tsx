import React, { useCallback, useEffect, useState } from 'react';
import ColumnLayout from '../../../components/Layouts/ColumnLayout';
import BlockLayout from '../../../components/Layouts/BlockLayout';
import Headline from '../../../components/Text/Headline';
import Body from '../../../components/Text/Body';
import { Link } from '@mui/material';
import ImageVideo from '../../../components/ImageVideo';
import RowLayout from '../../../components/Layouts/RowLayout';

const SpaceNews = () => {
  const [data, setData] = useState<null | any[]>(null);
  const getData = useCallback(async () => {
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Fetch request completed.");
    }
  }, []);
  useEffect(() => {
     getData();
  }, [getData]);
  return (
    <ColumnLayout style={{ padding: '24px 32px 60px' }}>
        <Headline>Space News</Headline>
        <BlockLayout>
            {data && data.map((article) => (
                <ColumnLayout isCard key={article.id}>
                    {article.title && <Headline size={3}>{article.title}</Headline>}
                    {article.summary && <Body>{article.summary}</Body>}
                    <Link
                        href={article.url}
                        data-tip={'Read More'}
                        rel="noopener noreferrer"
                        target="_blank"
                        className='link'
                    >
                        Read More
                    </Link>
                    {article.image_url && (
                        <ImageVideo src={article.image_url} maxHeight="280px" height="280px" />
                    )}
                </ColumnLayout>
            ))}
        </BlockLayout>
    </ColumnLayout>
  );
};
export default SpaceNews;