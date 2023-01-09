import { Mongoose } from 'mongoose';

const OrderSchema = new Mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        { productId: { type: String, required: true } },
        { quantity: { type: Number, default: 1 } }
    ],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Pending', required: true }
}, { timeStamps: true })

mongoose.models = {}

export default mongoose.model('Order', OrderSchema)