import { useState } from "react";
import CustomerLayout from "@/components/layout/CustomerLayout";
import { ArrowLeft, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const EditProfilePage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "Sita Sharma",
    email: "sita@example.com",
    phone: "+977 9801234567",
    address: "Thamel, Kathmandu",
  });

  const handleSave = () => {
    toast({ title: "Profile Updated", description: "Your profile has been saved successfully." });
  };

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/profile" className="p-2 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-lg font-bold">Edit Profile</h1>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
              SS
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
              <Camera size={14} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl h-12"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl h-12"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
            <Input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-xl h-12"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Address</label>
            <Textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="rounded-xl min-h-[80px]"
            />
          </div>

          <Button
            onClick={handleSave}
            className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default EditProfilePage;
