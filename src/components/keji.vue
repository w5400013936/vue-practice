<template>
    <div class="container">
        <transition appear appear-to-class="animated fadeIn">
            <ul>
                <li v-for="news in newsList" :key="news">
                    <a :href="news.url" target="_blank">
                        <img :src="news.picUrl" :alt="news.title">
                        <h5>{{news.title}}</h5> 
                    </a>
                </li>
            </ul>
        </transition>
    </div>
</template>
<script>
import api from '../services/api';
export default {
    data(){
        return{
            type:'',
            newsList:[]
        }
    },
    created(){
        this.type = this.$route.query.type;
        this.getDataFromApi(this.type);
    },
    watch:{
        $route:function(){
            this.getDataFromApi(this.type);
        }
    },
    methods:{
        getDataFromApi:function(type){
            api.getData(type,function(res){
                this.newsList = res;
            }.bind(this))
        }
    }
}
</script>
<style>
    ul{
        list-style: none;
    }
    .container li{
        float: left;
        width: 350px;
    }
    .container li h5{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .container li img{
        width: 270px;
        height: 200px;
    }
</style>

