export function Fetch(imageName, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '32915984-753662c00e21893fc193d0b46';

  return fetch(
    `${BASE_URL}?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
