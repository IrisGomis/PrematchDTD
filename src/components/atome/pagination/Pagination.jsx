import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  return (
    <div className="flex justify-center">
      <nav className="bg-white rounded-lg border border-gray-300">
        <ul className="flex">
          {range(1, totalPages).map((page) => (
            <li key={page}>
              <button
                className={`${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-blue-500 hover:text-white'
                } px-4 py-2 rounded-lg mx-1 border border-gray-300 focus:outline-none`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;