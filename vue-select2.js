module.exports = {
    template: '<select v-el="select" multiple></select>',
    props: {
        model: {
            required: true,
            twoWay: true
        },
        data: {
            required: true,
            type: Array
        },
        tags: {
            required: false,
            default: true
        },
        split: {
            required: false,
            type: Array,
            default: function(){
                return [',', ' ','#']
            }
        },
        invariant: {
            required: false,
            type: Array,
            default: function(){
                return []
            }
        },
        placeholder: {
            required: false,
            type: String
        }
    },
    ready: function(){
        var $ = require('jquery'),
            select2 = require('libs/select2/select2')

        this.$$.select = $(this.$$.select).select2({
            tags: this.tags,
            tokenSeparators: this.split,
            data: this.data,
            placeholder: this.placeholder,
            language: require('/libs/select2/i18n/zh-CN')
        })
        .val(this.model).trigger('change')
        .on('change',function(e){
            this.model = this.$$.select.val()
        }.bind(this))
        .on('select2:unselecting',function(e){
            for (var i = this.invariant.length - 1; i >= 0; i--) {
                if(e.params.args.data.id != this.invariant[i]) continue
                e.preventDefault()
            }
        }.bind(this))
    },
    detached: function(){
        this.$$.select.off('select2:unselecting')
    }
}