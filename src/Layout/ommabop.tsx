import { useEffect, useState } from "react";
import React from "react";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface OmmabopProps {
  photos: Photo[];
}

export default function Ommabop({ photos }: OmmabopProps) {
  const [photoData, setPhotoData] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotoData(data));
  }, []);

  return (
    <>
      <div style={{ padding: "80px" }}>
        <h1>Хиты продаж</h1>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-around",
        }}
      >
        {photoData.slice(0, 4).map((photo) => (
          <div key={photo.id}>
            <img width={250} src={photo.thumbnailUrl} /> <br />
            <b>Диван "Ergonomic Rubber Shoes”</b> <br />
            <p style={{ display: "inline-block" }}>35 990 ₽</p>
            <del>35 990 ₽</del>
          </div>
        ))}
      </div>
    </>
  );
}
