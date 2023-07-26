export interface user {
    fname: String,
    lanme: String,
    email: String,
    phone: Number,
    street: String,
    street2: String,
    city: String,
    state: String,
    zip: Number,
    socketId: string
}

export interface message {
    message: string,
    date: string,
    time: string,
    messageType: string,
}