class BadRequest extends Error {
    constructor(message) {
        super(message)
        this.status = 400;
    }
}

class Unauthenticated extends Error {
    constructor(message) {
        super(message)
        this.status = 401
    }
}

class Unauthorized extends Error {
     constructor(message) {
        super(message)
        this.status = 403
    }
}

module.exports = {BadRequest, Unauthenticated, Unauthorized}