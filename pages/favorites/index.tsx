import React, { useLayoutEffect, useState } from "react";
import { NavBar } from "@/components/app/navBar/NavBar";
import { FavoritesGrid } from "@/components/favorites/grid/FavoritesGrid";
import { MainLayout } from "@/components/layout/MainLayout";
import { Photo } from "@/interfaces/photo.interface";
import { getFavorites } from "@/utils/local-storage";
import { paths } from "@/paths";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<Photo[]>([]);

  useLayoutEffect(() => {
    setFavorites(getFavorites());
  }, []);
  return (
    <div>
      <NavBar route={{ label: "Rovers Photos", path: `${paths.photos}` }} />
      <FavoritesGrid photos={favorites} />
    </div>
  );
};

export default FavoritesScreen;

FavoritesScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Favorites">{page}</MainLayout>;
};
