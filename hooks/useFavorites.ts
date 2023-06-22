import React, { useEffect, useState } from "react";
import { Photo } from "@/interfaces/photo.interface";
import { isFavoriteItem, toggleFavoriteItem } from "@/utils/local-storage";

export const useFavorites = (photo: Photo) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleFavoriteItem(photo, !isFavorite);
  };

  useEffect(() => {
    setIsFavorite(isFavoriteItem(photo?.id));
  }, [photo]);

  return {
    isFavorite,
    handleFavorite,
  };
};
