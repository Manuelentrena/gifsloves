import React, { useState, useEffect } from "react";
import getTrends from "services/getTrends";
import Category from "components/Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrends().then((res) => setTrends(res));
  }, []);

  return <Category name="Tendencias" options={trends} />;
}
