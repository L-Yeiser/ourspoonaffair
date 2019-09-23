import React, { useState, createContext, useEffect } from 'react';

import { sortBy } from 'lodash';

import firebase from 'firebase';

export const ImagesContext = createContext();

const matchName = /-(.*).jpg/;
export const ImagesProvider = ({ children }) => {
  let [images, setImages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageBucket = await firebase.storage.ref('images');
        const { items: imageRefs = [] } = (await imageBucket.listAll()) || {};
        const downloadUrls = await Promise.all(
          sortBy(imageRefs, ({ name }) => +name.match(matchName)[1]).map(ref =>
            ref.getDownloadURL()
          )
        );

        setImages(downloadUrls);
      } catch (error) {
        //
      }
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
