import React, { Suspense } from "react";
import { useLocation } from "wouter";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const [location] = useLocation();
  const { isNearScreen, fromRef } = useNearScreen();

  return location !== "/login" && location !== "/register" ? (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  ) : null;
}
