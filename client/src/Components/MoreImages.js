const MoreImages = (props) => {
  return (
    <div id="images-container">
      <h2>Other photos</h2>
      <div id="real-images-container">
        {props.images.map((image) => {
          return <img className="cat-image" src={image.url} key={image.id} />;
        })}
      </div>
    </div>
  );
};

export default MoreImages;
