<template>
    <div class="container">
        <div class="search">
            <el-input class="searchBookVal" icon="search" :on-icon-click="searchBook">

            </el-input>
        </div>
        
        <table id="bookList" class="table table-striped table-hover">
            <thead>
                <th v-for="head in thead" :key="head">
                    {{head}}
                </th>
            </thead>
            <!-- <tbody> -->
                <!-- <transition-group tag="tbody" enter-to-class="animated fadeInLeft" leave-to-class="animated fadeOutRight"> -->
                <transition-group tag="tbody" name="el-zoom-in-top">
                    <tr v-for="(book,index) in books" :key="book">
                        <td>{{index+1}}</td>
                        <td>{{book.title}}</td>
                        <td>{{book.author}}</td>
                        <td>{{book.price + '元'}}</td>
                        <td>
                            <el-button type="danger" icon="delete" size="small" @click="removeBook(index)">删除</el-button>
                        </td>
                    </tr>
                </transition-group>
            <!-- </tbody> -->
        </table>
        <form id="addBooks">
            <div class="form-group">
                <label for="title">书名：</label>
                <input class="form-control" type="text" name="title" placeholder="请输入书名">
            </div>
            <div class="form-group">
                <label for="author">作者：</label>
                <input class="form-control" type="text" name="author" placeholder="请输入作者">
            </div>
            <div class="form-group">
                <label for="price">价格：</label>
                <input class="form-control" type="number" name="price" placeholder="请输入价格">
            </div>
            <button type="submit" id="addbtn" class="btn btn-primary">确定添加</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            thead:['序号','书名','作者','价格','操作'],
            books:[
                {
                    title:'嫌疑犯X的献身',
                    author:'东野圭吾',
                    price:'30'
                },
                {
                    title:'恶意',
                    author:'东野圭吾',
                    price:'27.3'
                },
                {
                    title:'白夜行',
                    author:'东野圭吾',
                    price:'26'
                },
                {
                    title:'解忧杂货店',
                    author:'东野圭吾',
                    price:'27'
                }
            ],
            totalBooks:[],
            searchKey:''
        }
    },
    mounted(){
        this.totalBooks = this.books;
        $('#addBooks').validate({
            rules:{
                title:'required',
                author:'required',
                price:'required'
            },
            messages:{
                title:'请输入书名',
                author:'请输入作者姓名',
                price:'请输入价格'
            },
        });
        $('#addBooks').submit(function(e){
            e.preventDefault();
            this.addBook();
        }.bind(this))
        $('.searchBookVal').find('input').on('focus',function(){
            
        })
    },
    methods:{
        addBook:function(){
            if($('input[name=title]').val() == '' || $('input[name=author]').val() == '' || $('input[name=price]').val() == ''){
                return false;
            }
            var newBook = {};
            newBook.title = $('input[name=title]').val().trim();
            newBook.author = $('input[name=author]').val().trim();
            newBook.price = $('input[name=price]').val().trim();
            this.books.push(newBook);
        },
        removeBook:function(index){
            // if(confirm('确定删除这本书籍吗？')){
            //     this.books.splice(index,1);
            // }
            this.$confirm('确定要删除吗？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                this.books.splice(index,1);
                this.$message({
                    type:'success',
                    message:'删除成功'
                })
            }).catch(()=>{
                this.$message({
                    type:'info',
                    message:'已取消删除'
                })
            })
        },
        searchBook:function(e){
            this.searchKey = $('.searchBookVal').find('input').val().toLowerCase();
            this.books = this.totalBooks.filter(function(book){
                if(book.title.toLowerCase().indexOf(this.searchKey) > -1){
                    return book;
                }
            }.bind(this))
        }
    }
}
</script>
<style>
    table{
        margin-top: 20px;
    }
    .container th{
        text-align: center !important;
    }
    .container form{
        width: 400px;
        /* float: right; */
    }
    .container .form-group{
        text-align: left;
    }
    .form-group input{
        width: 50%;
    }
    #addbtn{
        float: left;
    }
    .form-control{
        display: inline-block;
    }
    label.error{
        color:crimson;
        font-weight: normal;
        font-style: italic;
    }
    .fade-enter-active,.fade-leave-active{
        transition: opacity .5s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fa{
        font-size: 14px;
    }
    .search{
        width: 200px;
    }
</style>


