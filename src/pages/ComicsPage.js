import React from 'react'

import ComicsList from "../components/comicsList/ComicsList"
import AppBanner from "../components/appBanner/AppBanner";
import { Helmet } from 'react-helmet';

export default  function ComicsPage() {
  return (
    <>
        <Helmet>
         
          <ComicsList />
        </Helmet>
    </>
  )
}


