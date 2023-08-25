import { useState } from "react";
import ReactPaginate from "react-paginate";
import result1 from "../assets/img/result-1.png";
import result2 from "../assets/img/result-2.png";
import result3 from "../assets/img/result-3.png";
import result4 from "../assets/img/result-4.png";
import result5 from "../assets/img/result-5.png";
import result6 from "../assets/img/result-6.png";
import result7 from "../assets/img/result-7.png";
import result8 from "../assets/img/result-8.png";
import result9 from "../assets/img/result-9.png";
import result10 from "../assets/img/result-10.png";

const Pagination = () => {
  const DATA = [
    {
      id: "1",
      name: "image-1",
      type: result1,
    },
    {
      id: "2",
      name: "image-2",
      type: result2,
    },
    {
      id: "3",
      name: "image-3",
      type: result3,
    },
    {
      id: "4",
      name: "image-4",
      type: result4,
    },
    {
      id: "5",
      name: "image-5",
      type: result5,
    },
    {
      id: "6",
      name: "image-6",
      type: result6,
    },
    {
      id: "7",
      name: "image-7",
      type: result7,
    },
    {
      id: "8",
      name: "image-8",
      type: result8,
    },
    {
      id: "9",
      name: "image-9",
      type: result9,
    },
    {
      id: "10",
      name: "image-10",
      type: result10,
    },
  ];

  const [pageNumber, setPageNumber] = useState(0);

  const imagePerPage = 6;
  const pagesVisited = pageNumber * imagePerPage;

  const displayImages = DATA.slice(
    pagesVisited,
    pagesVisited + imagePerPage
  ).map((item) => {
    return (
      <div className="pagination-image">
        <img src={item.type} alt="before-after" />
      </div>
    );
  });

  const pageCounter = Math.ceil(DATA.length / imagePerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="pagination__wrap">{displayImages}</div>
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
