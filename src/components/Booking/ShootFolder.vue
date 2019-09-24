<template>
  <div class="container">
    <div class="row mt-5">
     <div class="col-md-6 col-6 col-sm-6 col-lg-6">
      <router-link  to="/add/Booking" class="text-brown"><span class="rounded icon-circle px-2 py-1"><i class="fas fa-arrow-left text-white"></i></span> Go back</router-link>
     </div>
     <div class="col-md-6 col-6 col-sm-6 col-lg-6">
        <p class="text-brown float-right">{{title}}</p>
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

        <h5 class="pt-3"> <span class="text-muted"></span>{{categorytitle1}}</h5>          
        <div class="row my-5">
          <div class="col-md-3" v-for="image in images" :key="image.id">
              <div class="card">
                <img :src="image.image" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                <router-link to="/shoot/images">
                  <p class="card-text">{{image.title}}</p>
                </router-link>                 
                   <p class="card-text pt-2"><small class="text-muted">{{image.imageQuantity}}</small></p>
                </div>
              </div>
          </div>
          <div class="col-md-3">
            <el-upload 
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload upload-size pt-5"> </i>
          <div class="el-upload__text pt-0">Create New Album</div>
          </el-upload>
          </div>
        </div>

        <h5> <span class="text-muted pt-3"></span>{{categorytitle2}}</h5>          
        <div class="row my-5">
          <div class="col-md-3" v-for="video in videos" :key="video.id">
              <div class="card">
                <video controls :src="video.video"></video>
                <div class="card-body">
                <router-link to="/shoot/videos">
                  <p class="card-text">{{video.title}}</p>
                </router-link>                  
                    <p class="card-text pt-2"><small class="text-muted">{{video.videoQuantity}}</small></p>
                </div>
              </div>
          </div>
          <div class="col-md-3">
            <el-upload 
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          >
          <i class="el-icon-upload upload-size pt-5"> </i>
          <div class="el-upload__text pt-0">Create New Album</div>
          </el-upload>
          </div>
        </div>


        <a class="btn btn-danger" href="#" tabindex="-1"  @click="unTick">Untick</a>
        <a class="btn btn-success" href="#" tabindex="-1"  @click="createAlbum">Create Album</a>
        
    </div>
</template>
<script>
export default{
  data(){
    return{
      title:'Wedding Photography for my son (Oghenetaga and Juliana)',
      subtitle:'Court Wedding',
      customer:'Michael Steven',
      categorytitle1:'Court Wedding Images',
      categorytitle2:'Court Wedding Videos',
      images:[{
        id: 1,
        image: '/image/img2.jpg',
        title:'Court Wedding Primary Images',
        imageQuantity:'28 images',
      },
      ],
      videos:[{
        id: 1,
        video: "https://www.w3schools.com/tags/movie.mp4",
        title:'Court Wedding Primary Videos',
        videoQuantity:'2 videos',
      },
      ]
    }
  }, 
  methods: {
    unTick(){
       this.$swal({
    type: 'error',
  title: '',
  text: "Sorry cannot untick video. Make sure primary viseo is empty",
  showCancelButton: true,
  cancelButtonColor: '',
  confirmButtonColor: '#FFB603',
  confirmButtonText: 'Go Back'
})
// .then((result) => {
//   if (result.value) {
//     this.$swal(
//       'Deleted!',
//       'image deleted successfully',
//       'success'
//     )
//   }
// })
      },

      createAlbum(){
       this.$swal({
    type: '',
  title: '',
  text: "You are about to create an image album in Court wedding",
  showCancelButton: true,
  confirmButtonColor: '#FFB603',
  confirmButtonText: 'Contine',
  cancelButtonColor: '',
  cancelButtonText:'Go Back',
  
})

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