import React, { useEffect } from "react";

import { NavBar } from "@/components/app/navBar/NavBar";
import { FavoritesGrid } from "@/components/favorites/grid/FavoritesGrid";
import { MainLayout } from "@/components/layout/MainLayout";
import { paths } from "@/paths";
import { useFavorites } from "@/hooks/useFavorites";
import { Photo } from "@/interfaces/photo.interface";
import { ReloadButton } from "@/components/favorites/reload-button/ReloadButton";

const FavoritesScreen = () => {
  const { favorites, reloadFavorites } = useFavorites({});

  const handleUpdateFavorites = () => {
    reloadFavorites();
  };
  useEffect(() => {
    reloadFavorites();
  }, []);

  return (
    <div>
      <NavBar route={{ label: "Rovers Photos", path: `${paths.photos}` }} />
      {favorites?.length > 0 && (
        <ReloadButton handleUpdateFavorites={handleUpdateFavorites} />
      )}

      <FavoritesGrid photos={favorites as Photo[]} />
    </div>
  );
};

export default FavoritesScreen;

FavoritesScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout title="Favorites">{page}</MainLayout>;
};
