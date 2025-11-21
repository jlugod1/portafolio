import { BookOpen, Award } from 'lucide-react'

export default function Education() {
  const education = [
    {
      institution: 'Coding Dojo',
      title: 'Desarrollador FullStack JAVA',
      year: '2024',
      type: 'Certificación'
    },
    {
      institution: 'Fundación Forge',
      title: 'Bootcamp FullStack Java',
      year: '2023-2024',
      type: 'Certificación'
    },
    {
      institution: 'Udemy',
      title: 'JavaScript TOTAL',
      year: '2023',
      type: 'Curso'
    },
    {
      institution: 'Universidad',
      title: 'Ingeniería Civil (4 semestres)',
      year: '2021-2022',
      type: 'Educación Formal'
    }
  ]

  return (
    <section id="education" className="py-20 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-balance mb-12">Formación</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={`${edu.institution}-${index}`}
              className="p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  {edu.type === 'Certificación' ? (
                    <Award size={24} className="text-primary-foreground" />
                  ) : (
                    <BookOpen size={24} className="text-primary-foreground" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-foreground">{edu.title}</h3>
                      <p className="text-sm text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{edu.year}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{edu.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
