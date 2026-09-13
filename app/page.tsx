import { About } from '@/components/about'
import { Consult } from '@/components/consult'
import { Credentials } from '@/components/credentials'
import { Contact } from '@/components/contact'
import { FAQ } from '@/components/faq'
import { Fieldwork } from '@/components/fieldwork'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { GeoSection } from '@/components/geo-section'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { TrustBar } from '@/components/trust-bar'
import { WhyTriune } from '@/components/why-triune'

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Credentials />
        <About />
        <Services />
        <GeoSection />
        <Process />
        <WhyTriune />
        <Projects />
        <Fieldwork />
        <Consult />
        <FAQ />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
