import { useInView } from 'react-intersection-observer'

export default function ScrollReveal({ children, delay = 0, className = '', style = {} }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
