export default function logo(logoframe, logocard, logo){

  let { x, y, width, height} = logoframe.getBoundingClientRect()

  function mouseMove(e) {
    const left    = e.clientX - x
    const top     = e.clientY - y
    const centerX = left - width / 2
    const centerY = top - height / 2
    const d       = Math.sqrt(centerX ** 2 + centerY ** 2)

    logocard.style.boxShadow    = `${-centerX / 5}px ${-centerY / 5}px 10px rgba(0, 0, 0, 0.2)`
    logocard.style.transform    = `rotate3d(${-centerY / 50}, ${centerX / 50}, 0, ${d / 5}deg)`
    logo.style.backgroundImage  = `radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #ffffff99)`
  }

  logoframe.addEventListener('mouseenter', () => {
    logoframe.addEventListener('mousemove', mouseMove)
  })

  logoframe.addEventListener('mouseleave', () => {
    logoframe.removeEventListener('mousemove', mouseMove)
    logocard.style.boxShadow    = ''
    logocard.style.transform    = ''
    logo.style.backgroundImage  = ''
  })
}

