import Divide from '../Divide';

function Copyright() {
  const date = new Date().getFullYear();

  return (
    <div className="w-full text-center text-slate-500">
      <Divide />
      <div className="pb-3 ">Copyright &copy; {date} - All Right Reserved.</div>
    </div>
  );
}

export default Copyright;
