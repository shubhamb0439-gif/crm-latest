import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AssessmentSubmission from './pages/AssessmentSubmission';
import AssessmentReport from './pages/AssessmentReport';
import ConsultancyBooking from './pages/ConsultancyBooking';
import Dashboard from './pages/Dashboard';
import LeadDatabase from './pages/LeadDatabase';
import LeadProfile from './pages/LeadProfile';
import BookingSubmissions from './pages/BookingSubmissions';
import Campaigns from './pages/Campaigns';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <div className="h-full w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin" element={<AdminLogin />} />

          <Route path="/assessment" element={<AssessmentSubmission />} />

          <Route path="/assessment-report/:id" element={<AssessmentReport />} />

          <Route path="/booking" element={<ConsultancyBooking />} />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/leads"
            element={
              <ProtectedRoute>
                <LeadDatabase />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/leads/:id"
            element={
              <ProtectedRoute>
                <LeadProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/bookings"
            element={
              <ProtectedRoute>
                <BookingSubmissions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/campaigns"
            element={
              <ProtectedRoute>
                <Campaigns />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
