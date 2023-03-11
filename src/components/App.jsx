import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { AppDiv } from './App.styled';
import { Button } from './Button/Button';
import { Triangle } from 'react-loader-spinner';
import { Fetch } from 'servises/fetch';
export class App extends Component {
  state = {
    total: {},
    imageName: null,
    loading: false,
    page: 1,
    status: 'idle',
    images: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      Fetch(this.state.imageName, this.state.page).then(response =>
        response
          .json()
          .then(data =>
            this.setState(prevState => {
              return {
                images: [...prevState.images, ...data.hits],
                total: data.total,
              };
            })
          )
          .finally(() => this.setState({ loading: false }))
      );
    }
  }

  handleSubmit = searchName => {
    this.setState({ imageName: searchName, images: [] });
  };
  loadMore = () => {
    this.setState(prevProps => {
      return { page: prevProps.page + 1 };
    });
  };

  render() {
    const { images, loading, total, page } = this.state;

    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleSubmit} />
        {images === null && <h1>Введите имя картинки</h1>}
        {total === 0 && <h1>По вашему запросу ничего не найдено</h1>}
        {images && <ImageGallery images={images} onLoadMore={this.loadMore} />}
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
          <Button loading={loading} onLoadMore={this.loadMore} />
        )}
      </AppDiv>
    );
  }
}
