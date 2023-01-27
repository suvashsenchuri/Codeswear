import connectMongooseDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler = async (req, res) => {
    let products = await Product.find()
    let tshirts = {}
    for (let items of products) {
        if (items.title in tshirts) {
            if (!tshirts[items.title].size.includes(items.size) && items.availableQty > 0) {
                tshirts[items.title].size.push(items.size)
            }

            if (!tshirts[items.title].color.includes(items.color) && items.availableQty > 0) {
                tshirts[items.title].color.push(items.color)
            }

        } else {
            tshirts[items.title] = JSON.parse(JSON.stringify(items))
            if (items.availableQty > 0) {
                tshirts[items.title].color = [items.color]
                tshirts[items.title].size = [items.size]
            }
        }
    }

    res.status(200).json({ tshirts })
}
export default connectMongooseDB(handler)