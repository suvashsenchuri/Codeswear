import connectMongooseDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let updatedProduct = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
            await updatedProduct.save()
        }
        res.status(200).json({ success: "succesfully updated" })
    } else {
        res.status(400).json({ error: 'Bad Request' })
    }
}

export default connectMongooseDB(handler)