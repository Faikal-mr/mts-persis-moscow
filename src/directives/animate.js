export default {
  mounted(el) {
    el.classList.add('fade-up-init')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('fade-up-active')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
  }
}