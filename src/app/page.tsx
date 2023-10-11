import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import realestateIcon from '@/images/icons/realestate.svg'
import consultingIcon from '@/images/icons/consulting.svg'
import logisticsIcon from '@/images/icons/logistics.svg'
import entretainementIcon from '@/images/icons/entretainement.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import ecommerceIcon from '@/images/icons/ecommerce.svg'
import fintechIcon from '@/images/icons/fintech.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const expertises = [
  ['E-Commerce', ecommerceIcon],
  ['Real Estate', realestateIcon],
  ['Fintech', fintechIcon],
  ['Entretainement', entretainementIcon],
  ['Logistics', logisticsIcon],
  ['Consulting', consultingIcon]
]

function Expertises() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We excel in a variety of industries
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {expertises.map(([key, logo]) => (
              <li key={key}>
                <FadeIn>
                  <div className="flex items-center gap-5" >
                    <Image src={logo} alt={key} unoptimized />
                    <p className="text-white font-medium" >{key}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Our Belief is to Elevate, Innovate  and Illuminate"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Opentecc, our belief is more than a mantra;
          it's the foundation of everything we do.
          We innovate to push boundaries, collaborate to achieve excellence,
          and, in doing so, create an environment where digital aspirations not only come to life but thrive.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  {/* <Link href={caseStudy.href}> */}
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.client}
                    className="h-16 w-16"
                    unoptimized
                  />
                  {/* </Link> */}
                </h3>
                {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p> */}
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Digital Engineering">
              From concept to code, our digital engineering
              services harness the latest technologies to bring your ideas to life. We don't just build; we innovate, ensuring that your digital footprint is not just current but ahead of the curve.
            </ListItem>
            <ListItem title="AI and Machine Learning">
              In a data-driven world, our AI and machine
              learning services empower you with actionable insights.
              From predictive analytics to automation, we integrate intelligence into your processes.
              We don't just analyze data; we extract value and foresight.
            </ListItem>
            <ListItem title="Web Development">
              Your online presence is more than a website;
              it's a digital identity. Our web development services create user-centric, responsive, and visually stunning platforms.
              We don't just code; we craft digital experiences that resonate.
            </ListItem>
            <ListItem title="Custom Software Development">
              Your challenges are unique, and
              so are our solutions. Our custom software development services create bespoke applications that align with your specific needs.
              We don't just develop software;
              we engineer solutions that fit seamlessly into your business landscape.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Transforming Visions into Tech Realities
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At Opentecc, innovation is not a concept; it's our core.
            Seamlessly merging expertise with advanced technology, we propel your ideas from vision to reality.
            Join us in reshaping the digital landscape.
            Your journey towards transformative solutions begins here.
          </p>
        </FadeIn>
      </Container>

      <Expertises />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
      // client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        What sets Opentecc apart is their genuine dedication to understanding our needs.
        They didn't just develop a web application;
        they crafted a financial tool that resonates with our clients.
        Their expertise in fintech is evident in every line of code, ensuring a robust, secure, and innovative solution.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
