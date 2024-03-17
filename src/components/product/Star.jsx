import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function Star({ rating }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: rating }).map((item, index) => (
        <div key={index} className="text-yellow-400">
          <AiFillStar />
        </div>
      ))}
      {Array.from({ length: Math.ceil(5 - rating) }).map((item, index) => (
        <div key={index} className="text-yellow-400">
          <AiOutlineStar />
        </div>
      ))}
      {/* <span className="ml-2 text-slate-600">(122)</span> */}
    </div>
  );
}

export default Star;
