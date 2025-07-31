import Globe from 'react-globe.gl'
import { temp } from 'three/tsl'
import Button from '../components/Button'
import { useState } from 'react'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('hiba.officialwork@gmail.com')
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }
  return (
    <section className='c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid1.png'
              className='w-full sm:h-[276px] h-fit object-contain'
              alt='grid-1'
            />
            <div>
              <p className='grid-headtext'>Hi, I am Hiba</p>
              <p className='grid-subtext'>
                With 10 years of experience, I have honed my skills in fronend
                and backend development, with a focus on 3D websites
              </p>
            </div>
          </div>
        </div>
        {/* 1st span finished */}
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid2.png'
              alt='grid-2'
              className='w-full sm:w-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>Tech Stack </p>
              <p className='grid-subtext'>
                I specialzed in HTML5, CSS3, React.js JS, Next.js, Taiwlind CSS,
                React-three/fiber React-three/drei and Three.js
              </p>
            </div>
          </div>
        </div>
        {/* 2nd span finished */}
        <div className=' col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                labelsData={[
                  {
                    lat: 33.6,
                    lng: 73,
                    text: 'I am here!',
                    color: 'white',
                    size: 500,
                  },
                ]}
              />
            </div>

            <div>
              <p className='grid-headtext'>I work remotely</p>
              <p className='grid-subtext'>I am open to remote work</p>

              <Button name='Contact me' isBeam containerClass='w-full mt-10' />
            </div>
          </div>
        </div>
        {/* 3rd span finished */}

        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid3.png'
              alt='grid-3'
              className='w-full sm:h-[266px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>My passion for coding</p>
              <p className='grid-subtext'>
                I love solving problems and building solutions through code. It
                is my passion + profession
              </p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img
              src='/assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt='copy'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
