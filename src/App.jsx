import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'


import './App.css'

function App() {
 
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -ml-28 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20  blur-[80px] -z-10  w-[500px] h-[500px]'>
      </div>

       <NavBar></NavBar>
       <Hero></Hero>
       <PurposeSection></PurposeSection>
       <FeaturesSection></FeaturesSection>
       <ScheduleSection></ScheduleSection>
       <MonitorSection></MonitorSection>
       <ServicesSection></ServicesSection>
       <TestimonialSection></TestimonialSection>
       <CompanyLogo></CompanyLogo>
       <NewsletterSection></NewsletterSection>
       <Footer></Footer>

    </main>
  )
}

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "昊元工作室",
  "url": "https://hyuanwork.cn/",
  "logo": "https://yourdomain.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://twitter.com/yourpage"
  ]
}
`}
</script>


export default App
