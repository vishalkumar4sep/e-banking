import React, { useState, useEffect } from "react";
import useTable from "../../hooks/useTable";
import Pagination from "./Pagination";
import { MainSpinner } from "../shared/MainSpinner";

export const PaginationNotificationsList = ({
  notifications,
  oneNotification,
  rowsPerPage,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [slice, setSlice] = useState([]);
  const [range, setRange] = useState([]);
  const [_timeoutId, setTimeoutId] = useState(null);
  const [page, setPage] = useState(1);

  const { slice: sliceArray, range: rangeArray } = useTable(
    notifications,
    page,
    rowsPerPage
  );

  useEffect(() => {
    const id = setTimeout(() => {
      if (sliceArray.length > 0 && rangeArray.length > 0) {
        setSlice(sliceArray);
        setRange(rangeArray);
        setIsLoading(false);
      }
    }, 1500);
    setTimeoutId(id);

    return () => {
      clearTimeout(id);
    };
  }, [notifications, page, rowsPerPage, sliceArray, rangeArray]);

  const spinnerSize = window.innerWidth < 400 ? 30 : 45;

  return (
    <div className="rounded-lg my-10 p-5">
      {isLoading && (
        <MainSpinner spinnerSize={spinnerSize} spinnerHeight="50vh" />
      )}
      {!isLoading && (
        <>
          <ul className="basis-full flex flex-col p-2 md:p-8 text-xs md:text-base text-gray-800 font-bold">
            {slice.map((item) => oneNotification(item))}
          </ul>
          <Pagination
            range={range}
            slice={slice}
            setPage={setPage}
            page={page}
          />
        </>
      )}
    </div>
  );
};
