export interface user {
    fname: String,
    lname: String,
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

export interface appointment {
    uid: String,
    userDetails: [
        {
            userUid: string,
            name: string,
            profilePic: string,
            booked: Boolean,
            date?: string,
            time?: string,
            address: string,
            completed: Boolean,
            cancelled: Boolean
        }
    ]
  }