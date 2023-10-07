import ScrollCarousel from 'scroll-carousel-react';

export function Gallery() {
    return(
        <section className='bg-white'>
            <div className='container py-5'>
                <h1>This is my component page</h1>
                <p>Now i am showing my creation scroll carousel</p>
            </div>
            <ScrollCarousel
                autoplay
                autoplaySpeed={1}
                speed={5}
                onReady={() => console.log('I am ready')}
                className='mb-5'
            >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-60'>
                    {item}
                </div>
                ))}
            </ScrollCarousel>
        </section>
    );
}