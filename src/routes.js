import MarkBooking from './components/Booking/MarkBooking.vue';
import ShootFolder from './components/Booking/ShootFolder.vue';
import ImageEdit from './components/Booking/ImageEdit.vue';
import MainImages from './components/Booking/MainImages.vue';


export default [
  {
    path: '/add/Booking',
    name: 'MarkBooking',
    component: MarkBooking
  },
  {path: '/shoot/folder',
    name: 'shootFolder',
    component: ShootFolder
  },
  {path: '/edit/image',
    name: 'EditImage',
    component: ImageEdit
  },
    {path: '/main/image',
    name: 'MainImages',
    component: MainImages
  },

  
]