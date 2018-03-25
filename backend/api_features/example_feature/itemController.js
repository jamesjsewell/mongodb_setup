const Item = require("./itemSchema.js")

module.exports = {

    post: function (req, res, next) {
        console.log(req.body)
        const name = req.body.name,
            description = req.body.description

        var Something = new Item({ name: name, description: description })
        Something.save(function (error, data) {
            if (error) return { error: error, failed_action: 'post_item', message: 'failed to post item' }
            return res.send(data)
        })

    },
    get: function (req, res, next) {

        var queryObj = {}
        if (req.params.id) {
            queryObj._id = req.params.id

        }

        console.log(req.params)

        Item.find(queryObj, function (err, results) {
            if (err) return res.json({ error: "internal server error" })

            return res.json(results)
        })

    },
    update: function (req, res, next) {

        Item.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            function (err, record) {
                if (err) {
                    console.log(err)
                    res.status(400).send(err)
                } else if (!record) {
                    res.status(400).send("requested item not found")
                } else {
                    res.json(req.body)
                }
            }
        )

    },
    delete: function (req, res, next) {

        Item.remove({ _id: req.params.id }, function (error) {
            if (error) {
                res.status(400).json(error)
            }
            res.status(201).json({
                msg: `item with id ${req.params.id} has been removed.`,
                id: req.params.id
            })
        })

    }


}