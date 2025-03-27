import React from 'react';

const Misbaha = ({ count, handleClick, handleReset }) => {
  return (
    <div className="bg-white bg-opacity-10 p-8 rounded shadow-lg text-center">
      <h1 className="text-2xl text-yellow-400 font-bold mb-4">مسبحة إلكترونية</h1>
      <div className="mb-4">
        <span className="text-6xl text-white font-semibold">{count}</span>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          تسبيح
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          إعادة تعيين
        </button>
      </div>
    </div>
  );
};

export default Misbaha;