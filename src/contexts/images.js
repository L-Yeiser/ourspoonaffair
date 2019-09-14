import React, { useState, createContext, useEffect } from 'react';

import firebase from 'firebase';

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  let [images, setImages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const imageBucket = await firebase.storage.ref('images');
      const { items: imageRefs = [] } = (await imageBucket.listAll()) || {};
      const downloadUrls = await Promise.all(
        imageRefs.map(ref => ref.getDownloadURL())
      );

      setImages(downloadUrls);
    };

    fetchData();

    return () => {
      setImages = () => {};
    };
  }, []);

  return (
    <ImagesContext.Provider value={images}>{children}</ImagesContext.Provider>
  );
};
