import {  
  Hero,
  Customerreview,
  Footer,
  Subscribe,
  Specialoffers,
  Popularproduct,
  Superquality,Services } from "./Sections/index.js";
import Nav from "./Components/Nav.jsx";

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
      </section>
      <section className="padding">
      <Popularproduct/>
      </section>
      <section className="padding">
        <Superquality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding-x py-10">
        <Specialoffers/>
      </section>
      <section className="padding bg-pale-blue">
        <Customerreview/>
      </section>
      <section className="padding-x w-full sm:py-32 py-16">
        <Subscribe/>
      </section>
      <section className="bg-black padding-t padding-x pb-8">
        <Footer/>
      </section>


    </main>
  )
 }