import { Coffee, GitBranch, Database, Code2, Zap } from 'lucide-react'

export default function Technologies() {
  const categories = [
    {
      title: 'Backend',
      icon: Coffee,
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT']
    },
    {
      title: 'Frontend',
      icon: Code2,
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'Herramientas',
      icon: GitBranch,
      technologies: ['Git', 'GitHub', 'Postman', 'Slack', 'Trello']
    }
  ]

  return (
    <section id="technologies" className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-balance mb-12">Tecnologías</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background rounded-full text-sm font-medium text-primary border border-primary/30 hover:bg-primary/10 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
