import AdminLayout from "@/components/layout/AdminLayout";
import { Star, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const mockReviews = [
  { id: 1, user: "Ram Sharma", product: "Mango Pickle", rating: 5, comment: "Best achar I've ever had! Authentic taste.", date: "2026-04-10", status: "approved" },
  { id: 2, user: "Sita Thapa", product: "Tomato Pickle", rating: 4, comment: "Good quality, slightly too spicy for me.", date: "2026-04-09", status: "pending" },
  { id: 3, user: "Hari Bhandari", product: "Mixed Pickle", rating: 2, comment: "Not fresh, packaging was damaged.", date: "2026-04-08", status: "pending" },
  { id: 4, user: "Gita KC", product: "Garlic Pickle", rating: 5, comment: "Amazing flavor! Will order again.", date: "2026-04-07", status: "approved" },
  { id: 5, user: "Bishal Rai", product: "Lapsi Pickle", rating: 3, comment: "Average taste, expected better.", date: "2026-04-06", status: "rejected" },
  { id: 6, user: "Anita Gurung", product: "Mango Pickle", rating: 1, comment: "Terrible experience. Got expired product.", date: "2026-04-05", status: "pending" },
];

const statusColor: Record<string, string> = {
  approved: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  rejected: "bg-red-100 text-red-800",
};

const AdminFeedbackPage = () => {
  const [reviews, setReviews] = useState(mockReviews);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? reviews : reviews.filter(r => r.status === filter);

  const updateStatus = (id: number, status: string) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const deleteReview = (id: number) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  const avgRating = reviews.length ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) : "0";
  const pending = reviews.filter(r => r.status === "pending").length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-bold">Manage Reviews</h1>
          <p className="text-sm text-muted-foreground">Monitor and moderate customer feedback</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">{reviews.length}</p>
            <p className="text-xs text-muted-foreground">Total Reviews</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-accent">⭐ {avgRating}</p>
            <p className="text-xs text-muted-foreground">Avg Rating</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{pending}</p>
            <p className="text-xs text-muted-foreground">Pending</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-green-700">{reviews.filter(r => r.status === "approved").length}</p>
            <p className="text-xs text-muted-foreground">Approved</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {["all", "pending", "approved", "rejected"].map(f => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className="capitalize rounded-lg text-xs"
            >
              {f}
            </Button>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {filtered.map(r => (
            <div key={r.id} className="bg-card border border-border rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm">{r.user}</p>
                  <p className="text-xs text-muted-foreground">{r.product}</p>
                </div>
                <Badge className={`${statusColor[r.status]} text-[10px] border-0`}>{r.status}</Badge>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={14} className={s <= r.rating ? "text-accent fill-accent" : "text-muted"} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{r.comment}</p>
              <div className="flex gap-2 pt-1">
                {r.status === "pending" && (
                  <>
                    <Button size="sm" variant="outline" className="text-xs h-7 rounded-lg text-green-700" onClick={() => updateStatus(r.id, "approved")}>Approve</Button>
                    <Button size="sm" variant="outline" className="text-xs h-7 rounded-lg text-red-700" onClick={() => updateStatus(r.id, "rejected")}>Reject</Button>
                  </>
                )}
                <Button size="sm" variant="ghost" className="text-xs h-7 text-destructive ml-auto" onClick={() => deleteReview(r.id)}>
                  <Trash2 size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-card border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(r => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium text-sm">{r.user}</TableCell>
                  <TableCell className="text-sm">{r.product}</TableCell>
                  <TableCell>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} size={12} className={s <= r.rating ? "text-accent fill-accent" : "text-muted"} />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground max-w-[200px] truncate">{r.comment}</TableCell>
                  <TableCell>
                    <Badge className={`${statusColor[r.status]} text-[10px] border-0`}>{r.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {r.status === "pending" && (
                        <>
                          <Button size="sm" variant="outline" className="text-xs h-7 text-green-700" onClick={() => updateStatus(r.id, "approved")}>✓</Button>
                          <Button size="sm" variant="outline" className="text-xs h-7 text-red-700" onClick={() => updateStatus(r.id, "rejected")}>✗</Button>
                        </>
                      )}
                      <Button size="sm" variant="ghost" className="h-7 text-destructive" onClick={() => deleteReview(r.id)}>
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminFeedbackPage;
