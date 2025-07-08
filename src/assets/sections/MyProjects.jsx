import React from 'react'

import {PROJECTS} from '../utils/data'
import ProjecCard from '../components/ProjecCard'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const MyProjects = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: "start"})
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext)

    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', updateScrollButtons)
        updateScrollButtons()
    }, [emblaApi, updateScrollButtons])

    return (
      <section id="projects" className="bg-background mt-14">
          <div className="container mx-auto px-8 md:px-10 py-10">
              <div className="w-full lg:w-[60vw] mx-auto">
                  <h4 className="section-title">Mis Proyectos Destacados</h4>

                  <p className="text-sm text-center mt-4 leading-6">
                      Desde el diseño hasta la implementación, estos proyectos reflejan mi enfoque en código limpio, 
                      alto rendimiento y experiencias de usuario excepcionales. Cada uno representa un desafío único 
                      donde he aplicado mis habilidades en desarrollo Full Stack.
                  </p>
              </div>
              <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex pt-14 pb-8">
                        {PROJECTS.map((project) => (
                            <div
                                key={project.id}
                                className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]'>
                                <ProjecCard
                                    key={project.id}
                                    imgUrl={project.image}
                                    title={project.title}
                                    tags={project.tags}
                                />
                            </div>
                        ))}    
                    </div>             
                </div>

                {/* Navigation */}
                <button className={`arrow-btn -left-5 ${
                    !canScrollPrev ? "opacity-50 cursor-not-allowed":""
                }`}
                onClick={() => emblaApi && emblaApi.scrollPrev()}
                disabled={!canScrollPrev}
                >
                    <IoIosArrowForward className='rotate-180'/>
                </button>

                <button className={`arrow-btn -right-5 ${
                    !canScrollNext ? "opacity-50 cursor-not-allowed":""
                }`}
                onClick={() => emblaApi && emblaApi.scrollNext()}
                disabled={!canScrollNext}
                >
                    <IoIosArrowForward/>
                </button>
              </div>
          </div>
      </section>
    )
}

export default MyProjects