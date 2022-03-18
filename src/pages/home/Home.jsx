import React from 'react';
import Filter from '../../components/filter/Filter';
import StickyHeadTable from '../../components/table/Table';
import "./Home.scss"
function Home() {
  return (
    <>
      <div className="home">
        <Filter/>
        <StickyHeadTable/>
      </div>
    </>
  )
}

export default Home