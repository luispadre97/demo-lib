import classNames from "classnames";

const Pagination = (props: any) => {
  const { currentPage, pageSize, total, onPageChange } = props;
  const totalPages = Math.ceil(total / pageSize);
  return (
    <div className={classNames('pagination')}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};