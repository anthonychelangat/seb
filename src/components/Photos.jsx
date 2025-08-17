import React from "react";
import Photo from "./Photo";
import { getToursPhotosByTourId } from "@/lib/actions";

const Photos = async ({ id }) => {
  const photos = await getToursPhotosByTourId(id);

  return (
    <div className="">
      <Photo photos={photos} id={id} />
    </div>
  );
};

export default Photos;
