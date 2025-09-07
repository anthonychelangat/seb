import PreviousPage from "@/components/PreviousPage";
import SessionAdmin from "@/components/SessionAdmin";
import SharePage from "@/components/SharePage";

export default function RootLayout({ children }) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4">
      <div className="col-span-2 sticky overflow-y-auto h-[screen] max-h-[screen]">
        <SessionAdmin />
      </div>

      <div className="col-span-6 overflow-y-auto">{children}</div>
    </div>
  );
}
