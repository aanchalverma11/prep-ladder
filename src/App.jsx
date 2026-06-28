import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HelpCenter from "./components/HelpCenter";
import MedicalPG from "./components/MedicalPG";
import SS_medicine from "./components/SS_medicine";
import SS_surgery from "./components/SS_surgery";
import SS_pediatrics from "./components/SS_pediatrics";
import ENT_residency from "./components/ENT_residency";
import Psychiatry_residency from "./components/Psychiatry_residency";
import OBS_GYN_residency from "./components/OBS_GYN_residency";
import Radiology_residency from "./components/Radiology_residency";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Blog from "./components/Blog";
import Faculty from "./components/Faculty";
import Plans from "./components/Plans";
import Anatomy from "./components/Anatomy";
import Physiology from "./components/Physiology";
import Biochemistry from "./components/Biochemistry";
import Microbiology from "./components/Microbiology";
import Pathology from "./components/Pathology";
import ForensicMedicine from "./components/ForensicMedicine";
import PSM from "./components/PSM";
const slugToCourseMap = {
  "fmge": "FMGE",
  "ss-medicine": "SS Medicine",
  "ss-surgery": "SS Surgery",
  "ss-pediatrics": "SS Pediatrics",
  "ent-residency": "ENT Residency",
  "psychiatry-residency": "Psychiatry Residency",
  "obs-gyn-residency": "OBS-GYN Residency",
  "radiology-residency": "Radiology Residency",
  "medical-pg": "Medical PG"
};

function MainLayout() {
  const { courseSlug } = useParams();
  const location = useLocation();
  const currentCourse = slugToCourseMap[courseSlug] || "Medical PG";
  const isHelpCenter = location.pathname.endsWith("/help-center");
  const isBlog = location.pathname.endsWith("/blog");
  const isFaculty = location.pathname.endsWith("/faculty");
  const isPlan = location.pathname.endsWith("/plan");
  const isAnatomy = location.pathname.endsWith("/anatomy-preparation") || location.pathname.endsWith("/anatomy");
  const isPhysiology = location.pathname.endsWith("/physiology-preparation") || location.pathname.endsWith("/physiology");
  const isBiochemistry=location.pathname.endsWith("/biochemistry");
  const isMicrobiology = location.pathname.endsWith("/microbiology-preparation") || location.pathname.endsWith("/microbiology");
  const isPathology = location.pathname.endsWith("/pathology-preparation") || location.pathname.endsWith("/pathology");
  const isForensic = location.pathname.endsWith("/forensic-medicine-preparation") || location.pathname.endsWith("/forensic-medicine");
  const isPSM = location.pathname.endsWith("/social-and-preventive-medicine-preparation") || location.pathname.endsWith("/social-and-preventive-medicine");
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar currentCourse={currentCourse} />
      <main style={{ flex: 1 }}>
        {isHelpCenter ? (
          <HelpCenter course={currentCourse} />
        ) : isBlog ? (
          <Blog />
        ) : isFaculty ? (
          <Faculty />
        ) : isPlan ? (
          <Plans />
        ) : isAnatomy ? (
          <Anatomy />
        ) : isPhysiology ? (
          <Physiology />
        ) : isBiochemistry ? (
          <Biochemistry/>
        ) : isMicrobiology ? (
          <Microbiology />
        ) : isPathology ? (
          <Pathology />
        ) : isForensic ? (
          <ForensicMedicine />
        ) : isPSM ? (
          <PSM />
        ) : currentCourse === "SS Medicine" ? (
          <SS_medicine />
        ) : currentCourse === "SS Surgery" ? (
          <SS_surgery />
        ) : currentCourse === "SS Pediatrics" ? (
          <SS_pediatrics />
        ) : currentCourse === "ENT Residency" ? (
          <ENT_residency />
        ) : currentCourse === "Psychiatry Residency" ? (
          <Psychiatry_residency />
        ) : currentCourse === "OBS-GYN Residency" ? (
          <OBS_GYN_residency />
        ) : currentCourse === "Radiology Residency" ? (
          <Radiology_residency />
        ) : (
          <MedicalPG course={currentCourse} />
        )}
      </main>
      <Footer currentCourse={currentCourse} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/courses/medical-pg" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/courses/:courseSlug" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/help-center" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/blog" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/faculty" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/plan" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/anatomy-preparation" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/anatomy" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/physiology-preparation" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/physiology" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/biochemistry" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/microbiology-preparation" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/microbiology" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/pathology-preparation" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/pathology" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/forensic-medicine-preparation" element={<MainLayout />} />
      <Route path="/courses/:courseSlug/forensic-medicine" element={<MainLayout />} />
      <Route path="*" element={<Navigate to="/courses/medical-pg" replace />} />
    </Routes>
  );
}