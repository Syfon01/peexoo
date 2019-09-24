<template>
<div class="tab-pane fade" id="list-bookings" role="tabpanel" aria-labelledby="list-bookings-list">
    
  <book-navbar/>

  
  <div class="row pt-5">
    <div class="col-md-8 col-8 col-sm-8 col-lg-8">
      
        <h4> <span class="test text-muted"></span>{{title}}</h4>          
    </div>
    <div class="col-md-4 col-4 col-sm-4 col-lg-4">
      <p class="float-right">Customer: {{customer}} <span><i class="fas fa-envelope 2x"></i></span></p>  
    </div>
  </div>
  <hr class="pt-0 mt-0">

  <div class="row">
    <div class="col-md-6 col-6 col-sm-6 col-lg-6 ">
      
        <small class="text-brown pt-0 mt-0"> <em>{{comment}} comment</em></small>          
    </div>
    <div class="col-md-6 col-12 col-sm-12 col-lg-6">
      <div class="float-right">
        <div class="form-check form-check-inline text-brown">
          <router-link to="/add/Booking" class="text-brown"><i class="fas fa-upload"></i><em>Upload</em></router-link>
        </div>
      </div>
    </div>
  </div>

    
 
 <div class="row py-3">
   <div class="col-md-4" v-for="image in allImages" :key="image.id">
     <img :src="image.image" class="img-fluid"/>
    </div>
    <div class="col-md-4">
     <el-upload
  class="upload-demo "
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload upload-size pt-5"> Create Shoot</i>
  <!-- <div class="el-upload__text">Drop file here or <em>click to upload</em></div> -->
</el-upload>
    </div>
   
 </div>
<!-- </div> -->
      
</div>

</template>

<script>
import BookNavbar from './BookNavbar'
export default {
name: 'MainBook',

components:{
BookNavbar
},
data() {
  return {
    title:"Court Wedding (Images) Primary",
    customer:"Steven Miracle",
    comment: 0,
    allImages:[{
      id:1, image:"/image/img1.jpg"
    },
    {id:2, image:"/image/img2.jpg"
    },
    {id:3, image:"/image/img3.jpg"
    },
    ],
    imageUrl: ''
  }
},

}
</script>

<style >
.test:after {
  content: '\2807';
  font-size: 20px;  
  }

  .text-brown{
    color:#CEAA54;
  }
  .tab-container input{
    display:true;
}
.tab-container label{
    display:block;
    float:left;
    padding:5px 10px;
    cursor:pointer;
}
.tab-container input:checked + label{
    background:black;
    color:white;
    cursor:default;
}
.tab-container .tab {
    display:none;
    padding:5px 10px;
    clear:left;
}
.tab-container input:nth-of-type(1):checked ~ .tab:nth-of-type(1),
.tab-container input:nth-of-type(2):checked ~ .tab:nth-of-type(2),
.tab-container input:nth-of-type(3):checked ~ .tab:nth-of-type(3){
    display:block;
}
.el-upload-dragger {
    width: 250px!important;
    height: 230px!important;
  }
  .el-icon-upload:before {
    content: "\E6D9"!important;
}
.upload-size{
    font-size:14px!important;
}
</style>