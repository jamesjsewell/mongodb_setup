const Item = require("../../mongoose_schemas/anItem.js")

module.exports = {
    postItem: function(req, res, next){
        console.log(req.body)
        const name = req.body.name,
        description = req.body.description

        var Something = new Item({ name: name, description: description });
        Something.save(function (error, data) {
        if (error) return {error: error, failed_action: 'post_item', message: 'failed to post item'};
            return res.send(data)
        })
        
    }

}