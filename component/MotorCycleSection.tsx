
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


export default function MotorcycleSections() {
  return (
    <div>
    <div className="bg-[#fff] lg:py-30 max-w-7xl mx-auto" style={{ backgroundImage: 'url("https://res.cloudinary.com/diez3alve/image/upload/v1750445958/Bg-Graphic11111111111111_buc6mp.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* First Section - Content Left, Gallery Right */}
      <section className="py-0 px-4 bg-[#F1F5F9]">
        <div className="mx-auto max-w-7xl">
          <div className="grid  grid-cols-1 px-4 items-end  gap-8 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-6  ">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">NO LIMITS</p>
              <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">LOREM IPSUM DOLOR SIT AMET</h2>
              <div className="flex  ">
                <div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor elit ante. Ipsum
                lorem.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 mt-5 rounded-md font-medium flex items-center gap-2">
                Lorem Ipsum
                <ArrowRight className="h-4 w-4" />
              </Button>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/diez3alve/image/upload/v1750440155/mingham_A_group_of_motorcyclists_on_the_road_each_riding_their__10f046d4-7af9-4e1d-8c17-34e51aba49e7_1_a9okr8.png" alt="" />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <img src="https://res.cloudinary.com/diez3alve/image/upload/v1750441816/danazivov_a_group_of_security_guards_dressed_in_black_standing__ea70c97b-c6f6-48d1-8c8e-8482472ca252_1_ptop7j.png" alt="" className="obejct-cover h-[231px]"/>


                <img src="https://res.cloudinary.com/diez3alve/image/upload/v1750441817/rektzed_group_ride_sportbike_motorcycles_real_shot_from_behind__978f828d-5494-49e8-ab02-79b285128831_1_zhfhpz.png" alt="" className="max-w-[405px]"/>
              </div>
            </div>

            {/* Right Image Gallery */}
            <div className=" flex flex-col  gap-4 ">
              {/* Top row - 3 images */}
              <div className="flex flex-col lg:flex-row items-end gap-5 ">
               
                  <img
                    src="https://res.cloudinary.com/diez3alve/image/upload/v1750441932/Section7-Image_u8bw1d.png"
                    alt="Motorcycle detail"
                    className="h-[210px] w-full lg:w-[135px] object-cover"
                  />
               
               
                  <img
                    src="https://res.cloudinary.com/diez3alve/image/upload/v1750440383/eugenia_83179_five_riders_driving_motorbikes_at_night_on_Linzer_8c42f2b7-dac0-4115-9f89-21098bf6dbaf_1_vwua0y.png"
                    alt="Motorcycle riders"
                    className="h-[240px] flex-1 w-[459px] object-cover"
                  />
               
                
              </div>

              {/* Middle row - 1 large image */}
              <div className="col-span-2">
        
                  <img
                    src="https://res.cloudinary.com/diez3alve/image/upload/v1750440499/adryanaputri_Three_touring_motorbikers_on_top_of_a_mountain_wea_63201d91-ae2d-4f7b-874f-d1b141419735_1_aucfcb.png"
                    alt="Motorcycles at sunset"
                    
                    className="h-full max-w-full lg:max-w-[615px] "
                  />
                
              </div>
<div className="flex flex-col lg:flex-row gap-5">
<img
                src="https://res.cloudinary.com/diez3alve/image/upload/v1750440601/twowheelbandito_A_row_of_used_sportbikes_in_a_dealership._Photo_28249471-75cf-4460-891e-e88f96c71a7c_2_lvc61e.png"
                alt="Motorcycle detail"
               
                className="flex-1 "
              />
                <img
                  src="https://res.cloudinary.com/diez3alve/image/upload/v1750440579/marketingmagnetron_Photograph_two_men_shaking_hands_in_a_motorc_1ed4f5ad-9d5a-47e6-8cde-bc70c9d63c24_2_w2qqai.png"
                  alt="Group of motorcyclists"
                  className=""
                />
</div>
              {/* Bottom row - 2 images and 1 large left image */}
            
              
           
             
                
                
                
                 
                
              
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Image Left, Content Right */}
     <section className="py-8 px-4 md:px-6 lg:mt-44">
          <div className="mx-auto max-w-7xl pt-8 bg-[#F8F8F8]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-end relative">
              {/* Left Image */}
              <div className="order-2 lg:order-1 relative">
                <div>

                </div>
                <img
                  src="https://res.cloudinary.com/diez3alve/image/upload/v1750441932/Section7-Image_u8bw1d.png"
                  alt="Two motorcyclists on scenic road"
                  className="w-full h-[300px] md:h-[400px] lg:h-[550px] max-w-full  lg:max-w-[550px] lg:object-cover lg:absolute lg:-mt-152"
                />
              </div>

              {/* Right Content */}
              <div className=" lg:order-2 space-y-6">
                <p className="text-2xl font-medium text-[#1959AC]">
                  Lorem Ipsum
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  <span className="text-[#1959AC]">LOREM IPSUM</span> DOLOR SIT
                  AMET CONSECTETUR. ENIM DONEC.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio
                  enim amet non.
                </p>

                {/* Two-column list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <p className="text-gray-700">Lorem Ipsum</p>
                    <p className="text-gray-700">Lorem Ipsum</p>
                    <p className="text-gray-700">Lorem Ipsum</p>
                  </div>
                  <div className="space-y-5">
                    <p className="text-gray-700">Lorem Ipsum</p>
                    <p className="text-gray-700">Lorem Ipsum</p>
                    <p className="text-gray-700">Lorem Ipsum</p>
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm font-medium flex items-center gap-2">
                  Lorem Ipsum
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="h-[20px] mr-6 hidden lg:flex bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mt-8"></div>
          </div>
        </section>

      {/* Bottom Colored Bar */}
      
    </div>
    </div>
  )
}
