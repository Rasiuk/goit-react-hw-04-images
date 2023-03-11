import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { AppDiv } from './App.styled';
import { Button } from './Button/Button';
import { Triangle } from 'react-loader-spinner';
import { Fetch } from 'servises/fetch';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [total, setTotal] = useState({});
  const [imageName, setImageName] = useState(null);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(null);
  useEffect(() => {
    if (imageName === null) {
      return;
    }
    setloading(true);
    Fetch(imageName, page)
      .then(response => response.json())
      .then(data => {
        setImages(prevImage => [...prevImage, ...data.hits]);
        setTotal(data.total);
      })
      .finally(() => {
        setloading(false);
      });
  }, [imageName, page]);

  const handleSubmit = searchName => {
    setImageName(searchName);
    setImages([]);
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppDiv>
      <Searchbar onSubmit={handleSubmit} />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {images === null && <h1>Введите имя картинки</h1>}
      {total === 0 && <h1>По вашему запросу ничего не найдено</h1>}
      {images && <ImageGallery images={images} onLoadMore={loadMore} />}
      {loading && (
        <Triangle
          height="240"
          width="240"
          color="#376580"
          ariaLabel="triangle-loading"
          wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
          wrapperClassName=""
          visible={true}
        />
      )}
      {total > 12 && page < Math.ceil(total / 12) && (
        <Button loading={loading} onLoadMore={loadMore} />
      )}
    </AppDiv>
  );
};
