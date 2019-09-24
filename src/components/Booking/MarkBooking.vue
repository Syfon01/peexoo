<template>
  <div class="container mt-5">
    <div class="row">
     <div class="col-md-6 col-6 col-sm-6 col-lg-6">
      <router-link  to="/" class="text-brown"><span class="rounded icon-circle px-2 py-1"><i class="fas fa-arrow-left text-white"></i></span> Go back</router-link>
     </div>
     <div class="col-md-6 col-6 col-sm-6 col-lg-6">
        <button type="button" class="btn btn-yellow float-right" @click="markBooking">Mark Booking as completed</button>
     </div>
     </div>

     <div class="row pt-5">
     <div class="col-md-6 col-6 col-sm-6 col-lg-6">
          <h3>{{title}}
          <span class="badge btn-yellow small font-weight-light">ONGOING</span>
        </h3>
     </div>
     <div class="col-md-6 col-6 col-sm-6 col-lg-6">
        <p class="float-right">Customer: {{customer}} <i class="fas fa-envelope 2x"></i></p>
        
     </div>
     </div>

    <ul class="nav nav-pills mb-3 border-top border-bottom py-2 my-4" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="pills-shoot-tab" data-toggle="pill" href="#pills-shoot" role="tab" aria-controls="pills-shoot" aria-selected="true"><i class="fas fa-camera"></i> Shoot ({{shootItem}})</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-album-tab" data-toggle="pill" href="#pills-albums" role="tab" aria-controls="pills-albums" aria-selected="false"><i class="fas fa-images text-brown"></i> Album ({{albumItem}})</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-details-tab" data-toggle="pill" href="#pills-details" role="tab" aria-controls="pills-details" aria-selected="false"><i class="fas fa-file-alt text-brown"></i> Details</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-order-tab" data-toggle="pill" href="#pills-order" role="tab" aria-controls="pills-order" aria-selected="false"><i class="fas fa-folder-open text-brown"></i> Order</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-customer-tab" data-toggle="pill" href="#pills-customer" role="tab" aria-controls="pills-customer" aria-selected="false"><i class="fas fa-exclamation-triangle text-brown"></i> Report Customer</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-shoot" role="tabpanel" aria-labelledby="pills-shoot-tab">
        <div class="row">
          <div class="col-md-3" v-for="shoot in shoots" :key="shoot.id">
              <div class="card">
                <img :src="shoot.image" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                <router-link to="/shoot/folder">
                  <p class="card-text">{{shoot.title}}</p>
                </router-link>
                  
                  <div class="row">
                    <p class="card-text col"><small class="text-muted">{{shoot.imageQuantity}}</small></p>
                    <p class="card-text col"><small class="text-muted">{{shoot.videoQuantity}}</small></p>
                  </div>
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
          <div class="el-upload__text pt-0">Create Shoot</div>
          </el-upload>
          </div>
        </div>
      </div>

      <photo-album/>
      
      <booking-details/>      
      <div class="tab-pane fade" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">...</div>
      
      <div class="tab-pane fade" id="pills-customer" role="tabpanel" aria-labelledby="pills-customer-tab">...</div>

    </div>
     

    </div>
</template>
<script>
import PhotoAlbum from './PhotoAlbum.vue'
import BookingDetails from './BookingDetails.vue'
export default{
  components:{
    PhotoAlbum,
    BookingDetails,
  },
  data(){
    return{
      title:'Wedding Photography for my son (Oghenetaga and Juliana)',
      customer:'Michael Steven',
      shootItem: 2,
      albumItem: 0,
      shoots:[{
        id: 1,
        image: '/image/img2.jpg',
        title:'Court Wedding',
        imageQuantity:'2 image album',
        videoQuantity:'1 video album'
      },
      {
        id: 2,
        image: '/image/img3.jpg',
        title:'White Wedding',
        imageQuantity:'2 image album',
        videoQuantity:'2 video album'
      },
      ]
    }
  },
  methods:{
    markBooking(){
       this.$swal({
  title: '',
  text: "Are you sure that you are have completed this Booking, and all deliverables are ready?",
  type: '',
  showCancelButton: true,
  cancelButtonColor: '',
  confirmButtonColor: '#FFB603',
  confirmButtonText: 'Yes, Mark Booking as completed'
}).then((result) => {
  if (result.value) {
    this.$swal(
      '',
      "Awaiting for Client's approval",
      'success'
    )
  }
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
.swal2-popup {
  width:40em!important;
  padding:4em!important;
}
</style>