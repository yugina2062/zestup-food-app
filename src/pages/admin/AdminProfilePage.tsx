import { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AdminProfilePage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@zestyjars.com",
    phone: "+977 9800000000",
    role: "Super Admin",
  });

  const handleSave = () => {
    toast({ title: "Profile Updated", description: "Admin profile saved successfully." });
  };

  return (
    <AdminLayout>
      <div className="max-w-lg">
        <h1 className="text-xl font-bold mb-6">Admin Profile</h1>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
              AU
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
              <Camera size={14} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl h-12" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-xl h-12" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone</label>
            <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl h-12" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Role</label>
            <Input value={form.role} disabled className="rounded-xl h-12 bg-muted" />
          </div>
          <Button onClick={handleSave} className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">
            Save Changes
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProfilePage;
