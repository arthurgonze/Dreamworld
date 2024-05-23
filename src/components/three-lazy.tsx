import React, { useState, useEffect, Suspense, lazy } from 'react';

const HomePageCanvas = lazy(() => import('./home-page-canvas'));

const ThreeLazy = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {setIsMounted(true);}, []);

  return (
    <div>
        {!isMounted ? null : (
            <Suspense fallback={null}>
                <HomePageCanvas />
            </Suspense>
        )}
    </div>
  );
};

export default ThreeLazy;