import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";


const ParticlesComponent = () => {
   const [ init, setInit ] = useState(false);

   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);


   return ({ init && <Particles id="tsparticles" url="http://foo.bar/particles.json"/>})
}
