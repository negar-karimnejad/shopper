import Divide from "../Divide";

function Copyright() {
  const date = new Date().getFullYear();

  return (
    <div className="w-full text-center">
      <Divide />
      <div className="py-3">Copyright &copy; {date} - All Right Reserved.</div>
    </div>
  );
}

export default Copyright;
