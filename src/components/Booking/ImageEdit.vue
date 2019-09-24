<template>
  <div class="container">
    <div class="row mt-5">
     <div class="col-md-4 col-4 col-sm-4 col-lg-4">
      <router-link  to="/add/Booking" class="text-brown"><span class="rounded icon-circle px-2 py-1"><i class="fas fa-arrow-left text-white"></i></span> Go back</router-link>
     </div>
     <div class="col-md-8 col-8 col-sm-8 col-lg-8">
        <p class="text-muted float-right small">
        Wedding Photography for my son (Oghenetaga and Juliana) >
        Court Wedding >
        Court Wedding images
        </p>
     </div>
    </div>

     <div class="row py-3">
    <div class="col-md-8 col-8 col-sm-8 col-lg-8">
      
        <h4> <span class="test text-muted"></span>{{subtitle}}</h4>          
    </div>
    <div class="col-md-4 col-4 col-sm-4 col-lg-4">
      <p class="float-right">Customer: {{customer}} <span><i class="fas fa-envelope 2x"></i></span></p>  
    </div>
  </div>
  <hr class="pt-0 mt-0">

       
            <el-upload 
          class="upload-demo col-md-12"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload upload-size pt-5"> </i>
          <div class="el-upload__text pt-0">Create New Album</div>
          </el-upload>
          
        
    </div>
</template>
<script>
export default{
  data(){
    return{
      subtitle:'Court Wedding (Images) Edit 1',
      customer:'Michael Steven',
    }
  },
}
</script>

<style scoped>
.badge{
  font-size:50%!important;
}
.nav-pills .nav-link.active,.nav-pills .show>.nav-link {
  background-color:transparent!important;
  color:#C9A245!important;
}
a{
  color:#898989!important;
}
.el-upload-dragger {
    width: 250px!important;
    height: 40px!important;
  }

  .el-icon-upload:before {
    content: "\E6D9"!important;
}
.text-brown{
  color:#B58000!important;
}
.btn-yellow{
  background-color:#FFB603;
    color:#fff;
}
.icon-circle{
  width:50px;
  height:50px;
  background:#B58000!important;
  border-radius:50%!important;
}


</style>