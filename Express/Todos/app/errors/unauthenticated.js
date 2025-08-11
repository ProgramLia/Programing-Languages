class Unauthenticated extends Error {
     constructor(message) {
          super(message)
          this.status = 401;
     }
}

module.exports = Unauthenticated;