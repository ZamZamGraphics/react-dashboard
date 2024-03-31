function Sidebar({ open }) {
  const hidden = open ? "" : "hidden";
  return (
    <div
      className={`w-[15rem] h-screen fixed z-50 inset-0 top-0 overflow-y-auto md:block ${hidden} bg-white border-r border-gray-200`}
    >
      <div className="p-3 text-3xl font-bold">Company Logo</div>
      <div className="p-3">
        <h3>Sidebar</h3>
      </div>
    </div>
  );
}

export default Sidebar;
