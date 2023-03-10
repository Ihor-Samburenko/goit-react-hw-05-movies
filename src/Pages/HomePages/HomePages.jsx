import scss from '../HomePages/home-page.module.scss';

import Trending from 'components/Trending/Trending';

const HomePage = () => {
  return (
    <div>
      <h2 className={scss.title}>Trending today</h2>
      <Trending />
    </div>
  );
};

export default HomePage;
