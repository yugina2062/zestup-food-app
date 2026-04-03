import { ReactNode } from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const CustomerLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <TopNav />
    <main className="pb-20 md:pb-8 max-w-7xl mx-auto">{children}</main>
    <BottomNav />
  </div>
);

export default CustomerLayout;
