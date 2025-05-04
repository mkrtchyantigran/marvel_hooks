import { lazy, Suspense } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";	


import AppHeader from "../appHeader/AppHeader";

const MainPage = lazy(() => import("../../pages/MainPage"));
const ComicsPage = lazy(() => import("../../pages/ComicsPage"));
const SinglePage = lazy(() => import("../../pages/SinglePage"));
const SingleCharacterLayout = lazy(() => import("../../pages/Layouts/SingleCharacterLayout/singleCharacterLayout"));
const SingleComicLayout = lazy(() => import("../../pages/Layouts/SingleComicLayout/SingleComicLayout"));
const Page404 = lazy(() => import("../../pages/404"));






export default function App () {


  return (
    <div className="app">
    <BrowserRouter >
      <AppHeader /> 
        <main>
          <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
                <Route path="/comics/" element={<ComicsPage /> } />

                  <Route path="/comics/:id" element={ <SinglePage component={SingleComicLayout} DataType="comic" />} />
                  <Route path="/characters/:id" element={<SinglePage component={SingleCharacterLayout} DataType="character" />} />
                  
                <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main> 
    </BrowserRouter>
    </div>
  );
}