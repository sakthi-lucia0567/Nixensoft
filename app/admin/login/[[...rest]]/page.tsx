import { SignIn } from "@clerk/nextjs";

export default function AdminLoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignIn path="/admin/login" fallbackRedirectUrl="/admin/dashboard" />
    </div>
  );
}
