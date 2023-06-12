import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Section from 'components/Section/Section';

const SharedLayout = () => {
  return (
    <>
      <Section>
        <Header />
        <Outlet />
      </Section>
    </>
  );
};

export default SharedLayout;
