import './assets/css/style.css'
import { useState } from "react";

function App() {

  
  const[dropdown10, setDropdown10] = useState(false)
  const[dropdown11, setDropdown11] = useState(false)
  const[dropdown12, setDropdown12] = useState(false)
  const[dropdown13, setDropdown13] = useState(false)

  const show = () => {
    setDropdown10(true)
 }
   const hide = () => {
    setDropdown10(false)
 }
  const sho = () => {
    setDropdown11(true)
 }
   const hid = () => {
    setDropdown11(false)
 }
  const sh = () => {
    setDropdown12(true)
 }
   const hi = () => {
    setDropdown12(false)
 }
  const s = () => {
    setDropdown13(true)
 }
   const h = () => {
    setDropdown13(false)
 }

  return (
    
    <div className="  ">
      {/* 1 */}
      <div className="lg:flex ">
        <div className="basis-[60%] ">
          <div className=" py-[80px] px-[30px] bg-[rgb(27,73,66)] text-white ">
            <h3 className='text-[40px] md:text-[60px] text-left pb-[20px]  ' >
            The best online course platform for creators, coaches, and teachers.
            </h3>
            <p className='text-[20px] lg:text-[30px] text-left pb-[20px]  '>Online courses are an engaging way to scale your digital business and build a lasting source of income.</p>


            <div className="">
            <h3>Enter your email</h3>
              <div className="lg:grid gap-[20px] lg:grid-cols-2 ">
                <div className="">
                  <input className='w-full p-[15px] mb-[25px] lg:m-0 mt-[10px] ' type="email" placeholder="hello@example.com" id="" />
                </div>
                <div className="">
                <button className='bg-[#20c997] rounded-lg px-[20px] py-[15px] flex justify-center m-0 w-full my-0 mx-auto text-center  text-white '>join for free</button>
                </div>
              </div>

              <p className='text-[12px] pt-[15px] ' >*By submitting your email address, you agree to Teachable's Terms of use and Privacy Policy.</p>

            </div>
          </div>
        </div>

        <div className="basis-[40%]  ">
         <img className="w-[100%] h-[100%] " src = {require('./assets/oc1.avif')} alt="" />
        </div>
      </div>
      {/* 1 */}

      {/* 2 */} 
      <div className="bg-[#f7f5f5] py-[70px] text-[rgb(27,73,66)]  ">
        <div className="max-w-[300px] my-0 mx-auto md:max-w-full ">
          <h1 className='text-[30px] lg:text-[50px] font-[400] tracking-[-0.3px] leading-[120%] text-center pb-[20px] '>Own your content and get paid—on your own terms</h1>
          <p className='text-center pb-[20px] lg:text-[25px] tracking-[-0.16px] leading-[140%]'>Seamlessly customize your content with our no-code course builder. Then, use our simple ecommerce features to get paid directly by your audience.
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 content-center md:px-[30px]  py-[60px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
            <div className="">
              <p className='text-[30px] font-400 pb-[10px] '>Step 1</p>

              <div className=" my-0 w-[100%] md:w-[90%] bg-[rgb(27,73,66)] h-[2px] "></div>
              <h4 className='text-[20px] font-[500] pt-[10px] leading-[110%] ' >Create your coaching<br />product </h4>
              <p className='pt-[20px] pb-[20px]   lg:pr-[50px] ' >Create, sell, and manage all aspects of your coaching business on Teachable. Sell your digital coaching services solo or alongside your course or digital download..</p>
            </div>
            <div className="">
              <p  className='text-[30px] font-400 pb-[10px] ' >Step 2</p>
              <div className="w-[100%] md:w-[90%] bg-[rgb(27,73,66)] h-[2px] "></div>
              <h4 className='text-[20px] font-[500] pt-[10px] leading-[110%]  ' >Upload your content</h4>
              <p className='pt-[20px] pb-[20px]   lg:pr-[50px] '> Customize content based on your audience’s needs. Create milestones, schedule meetings, set-up video calls, send messages and files, and more with coaching at Teachable.</p>
            </div>
            <div className="">
              <p className='text-[30px] font-400 pb-[10px] '>Step 3</p>
              <div className="w-[100%] md:w-[90%] bg-[rgb(27,73,66)] h-[2px] "></div>
              <h4 className='text-[20px] font-[500] pt-[10px] leading-[110%]' >Customize and sell</h4>
              <p className='pt-[20px] pb-[20px]  lg:pr-[50px] '>Offer a professional learning experience to your audience with our easy-to-use, customizable sales page.</p>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}

     {/* 3 */}
      <div className="bg-[rgb(34,34,34)] text-white p-[50px] lg:p-[60px] ">
        <h2 className='text-[25px] lg:text-[35px] text-center ' >Creator-first features</h2>
        <p className='text-center pt-[10px] pb-[30px] ' >Creating and selling online is easy when you have best-in-class features and course creation tools for every type of creator need..</p>

        <div className="lg:grid lg:grid-cols-2 gap-[50px] pb-[70px] ">
          <div className="pb-[50px] lg:pb-0 ">
            <img className="w-[100%] h-[100%]  pb-[20px] " src = {require('./assets/oc2.avif')} alt="" />
          </div>
          <div className="text-left  ">
              <h3  className='text-[20px] lg:text-[35px] font-[500] pb-[10px]  ' >More than a payment gateway</h3>
              <p className='leading-[145%] tracking-[-0.27px] ' >Teachable:pay is an automated way to get paid, manage payouts, and sell more confidently. Get a simple, reliable checkout system, fraud protection, tax-inclusive pricing, global currency conversion, automatic payouts, and more. Plus, enjoy zero transaction fees on Pro and Business plans.

              </p>

              <h3 className='text-[20px] lg:text-[35px] font-[500]  pb-[10px] pt-[20px] ' >Flexibility at your fingertips</h3>
              <p className='leading-[145%] tracking-[-0.27px]  '>Our effortless course builder and customizable templates mean you can personalize your course to align with your style and branding. Course creators also have the flexibility to utilize various forms of multimedia, including audio, video, images, and text to adapt to different learning styles.

              </p>
          </div>

        </div> 
        <div className="lg:grid lg:grid-cols-2 gap-[50px] py-[70px] ">
          <div className="text-left pb-[50px] lg:pb-0  ">
              <h3  className='text-[20px] lg:text-[35px] font-[500] pb-[10px]  ' >Intuitive integrations and apps</h3>
              <p className='leading-[145%] tracking-[-0.27px] ' >The tools you know and love, in one place, working together for you. Third-party integrations, such as MailChimp, Zapier, ConvertKit, Google Analytics, Aweber, and Segment are compatible with our platform, and our public API will automate your workflow.

              </p>

              <h3 className='text-[20px] lg:text-[35px] font-[500] pb-[10px] pt-[20px] ' >Powerful innovations</h3>
              <p className='leading-[145%] tracking-[-0.27px]  '>Our best-in-class features were designed with creators like you in mind. Use our powerful AI course curriculum generator to kickstart an idea, inspire creativity, or unblock yourself. Work smarter, not harder—we’ll show you how.

              </p>
          </div>
          <div className="">
            <img className="w-[100%] h-[100%] " src = {require('./assets/oc3.avif')} alt="" />
          </div>

        </div> 

        <div className="lg:grid lg:grid-cols-2 gap-[50px] pb-[70px] ">
          <div className="pb-[50px] lg:pb-0 ">
            <img className="w-[100%] h-[100%]  pb-[20px] " src = {require('./assets/oc4.avif')} alt="" />
          </div>
          <div className="text-left  ">
              <h3  className='text-[20px] lg:text-[35px] font-[500] pb-[10px]  ' >Growth made easy </h3>
              <p className='leading-[145%] tracking-[-0.27px] ' >Scale and market your course with our advanced data reporting and business management features. Get support selling your course with our affiliate marketing capabilities, automated payouts, and referral programs.

              </p>

              <h3 className='text-[20px] lg:text-[35px] font-[500]  pb-[10px] pt-[20px] ' >Meaningful audience engagement</h3>
              <p className='leading-[145%] tracking-[-0.27px]  '>Build—and sustain—impactful relationships with your audience. Bespoke student-side features like comments, quizzes, and certifications of completion drive learning outcomes and student satisfaction.

              </p>
          </div>

        </div> 
      </div>
      {/* 3 */}

      {/* 4 */}
      <div className="bg-[#20c997] p-[50px] lg:p-[100px] ">
        <h1 className='text-[25px] md:text-[50px] font-[600] lg:text-[40px] text-center '>
        Get started today
        </h1>
        <p className='text-center xl:text-[20px] px-[20px] pb-[20px] lg:px-[80px] leading-[145%] tracking-[-0.27px]'>
        Our all-star features make creating a course, connecting to your audience, and watching your online business grow seamless.
        </p>
        <button className='bg-[#181818] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-white '>Start for free</button>
      </div>
      {/* 4 */}

      {/* 5 */}
      <div className="bg-[#f7f5f5] p-[40px] lg:p-[60px]  ">
        <div className="max-w-[350px] md:max-w-full my-0 mx-auto  ">

          <h1 className='text-[30px] lg:text-[50px] font-[400] tracking-[-0.3px] leading-[120%] text-center pb-[20px] '>Coach spotlight</h1>
          <p className='text-center pb-[20px] lg:text-[25px] tracking-[-0.16px] leading-[140%]'>Meet some professional coaches within the Teachable community and explore their online coaching businesses.</p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-[30px] ">
            
            <div className="bg-white mb-[30px]  ">
              <img className="w-full " src = {require('./assets/oc7.avif')} alt="" />
            
                <div className="p-[20px] ">
                <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%] ' >UAV Coach</h4>
                <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] ' >With more than 40,000 students, UAV Coach’s signature drone training course helps students pass their FAA certification exam.</p>
                <p className=' border-b-2 w-[50%] cursor-pointer border-[rgb(27,73,66)] pb-[5px] mt-[60px] ' >See it in action </p> 
              </div>
            </div>

            <div className="bg-white mb-[30px] ">

              <img className="w-full " src = {require('./assets/oc5.avif')} alt="" />
                <div className="p-[20px] ">
                  <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%]  ' >Music Production</h4>
                  <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] '>Every week, IO Music Academy hosts livestream courses with some of the world's best music producers. Students can interact and ask questions live or watch recordings at their own pace.</p>
                  <p className=' border-b-2 w-[50%] cursor-pointer border-[rgb(27,73,66)] pb-[5px] mt-[60px] ' >See it in action </p>
                </div>
            </div>
            
            <div className="bg-white mb-[30px] ">
              <img className=" w-full" src = {require('./assets/oc6.avif')} alt="" />
                <div className="p-[20px] ">
                  <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%]' >Yoga</h4>
                  <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] '>Rachel teaches online courses on the transformative power of yoga for backcare and scoliosis.</p>
                  <p className=' border-b-2  w-[50%]  cursor-pointer border-[rgb(27,73,66)] pb-[5px] mt-[60px] ' >See it in action </p>
                </div>
            </div>

          
          </div>
      </div>
      </div>
      {/* 5 */}

      {/* 6 */}
      <div className="p-[40px] lg:p-[80px] xl:p-[80px] text-[rgb(27,73,66)] ">
      <h1 className='text-center text-[30px] font-[500] lg:text-[70px] pb-[30px] '>
      FAQ
      </h1>
      {/* first dropdown */}
      <div className="">
        <div className="flex justify-between">
          <div className="text-[25px] lg:text-[30px] pt-[20px] pb-[20px] ">
            <h3>Why should I sell online courses on Teachable?</h3>
          
          </div>
    
          <div className="dropdown">
          {
          !dropdown10  ?

            <div className="">
            <button className='text-[25px] pt-[20px] lg:text-[40px] ' onClick={show}>+</button>
            </div>
            :
            <div className="">
            <button className='text-[25px] pt-[20px] lg:text-[40px] ' onClick={hide}>-</button>
            </div>

            }
          </div>

          </div>
          <div className=" my-0 w-full bg-black h-[1px] "></div>

          <div className="">   
          {
            !dropdown10  ?
            ""
            :
            <div className="">
              <p>Leveraging knowledge products can pave the way for building, growing, and scaling your dream business. Creating a course and selling online is a way to diversify your revenue streams, while giving you control over your content and the learning experiences of your students. Teachable can help you build a course website thanks to our intuitive features and resources for creators and business owners.
              </p>
            </div>
          }
        </div>



        
      </div>
      {/* first dropdown end */}

      {/* second dropdown */}
      <div className="">
        <div className="flex justify-between">
          <div className="text-[25px] lg:text-[30px] pt-[25px] pb-[20px] ">
            <h3>What types of online courses can I sell?</h3>
          </div>
    
          <div className="dropdown2">
          {
          !dropdown11  ?

            <div className="">
            <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={sho}>+</button>
            </div>
            :
            <div className="">
            <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={hid}>-</button>
            </div>

            }
          </div>

          </div>
          <div className=" my-0 w-full bg-black h-[1px] "></div>
          <div className="">   
          {
            !dropdown11  ?
            ""
            :
            <div className="">
              <p>You can create online courses about virtually anything—the sky's the limit. Your unique perspective, talents, and expertise can guide the way. Meanwhile, our course creation tools and multimedia compatibility allow you to turn your wisdom into accessible online courses that appeal to all learning styles.
              </p>
            </div>
          }
        </div>



        
      </div>
  {/* second dropdown enmd */}

      {/* third dropdown */}
      <div className="">
        <div className="flex justify-between ">
          <div className="text-[25px] lg:text-[30px] pb-[20px] pt-[25px] ">
            <h3>How many online courses can I sell on a free plan?</h3>
          </div>
    
          <div className="dropdown">
          {
          !dropdown12  ?

            <div className="">
            <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={sh}>+</button>
            </div>
            :
            <div className="">
            <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={hi}>-</button>
            </div>

            }
          </div>

          </div>
          <div className=" my-0 w-full bg-black h-[1px] "></div>
          <div className="">   
          {
            !dropdown12  ?
            ""
            :
            <div className="">
              <p>You can create and sell one online course when you join for free. But if you want access to five courses, join a Basic plan on Teachable. Our Pro and Business plans offer unlimited online courses, plus enhanced features like using your own custom domain.
              </p>
            </div>
          }
        </div>



        
      </div>
  {/* third dropdown enmd */}

      {/* fourth dropdown */}
      <div className="">
        <div className="flex justify-between ">
          <div className="text-[25px] lg:text-[30px] pb-[20px] pt-[25px] ">
            <h3 >What if I've never sold something online before?</h3>
          </div>
    
          <div className="dropdown">
          {
          !dropdown13 ?

            <div className="">
            <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={s}>+</button>
            </div>
            :
            <div className="">
            <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={h}>-</button>
            </div>

            }
          </div>

          </div>
          <div className=" my-0 w-full bg-black h-[1px] "></div>
          <div className="">   
          {
            !dropdown13 ?
            ""
            :
            <div className="">
              <p>Don’t worry, you’ve come to the right place. Get started on our free plan, and we’ll guide you through our easy-to-use platform, so you can feel confident about starting your own online business.
              </p>
            </div>
          }
        </div>



        
      </div>
  {/* fourth dropdown enmd */}


      </div>
      {/* 6 */}
      {/* 8 */}
      <div className="bg-[#20c997] p-[50px] lg:p-[100px] ">
        <h1 className='text-[30px] md:text-[35px] font-[600] lg:text-[40px] text-center  leading-[145%] tracking-[-0.27px] '>
        Create your online course
        </h1>
        <p className='text-center xl:text-[20px] px-[20px] pb-[20px] lg:px-[80px] leading-[145%] tracking-[-0.27px]'>
        Get started building or scaling the online business of your dreams
        </p>
        <button className='bg-[#0e0d0d] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-white '>Start for free</button>
      </div>
      {/* 8 */}

      

    </div>
  );
}

export default App;
