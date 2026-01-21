export default function About() {
  return (
    <section id="about" className="py-20 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-balance mb-6">Sobre mí</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Soy un Desarrollador Full Stack certificado por Coding Dojo con especialización en Java, Spring Boot y MySQL. Me gusta resolver problemas complejos, aprender constantemente y colaborar en equipos multidisciplinarios para crear soluciones innovadoras.
              </p>
              <p>
                Con experiencia en desarrollo colaborativo, he trabajado en plataformas financieras y de salud. Mi enfoque combina buenas prácticas de código, arquitectura escalable y atención al detalle.
              </p>
              <p>
                Fuera del código, me dedico a la calistenia y al crecimiento personal, siempre buscando nuevos desafíos que me permitan expandir mis habilidades técnicas y liderar iniciativas de impacto.
              </p>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-6 text-primary">Habilidades Clave</h3>
            <div className="space-y-3">
              {[
                { label: 'Backend Development', desc: 'Java, Spring Boot, REST APIs' },
                { label: 'Frontend Development', desc: 'React, JavaScript, HTML5, CSS3' },
                { label: 'Bases de Datos', desc: 'MySQL, Diseño relacional' },
                { label: 'Herramientas', desc: 'Git, GitHub, Postman, Slack' },
                { label: 'Metodologías', desc: 'Scrum, Trabajo en equipo' },
                { label: 'Seguridad', desc: 'JWT, REST API Security' },
              ].map((skill) => (
                <div key={skill.label} className="pb-3 border-b border-border last:border-b-0">
                  <p className="font-semibold text-foreground">{skill.label}</p>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
