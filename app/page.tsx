import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
      <main>
          <h1>Popular Companions</h1>
          <section className="home-section">
              <CompanionCard
                  id="123"
                  name="Neura the Brainy Explorer"
                  topic="Neural Network of the Brain"
                  subject="science"
                  duration={45}
                  color="#ffda6e"

              />
              <CompanionCard
                  id="456"
                  name="Countsy the Number Wizard"
                  topic="Derivatives and Integrals"
                  subject="maths"
                  duration={30}
                  color="#e5d0ff"

              />
              <CompanionCard
                  id="789"
                  name="Verba the Vocabulary Builder"
                  topic="Language Learning"
                  subject="English Literature"
                  duration={30}
                  color="#BDE7FF"

              />
          </section>

          <section className="home-section">
              <CompanionsList
                  title="Recently completed sessions"
                  companions={recentSessions}
                  classNames="w-2/3 max-lg:w-full"
              />
              <CTA />
          </section>
      </main>
  )
}

export default Page