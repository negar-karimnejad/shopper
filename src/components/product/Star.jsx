
function Star() {
  return (
    <div className="mt-4 flex items-center">
    {Array.from({ length: 5 }).map((item, index) => (
      <div key={index}>⭐</div>
    ))}
    <span className="ml-2 text-slate-600">(122)</span>
  </div>
  )
}

export default Star