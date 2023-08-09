import './assets/css/style.css'
import { useState } from "react";

function App() {

  const[dropdown8, setDropdown8] = useState(false)
  const[dropdown5, setDropdown5] = useState(false)
  const[dropdown6, setDropdown6] = useState(false)
  const[dropdown7, setDropdown7] = useState(false)
 

  const open = () => {
    setDropdown5(true)
 }
   const close = () => {
    setDropdown5(false)
 }
  const ope = () => {
    setDropdown6(true)
 }
   const clos = () => {
    setDropdown6(false)
 }
  const opn = () => {
    setDropdown7(true)
 }
   const clse = () => {
    setDropdown7(false)
 }
  const op = () => {
    setDropdown8(true)
 }
   const cls = () => {
    setDropdown8(false)
 }

  return (
    
    <div className="bg-[rgb(250,250,250)]  ">
   {/* 1 */}
      <div className="grid grid-cola-1 lg:grid-cols-2 bg-[rgb(27,73,66)] mb-[20px] lg:p-[80px]  ">
          <div className=" py-[40px] px-[60px] lg:p-0 text-white ">
              <h1 className='text-[35px] md:text-[30px] font-[300] lg:text-[45px] text-left pb-[20px] '>
              Monetize your knowledge with best-in-class features
              </h1>
              <p className='text-left text-[15px] lg:text-[25px] pb-[15px]   leading-[145%] tracking-[-0.27px]'>
              Get all the tools you need to build, grow, and manage a thriving online course and coaching business.

              </p>
           
              <button className='bg-[#20c997] rounded-lg p-[15px] flex justify-center lg:justify-start w-full text-center lg:w-auto lg:text-left text-black '>Start for free</button>
          </div>

          <div className="">
          <img className="w-[100%] h-[100%] p-[50px] lg:p-0" src = {require('./assets/af1.avif')} alt="" />
          </div>
      </div>
      {/* 1*/}

      {/* first */}
    {/* 2 */}
    <div className="grid grid-cola-1 lg:grid-cols-2  lg:p-[80px]  ">
          <div className=" py-[40px] px-[60px] lg:p-0 text-black ">
              <h1 className='text-[35px] md:text-[30px] font-[600] lg:text-[45px] text-left pb-[20px] '>
             Build
              </h1>
              <p className='text-left text-[15px] lg:text-[25px] pb-[15px]   leading-[145%] tracking-[-0.27px]'>
              Bring your business online with the features you need to build a great product..

              </p>
           
              <button className='bg-[#20c997] rounded-lg p-[15px] justify-start  text-center w-auto  text-black '>Start for free</button>
          </div>

          <div className="hidden md:block">
          <img className="w-[100%] h-[100%] p-[50px] lg:p-0" src = {require('./assets/af2.avif')} alt="" />
          </div>
      </div>
    {/* 2 */}
    
      {/* 3 */} 
      <div className=" py-[30px] my-0 mx-auto max-w-[350px] md:max-w-none ">
         
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-center md:px-[50px]  py-[20px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
            <div className="">
          
              <h4 className='text-[25px]  pt-[10px] leading-[110%]  font-[350] ' >Create with ease </h4>
              <p className='pt-[20px] pb-[20px] ' >Whether it’s self-paced courses, cohort-based courses, or live coaching, you can do it all on Teachable. Start creating your course or coaching service quickly with our intuitive drag-and-drop builder. </p>
            </div>

            <div className="">
              
              <h4 className='text-[25px]  pt-[10px] leading-[110%]   font-[350] ' >Get paid faster</h4>
              <p className='pt-[20px] pb-[20px] '> Sell right away with our built-in, fully customizable sales page builder. Sell confidently with full ecommerce capabilities. Get paid quickly on your preferred schedule—monthly, weekly, or even daily—no third-party system needed, with teachable:pay.</p>
            </div>

            <div className="">
              
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[350] ' >Extend the power of the platform</h4>
              <p className='pt-[20px] pb-[20px] '> Connect with the tools you already use and love. We offer direct integrations with MailChimp, Zapier, ConvertKit, Google Analytics, Segment, and more. Plus, use our public API to automate your workflow even more..</p>
            </div>

            <div className="">
             
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[350] ' >Optimize student engagement</h4>
              <p className='pt-[20px] pb-[20px] '> Use bespoke student-side features like comments, quizzes, and certifications of completion to drive learning outcomes and student satisfaction.</p>
            </div>

          

     
      </div>
      </div>
      {/* 3 */}

     {/* 4*/}
      <div className="bg-[#129c73] bg-opacity-[.2] text-[rgb(27,73,66)] p-[50px] ">
      <h1 className='text-[30px]  ' >''</h1>

      <p className='text-[25px] lg:text-[30px]  '>Teachable made it simple to create and sell a great-looking course that started generating income immediately. What an amazing thing to be making a living doing what I've been doing all along—sharing what I know!"</p>

      <p className='text-[20px] lg:text-[25px] pt-[20px] '>Marc Sabatella, Mastering MuseScore School</p>
      </div>
      {/*4 */}


{/* second */}

    {/* 5 */}
    <div className="grid grid-cola-1 lg:grid-cols-2  lg:p-[80px]  ">
          <div className=" py-[40px] px-[60px] lg:p-0 text-black ">
              <h1 className='text-[35px] md:text-[30px] font-[600] lg:text-[45px] text-left pb-[20px] '>
              Grow
              </h1>
              <p className='text-left text-[15px] lg:text-[25px] pb-[15px]   leading-[145%] tracking-[-0.27px]'>
              Take your business to greater heights—whether that’s through growing your audience or finding new ways to generate revenue.
              </p>
           
              <button className='bg-[#20c997] rounded-lg p-[15px] justify-start  text-center w-auto  text-black '>Start for free</button>
          </div>

          <div className="hidden md:block">
          <img className="w-[100%] h-[100%] p-[50px] lg:p-0" src = {require('./assets/af3.avif')} alt="" />
          </div>
      </div>
    {/* 5 */}
    
      {/* 6 */} 
      <div className=" py-[30px] my-0 mx-auto max-w-[350px] md:max-w-none ">
         
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-center md:px-[50px]  py-[20px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
            <div className="">
          
              <h4 className='text-[25px]  pt-[10px] leading-[110%]  font-[350] ' >Streamline your business </h4>
              <p className='pt-[20px]  ' >Payment processing is one thing—with teachable:pay, you also get flexibility and peace of mind with ecommerce optimization tools, automated tax filings*, fraud monitoring, chargeback support, and more. </p>

              <p className=' py-[40px] text-[10px] italic '>*Please read our Help center for more details on tax handling in applicable jurisdictions.</p>
            </div>

            <div className="">
              
              <h4 className='text-[25px]  pt-[10px] leading-[110%]   font-[350] ' >Go global</h4>
              <p className='pt-[20px] pb-[20px] '> Sell confidently anywhere in the world with tax-inclusive pricing, available only on teachable:pay. Boost global sales and checkout conversion with upsells, order bumps, enrollment caps, bundles, and more.</p>
            </div>

            <div className="">
              
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[350] ' >Expand and automate</h4>
              <p className='pt-[20px] pb-[20px] '> Incentivize your students to refer their friends with student referrals. Use affiliate marketing tools to recruit partners to promote your business on Teachable. Then automate payouts to collaborators with BackOffice, available only with teachable:pay.</p>
            </div>

            <div className="">
             
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[350] ' >Scale on your terms</h4>
              <p className='pt-[20px] pb-[20px] '> Use bespoke student-side features like comments, quizzes, and certifications of completion to drive learning outcomes and student satisfaction.</p>
            </div>

          

     
      </div>
      </div>
      {/* 6 */}

     {/* 7*/}
      <div className="bg-[#129c73] bg-opacity-[.2] text-[rgb(27,73,66)] p-[50px] ">
      <h1 className='text-[30px]  ' >''</h1>

      <p className='text-[25px] lg:text-[30px]  '>Teachable provides me the tools, support, and strength to see my dreams happen. Not only does Teachable boost my income, but it also boosts my confidence.”</p>

      <p className='text-[20px] lg:text-[25px] pt-[20px] '>Charles Clifford Brooks III, the Working Writer</p>
      </div>
      {/*7 */}


{/* third */}

    {/* 8 */}
    <div className="grid grid-cola-1 lg:grid-cols-2  lg:p-[80px]  ">
          <div className=" py-[40px] px-[60px] lg:p-0 text-black ">
              <h1 className='text-[35px] md:text-[30px] font-[600] lg:text-[45px] text-left pb-[20px] '>
             Manage
              </h1>
              <p className='text-left text-[15px] lg:text-[25px] pb-[15px]   leading-[145%] tracking-[-0.27px]'>
              Whether it’s compliance, taxes, or business management, we automate all the tedious tasks for your business so you can focus on what you do best.

              </p>
           
              <button className='bg-[#20c997] rounded-lg p-[15px] justify-start  text-center w-auto  text-black '>Start for free</button>
          </div>

          <div className="hidden md:block">
          <img className="w-[100%] h-[100%] p-[50px] lg:p-0" src = {require('./assets/af4.avif')} alt="" />
          </div>
      </div>
    {/* 8 */}
    
      {/* 9 */} 
      <div className=" py-[30px] my-0 mx-auto max-w-[350px] md:max-w-none ">
         
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-center md:px-[50px]  py-[20px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
            <div className="">
          
              <h4 className='text-[25px]  pt-[10px] leading-[110%]  font-[350] ' >Manage taxes with ease </h4>
              <p className='pt-[20px] pb-[20px] ' >Do business anywhere without having to worry about tax headaches. Whether it’s remittance or tax forms, we’ll handle taxes so you don’t have to collect manually. </p>
            </div>

            <div className="">
              
              <h4 className='text-[25px]  pt-[10px] leading-[110%]   font-[350] ' >Gain powerful insights</h4>
              <p className='pt-[20px] pb-[20px] '> Understand your business performance and proactively adjust strategies using our advanced data reporting. We provide intuitive reporting on sales and student engagement to help you make data-informed decisions.

              </p>
            </div>

            <div className="">
              
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[350] ' >Extend the power of the platform</h4>
              <p className='pt-[20px] pb-[20px] '> Connect with the tools you already use and love. We offer direct integrations with MailChimp, Zapier, ConvertKit, Google Analytics, Segment, and more. Plus, use our public API to automate your workflow even more..</p>
            </div>

            <div className="">
             
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[350] ' >Stay protected</h4>
              <p className='pt-[20px] pb-[20px] '> We offer industry-leading fraud protection, encryption, and backup capabilities so you stay fully protected and in control of your business and data. Plus, with an uptime of 99.99%, we ensure outages won’t knock you out.

              </p>
            </div>

          

     
      </div>
      </div>
      {/* 9 */}

     {/* 10*/}
      <div className="bg-[#129c73] bg-opacity-[.2] text-[rgb(27,73,66)] p-[50px] ">
      <h1 className='text-[30px]  ' >''</h1>

      <p className='text-[25px] lg:text-[30px]  '>I came from Udemy 5 years ago, looking to host my own school with my own rules. I wanted to focus on courses and Teachable provided a fully featured solution, saving me months and years of development work. I really love the peace of mind Teachable is providing me: I can focus on my courses and students knowing that they have my back on the technical end.”

      </p>

      <p className='text-[20px] lg:text-[25px] pt-[20px] '>Maxime Britto, Purple Giraffe</p>
      </div>
      {/*10 */}

{/* fourth */}


 {/* 11 */}
 <div className="grid grid-cola-1 lg:grid-cols-2  lg:p-[80px]  ">
          <div className=" py-[40px] px-[60px] lg:p-0 text-black ">
              <h1 className='text-[35px] md:text-[30px] font-[600] lg:text-[45px] text-left pb-[20px] '>
              Support
              </h1>
              <p className='text-left text-[15px] lg:text-[25px] pb-[15px]   leading-[145%] tracking-[-0.27px]'>
              No matter where you are on your business journey, we get you the support you need, every step of the way.

              </p>
           
              <button className='bg-[#20c997] rounded-lg p-[15px] justify-start  text-center w-auto  text-black '>Start for free</button>
          </div>

          <div className="hidden md:block">
          <img className="w-[100%] h-[100%] p-[50px] lg:p-0" src = {require('./assets/af5.avif')} alt="" />
          </div>
      </div>
    {/* 11 */}
    
      {/* 12 */} 
      <div className=" py-[30px] my-0 mx-auto max-w-[350px] md:max-w-none ">
         
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-center md:px-[50px]  py-[20px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
            <div className="">
          
              <h4 className='text-[25px]  pt-[10px] leading-[110%]  font-[350] ' >Get personalized guidance </h4>
              <p className='pt-[20px] pb-[20px] ' >From helping you set up your school to mapping out your launch strategy, our dedicated customer success team is here to help. They host live group coaching sessions three times a week, every week.

               </p>
            </div>

            <div className="">
              
              <h4 className='text-[25px]  pt-[10px] leading-[110%]   font-[350] ' >Join the community</h4>
              <p className='pt-[20px] pb-[20px] '> Our exclusive member community, teachable:hq, lets you connect with peers, build a valuable network, and get exclusive content to help you grow.

              </p>
            </div>

            <div className="">
              
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[350] ' >Learn from the best</h4>
              <p className='pt-[20px] pb-[20px] '>Get best practices and insider know-how through our exclusive programming which includes free live events, the Teachable blog, and our flagship training program, teachable:u. Plus, our award-winning customer support team is here to help with any issues you may have, whether through email or live chat.

              </p>
            </div>

            <div className="">
             
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[350] ' >Work with experts</h4>
              <p className='pt-[20px] pb-[20px] '>Take your business to the next level with help from experienced professionals, exclusive to Teachable, in everything from marketing to web design to course-building.

              </p>
            </div>

          

     
      </div>
      </div>
      {/* 12 */}

     {/* 13 */}
     <div className="bg-[#20c997] p-[50px] ">
        <h1 className='text-[30px] md:text-[30px] font-[400] lg:text-[40px] text-center  leading-[145%] tracking-[-0.27px] pb-[20px] '>
     Turn your knowledge into a profitable online business with Teachable.
        </h1>
      
        <button className='bg-[#202020] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-white '>Start for free</button>
      </div>
      {/* 13 */}

      

    </div>
  );
}

export default App;
