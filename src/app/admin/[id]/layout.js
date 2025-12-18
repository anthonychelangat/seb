import AdminHeader from "@/components/AdminHeader";
import SessionAdmin from "@/components/SessionAdmin";

export default function RootLayout({ children }) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-0 lg:grid-cols-8 lg:gap-4">
      <div className="hidden lg:block col-span-2 sticky overflow-y-auto h-[screen] max-h-[screen]">
        <SessionAdmin />
      </div>
      <div className="lg:hidden">
        <AdminHeader />
      </div>
      <div className="col-span-6 overflow-y-auto">{children}</div>
    </div>
  );
}
