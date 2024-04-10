import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPaginate from "react-paginate";
import paginationData from "./PaginationData";

const Pagination = ({ tab }) => {
  const filteredData = paginationData.filter((item) => item.tab === tab);

  const [pageNumber, setPageNumber] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const imagePerPage = 6;
  const pagesVisited = pageNumber * imagePerPage;

  const displayImages = filteredData
    .slice(pagesVisited, pagesVisited + imagePerPage)
    .map((item) => {
      return (
        <motion.div
          className="pagination-image"
          key={item.id}
          onClick={() => setSelectedImage(item.item)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img
            src={item.item}
            alt={`before-after-${item.id}`}
            className="pagination__mini-img"
          />
        </motion.div>
      );
    });

  const FullImageView = ({ imageUrl, onClose }) => (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="full-image-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeIn" } }}
        >
          <img src={imageUrl} alt="full-view" />
          <motion.svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            className="full-image-btn"
            fill="none"
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{
              scale: 1.2,
              rotate: 180,
              transition: { duration: 0.2 },
            }}
          >
            <circle cx="12" cy="12" r="10" stroke="#387ff7" strokeWidth="1.5" />
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#387ff7"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const pageCounter = Math.ceil(filteredData.length / imagePerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="pagination__wrap">
        {displayImages}
        <FullImageView
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
      <ReactPaginate
        pageCount={pageCounter}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__prev"}
        nextLinkClassName={"pagination__next"}
        disabledClassName={"pagination__disabled"}
        activeClassName={"pagination__active"}
      />
    </>
  );
};

export default Pagination;
