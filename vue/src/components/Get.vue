<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
        <ul>
            <li v-for="article in articles">{{article.title[0].value}}</li>
        </ul>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
  name: 'Get',
  data () {
    return {
        msg: 'Get articles',
        articles: '',
    }
  },
    created() {
        self = this
        axios.get(`http://cmsdev.localhost/rest/articles`)
            .then(response => {
                self.articles = response.data
                console.log(self.articles[0].title);
            })
            .catch(e => {
                this.errors.push(e)
            })
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
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
