import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'PYFIN - Plataforma FinTech',
      description: 'Plataforma web que digitaliza la solicitud y evaluación de créditos para PYMES. Desarrollo colaborativo con metodologías ágiles.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT', 'Bootstrap'],
      features: ['Sistema seguro con autenticación JWT', 'Dashboard interactivo', 'API RESTful escalable', 'Colaboración con equipo multidisciplinario'],
      link: 'https://pyfin-nocountry.vercel.app/',
      github: 'https://github.com/tu-usuario/pyfin',
      image: '/proyectos/pyfin.jpg'
    },
    {
      title: 'AMINTEGRAL - Salud Mental',
      description: 'Plataforma para acceso a servicios de salud mental en sectores vulnerables. Enfoque inclusivo y accesible con geolocalización de profesionales.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'CSS', 'MapBox'],
      features: ['Geolocalización de profesionales', 'Sistema de citas online', 'Panel administrativo completo', 'Enfoque en accesibilidad'],
      link: '#',
      github: 'https://github.com/tu-usuario/amintegral',
      image: '/proyectos/AMI.png'
    },
    {
      title: 'Sistema de Recursos Humanos',
      description: 'Aplicación integral para gestión de empleados, permisos, asistencia y nóminas con reportes detallados y dashboard analítico.',
      technologies: ['Spring Boot', 'React', 'MySQL', 'Chart.js', 'Material-UI'],
      features: ['Gestión completa de empleados', 'Control de asistencia biométrico', 'Generación de nóminas', 'Dashboard con métricas'],
      link: '#',
      github: 'https://github.com/jlugod1/Proyecto-Recursos-Humanos',
      image: '/proyectos/rh.png'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-balance mb-4">Proyectos Destacados</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Algunos de los proyectos en los que he trabajado, combinando tecnologías modernas con soluciones innovadoras.
        </p>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              <div className="md:flex md:items-stretch md:min-h-96">
                {/* IMAGEN DEL PROYECTO - AHORA CLICKEABLE */}
                <div className={`md:w-1/2 relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative h-64 md:h-full overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={`Captura del proyecto ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tech badges overlay */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Overlay con icono de enlace */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                        <ExternalLink size={32} className="text-white drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Badge "Click para ver" */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold backdrop-blur-sm">
                        Ver Proyecto
                      </span>
                    </div>
                  </Link>
                </div>

                {/* CONTENIDO DEL PROYECTO */}
                <div className={`md:w-1/2 p-8 md:p-10 flex flex-col justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                      {project.title}
                    </h3>
                    <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" size={24} />
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground text-lg">Características principales:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Ver Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200"
                    >
                      <Github size={18} />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}