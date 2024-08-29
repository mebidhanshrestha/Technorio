function Testimonials() {
  return (
    <div className='mt-28 bg-testimonial flex justify-center'>
        <div className='h-[670px] flex flex-col justify-around'>
                <div className="flex justify-center">
                    <h1 className='text-4xl'>What Others <span className='border-b-4 border-bidhan font-bold'>Say</span> About Us</h1>
                </div>
                <div className="grid grid-cols-3 gap-10">  
                    <div className="w-[347px] bg-slate-50 flex flex-col items-center p-10 rounded-xl shadow-lg">
                        <img className="w-[70px] mb-10 rounded-full" src="https://technorio.com/wp-content/uploads/2021/12/abdus-miya-1-460x460.jpg" alt="person1" />
                        <p className="mb-6 text-center text-slate-500">Technorio has been an efficient IT & Software company ever since its establishment in 2015. The optimal services at the allocated budget and consultation on how the client’s marketing can be taken to greater heights is something the company never fails to succeed.</p>
                        <div className="w-full flex flex-col justify-center items-center">
                            <h1 className="font-bold">Abdus Miya</h1>
                            <p className="text-slate-500">Leadership Coach</p>
                        </div>
                    </div>
                    <div className="w-[347px] bg-slate-50 flex flex-col items-center p-10 rounded-xl shadow-lg">
                        <img className="w-[70px] mb-10 rounded-full" src="https://technorio.com/wp-content/uploads/2021/12/razan-lamsal-1.jpg" alt="person1" />
                        <p className="mb-6 text-center text-slate-500">It has been great working with Technorio for over couple of years. The talented and knowledgeable team are always in touch and provides support in a timely way. I feel comfortable working with them and happy with the service they provide.</p>
                        <div className="w-full flex flex-col justify-center items-center">
                            <h1 className="font-bold">Razan Lamsal</h1>
                            <p className="text-slate-500">MD, IC Tech Media Pvt. Ltd.</p>
                        </div>
                    </div>
                    <div className="w-[347px] bg-slate-50 flex flex-col items-center p-10 rounded-xl shadow-lg">
                        <img className="w-[70px] mb-10 rounded-full" src="https://technorio.com/wp-content/uploads/2021/12/ajay-pandey-1.jpg" alt="person1" />
                        <p className="mb-6 text-center text-slate-500">The best service I’d endorse about Technorio is its customer support. The timely response and the uncompromised quality that the company commits in providing is one of many reasons that binds me for the projects with them. I am amazed with their cost friendly and reliable services.</p>
                        <div className="w-full flex flex-col justify-center items-center">
                            <h1 className="font-bold">Ajay Pandey</h1>
                            <p className="text-slate-500">Manager, IT, Glocal Pvt. Ltd.</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
    </div>
  )
}

export default Testimonials