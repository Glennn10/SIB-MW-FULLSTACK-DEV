import { useState } from "react";

function BookCover({ title, author, coverUrl, coverId, from, to }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const imageSource =
    coverUrl ??
    (coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg?default=false`
      : null);

  if (imageSource && !imageUnavailable) {
    return (
      <img
        className="book-cover book-cover-image"
        src={imageSource}
        alt={`Sampul buku ${title}`}
        loading="lazy"
        onError={() => setImageUnavailable(true)}
      />
    );
  }

  return (
    <div
      className="book-cover book-cover-art"
      style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
      role="img"
      aria-label={`Sampul buku ${title}`}
    >
      <i className="fa-solid fa-book-open mb-3"></i>
      <span className="book-cover-title">{title}</span>
      <span className="book-cover-author">{author}</span>
    </div>
  );
}

export default BookCover;
