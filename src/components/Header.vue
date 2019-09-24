<template>
<section>
  <div class="container-fluid">
    This is the side bar
    <!-- List group -->
<div class="row">
  <side-bar/>
  
  <div class="col-9 col-lg-7 col-sm-8 col-lg-9 ">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Home</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">profile</div>
      
        <main-book/>
    <!-- <mark-booking/> -->

       
    
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">setting</div>
    </div>
  </div>
</div>  
</div>
</section>
</template>

<script>
import MainBook from './Booking/MainBook.vue'
// import MarkBooking from './Booking/MarkBooking.vue'

import SideBar from './SideBar.vue'

  export default {
    components:{
      MainBook,
      SideBar,
      // MarkBooking,

    }
  }
</script>

<style lang="scss" scoped>

</style>