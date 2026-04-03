import { ReactNode } from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const CustomerLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <TopNav />
    <main className="pb-20 max-w-5xl mx-auto">{children}</main>
    <BottomNav />
  </div>
);

export default CustomerLayout;
