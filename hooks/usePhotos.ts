import React, { useState, useEffect, useRef } from "react";

import { Photo } from "@/interfaces/photo.interface";

interface IUsePhotosProps {
  rover: string;
  camera: string;
  sol: number;
  page: number;
  earth_date: string;
}

const baseURL =
  process.env.API_BASE_URL || "https://api.nasa.gov/mars-photos/api/v1/rovers";
const api_key =
  process.env.NASA_API_KEY || "Dgpzj1EMf5CeIHXF1tMCcPegj94yiWhflpcly8lb";

export const usePhotos = (queries: IUsePhotosProps) => {
  const { rover, camera, sol, page, earth_date } = queries;

  const [loading, setLoading] = useState<boolean>(true);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const getPhotos = async () => {
    try {
      const response = await fetch(
        `${baseURL}/${rover}/photos?sol=${sol}&page=${page}&camera=${camera}&earth_date=${earth_date}&api_key=${api_key}`
      );
      const data = await response.json();
      setHasMore(data?.photos?.length > 0);

      setPhotos((prevPhotos) =>
        page > 1 ? prevPhotos.concat(data?.photos) : data?.photos
      );
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setPhotos([]);

    setTimeout(() => {
      getPhotos();
    }, 1000);
  }, [rover, camera, sol, earth_date]);

  useEffect(() => {
    getPhotos();
  }, [page]);

  return {
    hasMore,
    loading,
    photos,
  };
};
