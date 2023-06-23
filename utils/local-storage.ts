"use client";

import { Photo } from "@/interfaces/photo.interface";
export const isFavoriteItem = (id: number = 0) => {
  const storage: Photo[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return storage.some((item) => item.id === id);
};

export const toggleFavoriteItem = (item: Photo, isFavorite: boolean) => {
  const storage: Photo[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (isFavorite) {
    const newStorage = [...storage, item];
    localStorage.setItem("favorites", JSON.stringify(newStorage));
  } else {
    const index = storage.findIndex((i) => i.id === item.id);
    storage.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(storage));
  }
};

export const getFavorites = () => {
  const storage: Photo[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return storage;
};
