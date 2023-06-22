import React from "react";
import { Photo } from "@/interfaces/photo.interface";

interface IUseLocalStorageProps {
  photo: Photo;
}

export const useLocalStorage = ({ photo }: IUseLocalStorageProps) => {
  const isFavoriteItem = () => {
    const storage: Photo[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    return storage.some((item) => item.id === photo.id);
  };

  const toggleFavoriteItem = () => {
    const storage: Photo[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (!isFavoriteItem()) {
      const newStorage = [...storage, photo];
      localStorage.setItem("favorites", JSON.stringify(newStorage));
    } else {
      const index = storage.findIndex((i) => i.id === photo.id);
      storage.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(storage));
    }
  };

  const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  };

  return {
    isFavoriteItem,
    toggleFavoriteItem,
    getFavorites,
  };
};
