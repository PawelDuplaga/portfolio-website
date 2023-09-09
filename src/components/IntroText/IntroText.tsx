import React from 'react'
import { Balancer } from 'react-wrap-balancer'

const IntroText = () => {
  return (
    <Balancer>
        <span className="font-bold">Hello, I'm Paweł.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span> &{" "}
        <span className="underline">.NET</span>
    </Balancer>
  )
}

export default IntroText