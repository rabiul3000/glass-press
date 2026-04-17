import LogoutBtn from "@/components/LogoutBtn";

const page = () => {
  return (
    <div className="flex flex-col  gap-4 justify-center items-center py-24 bg-white h-full w-full">
      <p>Are you really want to logout?</p>
      <LogoutBtn />
    </div>
  );
};

export default page;
