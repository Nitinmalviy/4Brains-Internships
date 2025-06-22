
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Users, 
  Award, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Trophy,
  Target,
  Zap,
  Heart,
  MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InternshipGrid from "@/components/InternshipGrid";
import PricingSection from "@/components/PricingSection";
import SkillDomains from "@/components/SkillDomains";
import Schedule from "@/components/Schedule";
import Mentors from "@/components/Mentors";
import ExtraPerks from "@/components/ExtraPerks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <Hero />
      <InternshipGrid />
      <PricingSection />
      <SkillDomains />
      <Schedule />
      <Mentors />
      <ExtraPerks />
      <Footer />
    </div>
  );
};

export default Index;
