import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='Amazon' days='5 days ago' skills='Senior UI/UX Designer' work='Part-Time' salary='$100,000 - $120,000' city='Seattle, WA' logo='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amazon-icon.png'/>
      <Card user='Google' days='3 days ago' skills='Software Engineer' work='Full-Time' salary='$110,000 - $130,000' city='New York, NY' logo='https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png'/>
      <Card user='Microsoft' days='10 days ago' skills='Product Manager' work='Remote' salary='$90,000 - $110,000' city='Toronto, ON' logo='https://static.vecteezy.com/system/resources/thumbnails/022/100/816/small_2x/microsoft-logo-transparent-free-png.png'/>
      <Card user='Apple' days='17 days ago' skills='iOS Developer' work='Contract' salary='$120,000 - $140,000' city='San Francisco, CA' logo='https://i.pinimg.com/1200x/a7/8c/40/a78c406e4ad95f68bd8b014582ef3ece.jpg'/>
      <Card user='Facebook' days='21 days ago' skills='Data Scientist' work='Full-Time' salary='$105,000 - $125,000' city='Mumbai, India' logo='https://cdn-icons-png.flaticon.com/512/15047/15047435.png'/>
      <Card user='Twitter' days='26 days ago' skills='Content Creator' work='Contract' salary='$95,000 - $115,000' city='Tokyo, Japan' logo='https://i.pinimg.com/736x/97/5a/ce/975ace9b510fa9602c81cf2175c8cf97.jpg'/>
      <Card user='LinkedIn' days='1 days ago' skills='Sales Representative' work='Full-Time' salary='$100,000 - $120,000' city='Paris, France' logo='https://i.pinimg.com/736x/e1/fe/53/e1fe5375bd7accd1e3a607a606124956.jpg'/>
      <Card user='Instagram' days='18 days ago' skills='Marketing Specialist' work='Part-Time' salary='$90,000 - $110,000' city='Berlin, Germany' logo='https://i.pinimg.com/736x/4c/52/56/4c5256619805526f82cbe5dd3a7f4f07.jpg'/>
    </div>
  )
}

export default App
