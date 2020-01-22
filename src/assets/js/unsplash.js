const imageWidth = 1920;
const imageHeight = 1080;
const collectionID = 8469893; // Warm Toned Mediterranean(106 photos)

fetch(
  `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`
)
  .then(response => {
    const jsBody = document.querySelector('body');
    jsBody.style = `background-image: url('${response.url}')`;
  })
  .catch(err => {
    console.log(err);
  });
