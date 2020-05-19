class Helpers {
  getRandonInRange(min: number, max: number) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
}

export default new Helpers()
