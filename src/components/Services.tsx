import Website from '../assets/web-design-card.webp'

function Services() {
  return (
    <div className="relative h-[1030px] flex justify-center mt-10">
        <div className="sticky top-[180px] w-[340px] h-[250px] flex flex-col justify-around items-center">
            <h1 className='text-4xl'>Our <span className='font-bold border-bidhan border-b-4'>Services</span></h1>
            <p className='text-slate-500'>We deliver well-researched and result oriented digital services using the latest technology exactly as per your requirements and business objectives.</p>
            <a href="#" className='text-sky-500'>Discover all our Sevices &gt;</a>
        </div>
        <div className=' w-[760px] h-[900px] pl-14 grid grid-cols-2 gap-8'>
            <div className=' relative w-[340px] h-[425px] shadow-xl rounded-xl border-1 flex flex-col justify-center items-center'>
                <img className='w-[250px] px-[20px] pt-[30px]' src={Website} alt="Website Design" />
                <p className='text-xl font-bold text-center'>Website Design and Development</p>
            </div>
            <div className='relative top-10 w-[340px] h-[425px] shadow-xl rounded-xl border-1 flex flex-col justify-center items-center'>
                <img className='w-[250px] px-[20px] pt-[30px]' src="https://technorio.com/wp-content/uploads/2021/12/software-development-card.webp" alt="Website Design" />
                <p className='text-xl font-bold text-center'>Software and Application Development</p>
            </div>
            <div className=' relative w-[340px] h-[425px] shadow-xl rounded-xl border-1 flex flex-col justify-center items-center'>
                <img className='w-[250px] px-[20px] pt-[30px]' src="https://technorio.com/wp-content/uploads/2021/12/social-media-management-card.webp" alt="Website Design" />
                <p className='text-xl font-bold text-center'>Social Media Management</p>
            </div>
            <div className='relative top-10 w-[340px] h-[425px] shadow-xl rounded-xl border-1 flex flex-col justify-center items-center'>
                <img className='w-[250px] px-[20px] pt-[30px]' src="https://technorio.com/wp-content/uploads/2021/12/digital-advertisement-card.webp" alt="Website Design" />
                <p className='text-xl font-bold text-center px-6'>Digital Branding and Designing</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Services