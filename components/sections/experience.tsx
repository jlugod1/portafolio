import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'NoCountry',
      position: 'Desarrollador Full Stack',
      period: '2024',
      description: 'Desarrollo de PYFIN - Plataforma FinTech',
      highlights: [
        'Implementación de backend con Java y Spring Boot',
        'Desarrollo frontend con React',
        'Trabajo en equipo con metodologías ágiles (Scrum)',
        'Integración de APIs RESTful y autenticación JWT'
      ]
    },
    {
      company: 'Walmart Chile',
      position: 'Operador',
      period: '2023',
      description: 'Operaciones y logística',
      highlights: []
    },
    {
      company: 'Hospital Regional',
      position: 'Administrativo',
      period: '2022',
      description: 'Tareas administrativas',
      highlights: []
    }
  ]

  return (
    <section id="experience" className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-balance mb-12">Experiencia</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 last:pb-0"
            >
              <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />
              
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm whitespace-nowrap">
                  <Calendar size={16} />
                  {exp.period}
                </div>
              </div>
              
              <p className="text-foreground mb-3">{exp.description}</p>
              
              {exp.highlights.length > 0 && (
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-foreground">
                      <span className="text-primary">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
