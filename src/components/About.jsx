import React from 'react'
import AboutImage from '../assets/perfil.jpg'
const About = () => {
  return (
        <div className='py-50' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12 mt-12'>Sobre mim</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt="Danilu Silva"
                    className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                        Meu nome é Danilu Silva, sou desenvolvedor FullStack e estou cursando Análise e Desenvolvimento de Sistemas.
                        Atualmente, estou me especializando em Desenvolvimento Frontend e outros frameworks.
                    </p>
                    <div className='space-y-4'>
                        <div className='flex items-center'>
                            <label htmlFor="htmlandcss" className='w-2/12'>
                            HTML & CSS
                            </label>
                            <div id='graphHtml' className='grow rounded-full h-2.5'>
                                <div
                                className='bg-gradient-to-r from-blue-400 to-green-500 h-2.5 rounded-full transform transition-transform
                                duration-300 hover:scale-105 w-10/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="htmlandcss" className='w-2/12'>
                            React JS
                            </label>
                            <div id='graphReact' className='grow rounded-full h-2.5'>
                                <div
                                className='bg-gradient-to-r from-blue-400 to-green-500 h-2.5 rounded-full transform transition-transform
                                duration-300 hover:scale-105 w-7/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="htmlandcss" className='w-2/12'>
                            Node JS
                            </label>
                            <div id='graphNode' className='grow rounded-full h-2.5'>
                                <div
                                className='bg-gradient-to-r from-blue-400 to-green-500 h-2.5 rounded-full transform transition-transform
                                duration-300 hover:scale-105 w-8/12'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500'>
                                Cursando
                            </h3>
                            <p>Análise e Desenvolvimento de Sistemas (RPV - SENAI)</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default About