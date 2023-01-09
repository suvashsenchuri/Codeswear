import { Mongoose } from 'mongoose';

const UserSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timeStamps: true })
mongoose.models = {}

export default mongoose.model('User', UserSchema)