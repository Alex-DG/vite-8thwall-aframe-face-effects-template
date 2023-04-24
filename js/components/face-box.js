export const faceBoxComponent = {
  init() {
    const faceBox = document.getElementById('face-box')

    faceBox.setAttribute('scale', '0.25 0.25 0.25')

    const x = faceBox.getAttribute('position').x
    const y = faceBox.getAttribute('position').y
    faceBox.setAttribute('position', {
      x,
      y,
      z: -0.1,
    })

    this.faceBox = faceBox
  },

  tick() {
    if (this.faceBox) {
      this.faceBox.object3D.rotation.z += 0.025
      this.faceBox.object3D.rotation.x += 0.025
    }
  },
}
