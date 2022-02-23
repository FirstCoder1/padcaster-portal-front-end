import MediaTypes from '../types/MediaTypes';
import { fetchMediaList } from './apiCalls';

export function formatFileSize(bytes, decimalPoint) {
  if (bytes == 0) return '0 Bytes';
  const dm = decimalPoint || 0;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, i)).toFixed(dm)) + ' ' + sizes[i];
}

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(milliseconds);
    }, milliseconds);
  });
}

const downloadIFrame = (file) => {
  window.open(file.url, '_blank' + file.id);
};

const downloadHref = async (file) => {
  const a = document.createElement('a');
  a.id = file.id;
  a.download = file.name;
  a.href = file.url;
  a.style.display = 'none';
  document.body.append(a);
  a.click();

  // Chrome requires the timeout
  await delay(100);
  a.remove();
};

async function downloadFile(file) {
  const url = file.url;
  // let url;
  // if (file.id % 2 === 0)
  //   url =
  //     'https://static.wixstatic.com/media/51a970_86252556f0614bfea4cbb53c00050f9c~mv2.jpg';
  // else if (file.id % 2 === 1)
  //   url =
  //     'https://static.wixstatic.com/media/51a970_86252556f0614bfea4cbb53c00050f9c~mv2.jpg';
  const name = file.name;
  if (!url) return;

  const token = localStorage.getItem('token');
  fetch(url, {
    headers: { 'Content-Type': 'image/png', Authorization: `Bearer ${token}` },
    responseType: 'blob',
    // mode: 'no-cors',
  })
    .then((response) => response.blob())
    .then(async (blob) => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.id = `hidden-downloader-${file.id}`;
      a.href = blobURL;
      a.style = 'display: none';

      if (name && name.length) a.download = name;
      document.body.appendChild(a);
      a.click();

      await delay(100);
      a.remove();
    })
    .catch(() => console.error('fetch url error'));
}

export async function downloadMultiFiles(allMedia) {
  allMedia.forEach(async (media, idx) => {
    if (media.type === MediaTypes.FOLDER) {
      const subMedia = await fetchMediaList(media.id);
      await downloadMultiFiles(subMedia);
    } else {
      setTimeout(async function () {
        if (media.type === MediaTypes.JPG) downloadHref(media);
        else downloadIFrame(media);
      }, 2000 * idx);
    }
  });
}
