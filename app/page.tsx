"use client"

import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Portfolio from '../components/Portfolio';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && <Portfolio />}
    </>
  );
}