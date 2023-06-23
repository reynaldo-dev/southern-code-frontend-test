import React, { useEffect, useState } from "react";
import { Photo } from "@/interfaces/photo.interface";
import { isFavoriteItem, toggleFavoriteItem } from "@/utils/local-storage";

interface IUseFavorites {
  photo?: Photo;
}

export const useFavorites = ({ photo }: IUseFavorites) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Photo[]>([]);

  useEffect(() => {
    setIsFavorite(isFavoriteItem(photo?.id));
  }, [photo]);

  const reloadFavorites = () => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleFavoriteItem(photo as Photo, !isFavorite);
  };

  return {
    isFavorite,
    handleFavorite,
    favorites,
    reloadFavorites,
  };
};
