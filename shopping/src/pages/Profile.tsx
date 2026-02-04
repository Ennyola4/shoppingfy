import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  Settings,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Profile = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4">
      {/* ================= HERO ================= */}
      <section className="pt-24 pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#002366]"
        >
          User Profile
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-4 max-w-xl mx-auto"
        >
          Manage your account details, preferences, and security
          settings from one place.
        </motion.p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto pb-20 space-y-12">
        {/* ================= PROFILE CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-[#002366]/10 flex items-center justify-center">
                <User className="w-12 h-12 text-[#002366]" />
              </div>
              <button className="absolute bottom-0 right-0 bg-[#002366] p-2 rounded-full text-white shadow">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">
                John Doe
              </h2>
              <p className="text-gray-600">john@example.com</p>
              <Button
                variant="outline"
                className="mt-4 border-[#002366] text-[#002366]"
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ================= ACCOUNT DETAILS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Account Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 border rounded-xl">
              <User className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium text-gray-900">
                  John Doe
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-xl">
              <Mail className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">
                  john@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-xl">
              <Phone className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">
                  +234 801 234 5678
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-xl">
              <Settings className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">
                  Account Type
                </p>
                <p className="font-medium text-gray-900">
                  Standard User
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= SECURITY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Security
          </h3>

          <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center gap-4">
              <Lock className="text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">
                  Password
                </p>
                <p className="text-sm text-gray-500">
                  Last updated 3 months ago
                </p>
              </div>
            </div>
            <Button variant="outline">Change</Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Profile;
