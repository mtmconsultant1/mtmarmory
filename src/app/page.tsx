"use client"
import Navbar from "@/components/Navbar"
import SectionHeader from "@/components/SectionHeader"
import HeroSection from "@/components/HeroSection"
import PillarsSection from "@/components/PillarsSection"
import ArsenalSection from "@/components/ArsenalSection"
import ForgeSection from "@/components/ForgeSection"
import UtilityToolsSection from "@/components/UtilityToolsSection"
import ThroneIntelSection from "@/components/ThroneIntelSection"
import DisplaySection from "@/components/DisplaySection"
import EarthSection from "@/components/EarthSection"
import ImpactSection from "@/components/ImpactSection"
import CTAChainSection from "@/components/CTAChainSection"
import FAQSection from "@/components/FAQSection"
import OpenChannelSection from "@/components/OpenChannelSection"
import ContactSection from "@/components/ContactSection"
import SocialMediaSection from "@/components/SocialMediaSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <PillarsSection />
      <ArsenalSection />
      <ForgeSection />
      <UtilityToolsSection />
      <ThroneIntelSection />
      <DisplaySection />
      <EarthSection />
      <ImpactSection />
      <CTAChainSection />
      <FAQSection />
      <OpenChannelSection />
      <ContactSection />
      <SocialMediaSection />
      <Footer />
    </>
  )
}
