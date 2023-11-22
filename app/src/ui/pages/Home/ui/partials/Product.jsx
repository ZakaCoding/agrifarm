import content1 from 'assets/image/potato.jpg';
import content2 from 'assets/image/strawberry.jpg';

export function Product() {
    return(
        <section className="py-5">
            <h2 className="text-5xl font-bold text-center mt-5">Our Featured Product</h2>
            <p className="mt-4 mb-6 w-1/2 text-3xl font-normal text-center mx-auto text-slate-400">
            we have a wide range of agricultural products that we have exported all
            over the world to thousands of our partners
            </p>

            <div className="container">

                <div className="flex justify-center content-center text-center my-5">
                    <div className="mx-2 rounded-[50px] p-8 bg-white shadow-xl">
                        <img className='rounded-[30px] w-28 mb-4 mx-auto' src={content1} alt="Potato" />

                        <div>
                            <h2 className='text-2xl font-bold my-3'>Potato</h2>
                            <p className='text-lg text-gray-400 font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro autem
                            </p>
                        </div>
                    </div>
                    <div className="mx-2 rounded-[50px] p-8 bg-white shadow-xl">
                        <img className='rounded-[30px] w-28 mb-4 mx-auto' src={content2} alt="Potato" />

                        <div>
                            <h2 className='text-2xl font-bold my-3'>Strawberry</h2>
                            <p className='text-lg text-gray-400 font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro autem
                            </p>
                        </div>
                    </div>
                    <div className="mx-2 rounded-[50px] p-8 bg-white shadow-xl">
                        <img className='rounded-[30px] w-28 mb-4 mx-auto' src={content2} alt="Potato" />

                        <div>
                            <h2 className='text-2xl font-bold my-3'>Strawberry</h2>
                            <p className='text-lg text-gray-400 font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro autem
                            </p>
                        </div>
                    </div>
                    <div className="mx-2 rounded-[50px] p-8 bg-white shadow-xl">
                        <img className='rounded-[30px] w-28 mb-4 mx-auto' src={content2} alt="Potato" />

                        <div>
                            <h2 className='text-2xl font-bold my-3'>Strawberry</h2>
                            <p className='text-lg text-gray-400 font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro autem
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">See all products</button>
                </div>
            </div>
        </section>
    )
}