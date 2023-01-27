import connectMongooseDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let newProduct = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                des: req.body[i].des,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty
            })
            await newProduct.save()
        }
        res.status(200).json({ success: "success added" })
    } else {
        res.status(400).json({ error: 'Bad Request' })
    }
}

export default connectMongooseDB(handler)