import { Mongoose } from 'mongoose';

const ProductSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true,unique:true },
    des: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number,required:true },
    availableQty :{type:Number,required:true}
}, { timeStamps: true })

export default ProductSchema.model('Product', ProductSchema)