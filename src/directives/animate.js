const animate = {
  mounted(el, binding) {
    const animation = binding.value || 'fade-up'

    el.classList.add('animate-init')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add(`animate-${animation}`)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.2 })

    observer.observe(el)
  }
}

export default animate