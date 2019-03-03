//creating a todo-item component
Vue.component('todo-item', {
    props: ['content', 'index'],
    template: '<div class="content">{{content}}<div class="ui small basic right floated icon buttons"><button class="ui button"><i class="edit outline icon"></i></button><button class="ui button" @click="todoClick"><i class="x icon"></i></button></div><div class="ui hidden divider" style="margin:12px"></div></div>',
    methods: {
        todoClick () {
            this.$emit('delete', this.index)
        }
    }
})

new Vue({
    el: '#app',
    data: {
        txt: '',
        list: []
    },
    methods: {
        todoSubmit () {
          //adding to-do item
            if(!this.txt) return;
            this.list.push(this.txt);
            this.txt = '';
        },
        todoDelete (index) {
            this.list.splice(index, 1)
        }
    }
})
