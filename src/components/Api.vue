<template>
  <div class="hello">
    <h1>new Article</h1>
        <label>Title</label>
        <input type="text" v-model="title"><br>
        <label>Content</label>
        <textarea type="text" v-model="content"></textarea><br>
        <button v-on:click="postToAPI">post</button>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
  name: 'Api',
  data () {
    return {
      content: 'Welcome to Your Vue.js PWA',
        title: 'hallo',
    }
  },
    methods: {
        postToAPI: function () {
            self = this
            console.log(this.title);
            let headers = {
                'Accept': 'application/hal+json',
                'Content-Type': 'application/hal+json',
                'X-CSRF-Token': 'HAl80nK7M-zS9mVC2e4nq9h4yXj1q0Cyk6zvU6cm1rc',
                'Authorization': 'Basic Y21zZGV2LXVzZXI6Y21zZGV2LXBhc3M=',
            }
            let data = {
                title: self.title,
                body: self.content
            }
            axios.post('http://cmsdev.localhost/node/', data, headers);

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
