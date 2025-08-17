import React from "react";
import PhotoForMobile from "./PhotoForMobile";
import { getTourPhotos1ById, getTourPhotos2ById } from "@/lib/actions";

const PhotosForMobile = async ({ id }) => {
  const photos1 = await getTourPhotos1ById(id);

  return <PhotoForMobile photosOne={photos1} id={id} />;
};

export default PhotosForMobile;
